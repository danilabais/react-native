import axios from 'axios'

const BASE_URL = 'https://www.1121177-cx06692.tw1.ru/api/'

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
}

const TIMEOUT = 10 * 1000

// class Axios {
//   constructor() {
//     this.client = this.initClient()
//   }

//   initClient() {
//     return axios.create({
//       baseURL: BASE_URL,
//       headers: HEADERS,
//       timeout: TIMEOUT,
//     })
//   }

//   getToken() {
//     const tokens = JSON.parse(localStorage.getItem('tokens')) || null

//     return tokens?.access?.token
//   }

//   async get(url, responseType = null) {
//     const config = { url, method: 'GET' }

//     const response = await this.request(config, responseType)

//     return response
//   }

//   async post(url, data, headers = null, withoutToken = false) {
//     const config = { url, method: 'POST', data }

//     if (headers !== null) {
//       config.headers = headers
//     }

//     const response = await this.request(config, null, withoutToken)

//     return response
//   }

//   async request(requestConfig, responseType = null, withoutToken = false) {
//     try {
//       if (responseType !== null) {
//         requestConfig.responseType = responseType
//       }

//       if (withoutToken) {
//         this.client.defaults.headers['Authorization'] = ''
//       } else {
//         this.client.defaults.headers[
//           'Authorization'
//         ] = `Bearer ${this.getToken()}`
//       }

//       const response = await this.client(requestConfig)

//       return { status: true, data: response.data, headers: response.headers }
//     } catch (error) {
//       return this.handleError(error)
//     }
//   }

//   handleError(error) {
//     return {
//       status: false,
//       message:
//         error.response?.data?.message || error.message || 'Неизвестная ошибка',
//     }
//   }
// }

export default axios.create({
    baseURL: BASE_URL,
    headers: HEADERS,
    timeout: TIMEOUT,
  })
