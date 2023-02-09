import supertest from 'supertest'
import 'dotenv/config'

before(async ()=>{
    const res = await supertest(process.env.BASE_URL)
        .post('/v5/user/login')
        .send({email: process.env.EMAIL, password: process.env.PASSWORD})

    process.env.TOKEN = res.body.payload.token
})
