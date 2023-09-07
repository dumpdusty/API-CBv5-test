import { expect } from 'chai'
import request from 'supertest'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    it('validate status code', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'jacksparrow@pirate.com', password: 'Pirate666!' })

      // console.log(res.body)

      expect(res.statusCode).to.eq(200)
    })

    it('validate response message', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'jacksparrow@pirate.com', password: 'Pirate666!' })

      expect(res.body.message).to.eq('Auth success')
    })

    it('check the token exist', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'jacksparrow@pirate.com', password: 'Pirate666!' })

      expect(res.body.payload.token).to.be.a('string')
    })
  })
})
