import { expect } from 'chai'
import * as clientHelper from '../helpers/clients-helper'
import request from 'supertest'

describe('Clients tests', () => {
  describe('create client', () => {
    let res
    before(async () => {
      res = await clientHelper.create()
    })
    it('status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('response message', () => {
      expect(res.body.message).to.eq('Client created')
    })
    it('payload', () => {
      expect(res.body.payload).not.to.be.empty
    })
    it('payload is string', () => {
      expect(res.body.payload).to.be.a('string')
    })
  })

  describe('get all clients', () => {
    let res
    before(async () => {
      res = await clientHelper.getAll()
    })
    it('verify status code', async () => {
      expect(res.statusCode).to.eq(200)
    })
    it('body message', () => {
      expect(res.body.message).to.eq('ClientSearch ok')
    })
    it('quantity of requested entities', () => {
      expect(res.body.payload.items.length).to.eq(25)
    })
  })
})
