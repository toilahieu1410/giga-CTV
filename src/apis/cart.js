import { API_GIGA, authHeader, axiosIntance } from "./header"

export const _getCart = async () => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/order/cart`, {
    headers: header
  })
  return request.data
}

export const _postCart = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.post(`${API_GIGA}/order/cart`, body, {
    headers: header
  })
  return request
}

export const _updateCart = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.put(`${API_GIGA}/order/cart`, body, {
    headers: header
  })
  return request.data
}

export const _deleteCart = async (id) => {
  const header = await authHeader()
  const request = await axiosIntance.delete(`${API_GIGA}/order/cart/${id}`, {
    headers: header
  })
  return request.data
}

export const _createOrder = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.post(`${API_GIGA}/order/checkout`, body, {
    headers: header
  })
  return request
}

export const _confirmOrder = async (id) => {
  const header = await authHeader()
  const body = {}
  const request = await axiosIntance.put(`${API_GIGA}/order/submit-checkout/${id}`, body, {
    headers: header
  })
  
  return request.data
}

export const _getListOrder = async (params) => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/order/checkout/`, {
    headers: header,
    params: params
  })
  return request.data
}

export const _getDetailOrder = async (id) => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/order/checkout/${id}`, {
    headers: header
  })
  return request.data
}

export const _deleteOrder = async (id) => {
  const header = await authHeader()
  const request = await axiosIntance.delete(`${API_GIGA}/order/checkout/${id}`, {
    headers: header
  })
  return request.data
}
