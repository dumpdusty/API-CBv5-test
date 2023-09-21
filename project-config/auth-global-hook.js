import 'dotenv/config'
import { login } from '../helpers/general-helper'

before(async () => {
  const response = await login()

  process.env.TOKEN = response.body.payload.token
})
