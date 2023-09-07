import { expect } from 'chai'
import request from 'supertest'
import 'dotenv/config'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    it('validate status code', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      // console.log(res.body)

      expect(res.statusCode).to.eq(200)
    })

    it('validate response message', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.body.message).to.eq('Auth success')
    })

    it('check the token exist', async () => {
      let res
      res = await request(process.env.BASE_URL)
        .post('/user/login')
        .send({ email: process.env.EMAIL, password: process.env.PASSWORD })

      expect(res.body.payload.token).to.be.a('string')
    })
  })
})
