import request from 'supertest'
const chance = require('chance').Chance()

function create() {
  return request(process.env.BASE_URL)
    .post('/v5/client')
    .set('Authorization', process.env.TOKEN)
    .send({
      name: 'Client-' + Date.now(),
    })
}

function getAll() {
  return request(process.env.BASE_URL)
    .post('/v5/client/search')
    .set('Authorization', process.env.TOKEN)
    .send({
      limit: 25,
    })
}

export { create, getAll }
