import AsyncStorage from '@react-native-async-storage/async-storage'
import { 
  _postApiSignUp, 
  _getApiSignIn, 
  _getLogin
} from "../../apis/auth"
import { 
  SIGN_UP, 
  LOGIN_SUCCESS, 
  LOGIN_FAILED,
  LOGOUT ,
  SET_LOGGED_IN,
  SIGN_UP_FAILED
} from "../type"

import message from '../../utilities/message'

const tokenKey = 'tokenKey'

export const postApiSignUp = (body, navigation) => async dispatch => {
  try {
    _postApiSignUp(body).then(function(res){
      if(res.message.indexOf('thành công') >= 0) {
        message('Đăng ký thành công', 200)
        navigation.navigate('Login')
        return dispatch({type: SIGN_UP, data: res})
      } 
    }
    )
    .catch((error) => {
      message('Tài khoản đã được sử dụng', 400)
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getApiSignIn = (params) => async dispatch => {
  try {
    _getLogin(params)
      .then(function(res) {
        console.log(res,'ressss')
        if(res.status == 200) {
          const dateLogout = Date.now() + (806400000)
          const dateLogoutString = JSON.stringify(dateLogout)
          const tokenString = JSON.stringify(res.data)
          AsyncStorage.setItem('dateLogout', dateLogoutString)
          AsyncStorage.setItem(tokenKey, tokenString)
          message('Đăng nhập thành công', 200)
          return dispatch({
            type: LOGIN_SUCCESS,
            token: tokenString
          });
        } else {
          message('Đăng nhập không thành công', 200)
          return dispatch ({
            type: LOGIN_FAILED
          })
        }
      })
      .catch((err) => {
        message('Đăng nhập không thành công', 200)
      })
  } catch (error) {
      message('Đăng nhập không thành công', 200)
      return dispatch ({type: LOGIN_FAILED, error})
  }
}


export const logOut = () => async dispatch => {
  await AsyncStorage.removeItem(tokenKey)
  message('Đăng xuất thành công', 200)
  await AsyncStorage.removeItem('dateLogout')
  dispatch({type: LOGOUT})
}

const restoreAuthStateFromStorage = async () => {
  try {
      return await AsyncStorage.getItem(tokenKey);
  } catch (error) {
      return false;
  }
}

export const checkLogin =  () => {
  return async (dispatch) => {
    const dateLogout = await AsyncStorage.getItem('dateLogout')
    const now = Date.now()
    const isLoggedIn = JSON.parse(await restoreAuthStateFromStorage());
			if(dateLogout < now) {
				removeToken()
			}
      dispatch({
				type: SET_LOGGED_IN,
				isLoggedIn
      })
  }
}

const removeToken = async () => {
  try {
      return await AsyncStorage.removeItem(tokenKey)
  } catch (error) {
      return false;
  }
}