import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from "jwt-decode";

export const getToken = async () => {
  const dataToken = await AsyncStorage.getItem('tokenKey')
  const decoded = jwt_decode(dataToken)
  if(decoded) {
    return decoded
  }
  return null
}

export const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}