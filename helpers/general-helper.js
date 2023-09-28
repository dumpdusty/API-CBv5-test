import request from 'supertest'

function login(email = process.env.EMAIL, password = process.env.PASSWORD) {
  return request(process.env.BASE_URL + '/v5')
    .post('/user/login')
    .send({ email, password })
}

function register(firstName, lastName, email, password) {
  return request(process.env.BASE_URL + '/v5')
    .post('/user')
    .send({ firstName, lastName, email, password })
}

function emailSearch(email) {
  return request(process.env.BASE_URL).post(`/email/search`).send({ email })
}
// function randomEmail() {
//   return 'user_' + Date.now() + '@pirate.com'
// }

export { login, register, emailSearch }
