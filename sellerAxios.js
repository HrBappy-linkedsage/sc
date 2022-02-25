// authAxios.js
import axios from 'axios'


let baseURL = 'https://api-seller.shafa.care/api/v4/auth/' //test

if(process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "production") {
  baseURL = 'https://api-seller.shafa.care/api/v4/auth/' //live
}

const customInstance = axios.create ({
  baseURL : baseURL
})

export default customInstance
