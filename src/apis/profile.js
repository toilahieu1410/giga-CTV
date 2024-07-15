import axios from 'axios'
import { API_GIGA, authHeader } from './header'

export const _getApiProfile = async () => {
  const header = await authHeader()
  const request = await axios.get(`${API_GIGA}/auth/profile`, {
    headers: header
  })
  return request.data
}

export const _updateApiProfile = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.put(`${API_GIGA}/profile`, body, {
    headers: header
  })
  return request.data
}

export const _getListBank = async () => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/profile/list-bank`, {
    headers: header
  })
  return request.data
}

export const _changePassword = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.put(`${API_GIGA}/profile/change-password`, body, {
    headers: header
  })  
  return request
}

export const _checkPassword = async (params) => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/profile/change-password`, {
    headers: header,
    params: params
  }) 
  return request
}

export const _getCity = async () => {
  const request = await axiosIntance.get(`${API_GIGA}/deliver/city`)
  return request
}

export const _getDistrict = async (cityId) => {
  const request = await axiosIntance.get(`${API_GIGA}/deliver/district/${cityId}`)
  return request
}

export const _getWard = async (districtId) => {
  const request = await axiosIntance.get(`${API_GIGA}/deliver/ward/${districtId}`)
  return request
}

export const _getListAddress = async () => {
  const header = await authHeader()
  const request = await axiosIntance.get(`${API_GIGA}/profile/address`, {
    headers: header
  })
  return request
}

export const _postListAddress = async (body) => {
  const header = await authHeader()
  const request = await axiosIntance.post(`${API_GIGA}/profile/address`, body, {
    headers: header
  })
  return request
}

export const _updateListAddress = async (id, body) => {
  const header = await authHeader()
  const request = await axiosIntance.put(`${API_GIGA}/profile/address/${id}`, body, {
    headers: header
  })
  return request
}

export const _deleteListAddress = async (id) => {
  const header = await authHeader()
  const request = await axiosIntance.delete(`${API_GIGA}/profile/address/${id}`, {
    headers: header
  })
  return request
}