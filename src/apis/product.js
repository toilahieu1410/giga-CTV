import axios from 'axios'
import { API_GIGA, authHeader } from './header'

export const _getCategory = async () => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/product/categories`, {
    headers: header
  })
  return request.data
}

export const _getSubCategory = async (id) => {
  // const header = await authHeader()
  // const request = await axiosIntance.get(`${API_GIGA}/product/sub-categories/${id}`, {
  //   headers: header
  // })
  // return request.data
}

export const _getProduct = async (params) => {
  // const header = await authHeader()
  // const request = await axiosIntance.get(`${API_GIGA}/product`, {
  //   headers: header,
  //   params: params
  // })
  // return request.data
}

export const _getProductDetail = async (id) => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/product/product-id/${id}`, {
    headers: header
  })
  return request.data
}

export const _getProductByCategory = async (params, body) => {
  const header = await authHeader()
  const request = await axios.post(`${API_GIGA}/product/product-categories`, body, {
    headers: header,
    params: params
  })
  return request.data
}