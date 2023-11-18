import { expect } from 'chai'
import 'dotenv/config'
import { login } from '../helpers/general-helper'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    let res
    before(async () => {
      res = await login()
    })

    it('validate status code', async () => {
      console.log('first')
      await expect(res.statusCode).to.eq(200)
    })

    it('validate response message', () => {
      console.log('second')
      expect(res.body.message).to.eq('Auth success')
    })

    it('check the token exist', () => {
      expect(res.body.payload.token).to.be.a('string')
    })
  })
  describe('Auth with invalid credentials', () => {
    let res
    before(async () => {
      res = await login('invalid', 'invalid')
    })
    it('validate status code', async () => {
      await expect(res.statusCode).to.eq(400)
    })
    it('validate response message', () => {
      expect(res.body.message).to.eq('Auth failed')
    })
    it('check the token exist', () => {
      expect(res.body.payload).to.not.haveOwnProperty('token')
    })

    it('just for test', () => {
      console.log('test')
    })
  })
})
