import { API_GIGA } from './header'
import axios from 'axios'

export const _postApiSignUp = async (body) => {
  const request = await axios.post(`${API_GIGA}/auth/sign-up`, body)
  return request.data
}

// export const _getApiSignIn = async (params) => {
//   const request = await axios.get(`${API_GIGA}/account/sign-in-cms`, {
//     params: params
//   })
//   return request
// }

export const _getLogin = async (params) => {
  const request = await axios.get(`${API_GIGA}/account/sign-in-cms`, {
    params: params
  })
  return request
}