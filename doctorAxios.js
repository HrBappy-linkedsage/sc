// authAxios.js
import axios from 'axios'

import { getCookies } from './helpers/Cookies/AdminCookies';

const access = getCookies('userData')

console.log("access============",access)


let token = ''
if (access) token = access.token



let baseURL = 'https://api-doctor-test.shafa.care/api/v2/auth' //test 

if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "production") {
  baseURL = 'https://api-admin.shafa.care/api/v3/auth/' //live
} else if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "local") {
  baseURL = 'http://localhost:3030/api/v3/auth/' //local
}

const customInstance = axios.create({
  baseURL: baseURL,
  headers: { 'Authorization': token }
})

export default customInstance
