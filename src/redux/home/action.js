import {
  _getBanner,
  _getProductHome
} from '../../apis/home'
import  {
  GET_BANNER,
  GET_PRODUCT_HOME
} from '../type'

export const getBanner = () => async dispatch => {
  try {
    _getBanner().then(res => {
      return dispatch({ type: GET_BANNER, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getProductHome = () => async dispatch => {
  try {
    _getProductHome().then(res => {
      return dispatch({ type: GET_PRODUCT_HOME, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}