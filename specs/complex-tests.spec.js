import { login, register, emailSearch } from '../helpers/general-helper'
import request from 'supertest'
import { expect } from 'chai'

const chance = require('chance').Chance()

describe('Email confirmation', () => {
  let res, string, endPoint, confirmation
  before(async () => {
    const randomEmail = 'user_' + Date.now() + '@pirate.com'

    await register(
      chance.first(),
      chance.last(),
      randomEmail,
      process.env.PASSWORD
    )

    string = await emailSearch(randomEmail)

    endPoint = string.body.payload.items[0].message
      .split('\n')[4]
      .split('https://clientbase.us')[1]

    confirmation = await request(process.env.BASE_URL).get(endPoint).send()

    res = await login(randomEmail, process.env.PASSWORD)
  })

  it('verify status code', async () => {
    expect(confirmation.statusCode).to.eq(200)
  })

  it('verify role "verified" assigned', () => {
    expect(res.body.payload.user.roles).to.include('verified')
  })
})
