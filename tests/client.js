const chance = require('chance').Chance()
import { expect } from 'chai'
import { createClient } from "../helpers/client-helper";

describe('Clients positive', () => {
    let res
    before('Create a client', async() => {
        res = await createClient(chance.name(), chance.phone())

    });
    it.only('check the status code', () => {
        expect(res.statusCode).to.eq(200)
    });
    it('check the response message code', () => {
        expect(res.body.message).to.eq('Client created')
    });
    it('check the response has a client id', () => {
        expect(res.body.payload).to.be.a('string')
    });
});

describe('Get client by ID', () => {
    before(()=>{

    })

    it('', () => {

    });
});
