import axios from 'axios'
import { API_GIGA, authHeader } from './header'

export const _getFavourite = async (params) => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/favourite`, {
    headers: header,
    params: params
  })
  return request.data
}

export const _postFavourite = async (body) => {
  const header = await authHeader()
  const request = await axios.post(`${API_GIGA}/favourite`, body, {
    headers: header
  })
  return request.data
}

export const _deleteFavourite = async (id) => {
  const header = await authHeader()
  const request = await axios.delete(`${API_GIGA}/favourite/${id}`, {
    headers: header
  })
  return request.data
}