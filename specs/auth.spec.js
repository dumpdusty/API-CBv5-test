import { expect } from 'chai'
import request from 'supertest'
import 'dotenv/config'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    let res
    before(async () => {
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })
    })

    it('validate status code', async () => {
      await expect(res.statusCode).to.eq(200)
    })

    it('validate response message', () => {
      expect(res.body.message).to.eq('Auth success')
    })

    it('check the token exist', () => {
      expect(res.body.payload.token).to.be.a('string')
    })
  })

  describe('Auth with invalid credentials', () => {})
})
