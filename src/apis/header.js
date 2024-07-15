import AsyncStorage from '@react-native-async-storage/async-storage'

//export const API_GIGA = 'https://ctv.giga.vn/app'
export const API_SERVER_IMAGE = 'https://img.gigadigital.vn/v1'
export const API_SERVER = 'https://testserver.gigadigital.vn/v1'

 export const API_GIGA = 'https://testserver.gigadigital.vn/v1'
// export const API_SERVER_IMAGE = 'http://192.168.83.125:8008/v1'

export const authHeader = async () => {
  const dataToken = await AsyncStorage.getItem('tokenKey')
  const token = JSON.parse(dataToken)
  const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-access-token': token
  }
  return header
}