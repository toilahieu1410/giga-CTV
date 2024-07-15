import axios from 'axios'
import { API_GIGA, authHeader } from './header'

export const _getBanner = async () => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/home/banner`, {
    headers: header
  })
  return request.data
}

export const _getProductHome = async () => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/home/product-home`, {
    headers: header
  })
  return request.data
}