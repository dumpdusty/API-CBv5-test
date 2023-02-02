import request from 'supertest'
const chance = require('chance').Chance()


function createClient(name, phone){
    return request(process.env.BASE_URL)
        .post('client')
        .set('Authorization', process.env.TOKEN)
        .send({name, phone})
}




export { createClient }
