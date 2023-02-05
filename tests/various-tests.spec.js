const chance = require('chance').Chance()
import { login, register, emailSearch } from '../helpers/general-helper'
import supertest from "supertest";
import { expect } from 'chai'

describe('Space trimming test', () => {
    let testEmail = ' james' + Date.now() + '@test.com   '
    let res

    before(async()=> {
        await register(chance.first(), chance.last(), testEmail, process.env.PASSWORD)
        res = await login(testEmail.trim(), process.env.PASSWORD)
    })

    it('check if spaces are trimmed', () => {
        expect(res.statusCode).to.eq(200)
    });

    it('check if spaces trimmed during registration by logging in ', async() => {
        expect(res.body.message).to.eq('Auth success')
    });

    it('check the email in response is equal to trimmed email', () => {
        expect(res.body.payload.user.email).to.eq(testEmail.trim())
    });
});

describe.only('Email confirmation', () => {
    const testEmail = 'user_' + Date.now() + '@pirate.com'
    let str, endPoint, res, check
    before(async () => {
        await register(chance.first(), chance.last(), testEmail, process.env.PASSWORD)
        str = await emailSearch(testEmail)

        endPoint = str.body.payload.items[0].message.split('\n')[4].split('https://clientbase.us')[1]

        res = await supertest(process.env.BASE_URL).get(endPoint).send()

        check = await login(testEmail, process.env.PASSWORD)
    })

    it('check the response status', () => {
        expect(res.statusCode).to.eq(200)
    })

    it('check the response message', () => {
        expect(res.body.message).to.include('confirmed')
    })

    it('check the role', () => {
        expect(check.body.payload.user.roles).to.include('verified')
    })
})



