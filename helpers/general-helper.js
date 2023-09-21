import request from 'supertest'

function login(email = process.env.EMAIL, password = process.env.PASSWORD) {
  return request(process.env.BASE_URL)
    .post('/user/login')
    .send({ email, password })
}

function register(firstName, lastName, email, password) {
  return request(process.env.BASE_URL)
    .post('/user')
    .send({ firstName, lastName, email, password })
}

// function randomEmail() {
//   return 'user_' + Date.now() + '@pirate.com'
// }

export { login, register }
