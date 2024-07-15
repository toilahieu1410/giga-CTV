import { 
  _getApiProfile, 
  _updateApiProfile,
  _getListBank ,
  _changePassword,
  _getCity,
  _getDistrict,
  _getWard, 
  _getListAddress,
  _postListAddress,
  _updateListAddress,
  _deleteListAddress
} from "../../apis/profile"
import { logOut } from "../auth/action"
import { 
  GET_PROFILE, 
  UPDATE_PROFILE,
  GET_LIST_BANK,
  CHANGE_PASWORD,
  GET_CITY,
  GET_DISTRICT,
  GET_WARD,
  GET_LIST_ADDRESS,
  POST_LIST_ADDRESS,
  UPDATE_LIST_ADDRESS,
  DELETE_LIST_ADDRESS
} from "../type"
import message from '../../utilities/message'
import { wait } from "../../utilities/useToken"

export const getApiProfile = () => async dispatch => {
  try {
    _getApiProfile().then(function(res){
      return dispatch({type: GET_PROFILE, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateApiProfile = (body, navigation) => async dispatch => {
  try {
    _updateApiProfile(body).then(function(res) {
      dispatch(getApiProfile())
      message('Cập nhật thành công', 200)
      navigation.navigate('MainTab')
      return dispatch({type: UPDATE_PROFILE, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getListBank = () => async dispatch => {
  try {
    _getListBank().then(function(res){
      return dispatch({type: GET_LIST_BANK, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const changePassword = (body) => async dispatch => {
  try {
    _changePassword(body).then(function(res) {
      if(res.status == 200) {
        message(res.data.message, 200)
        wait(2000).then(() => dispatch(logOut()))
        return dispatch({type: CHANGE_PASWORD, data: res.data})
      }
      else {
        message(res.data.message, 300)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getCity = () => async dispatch => {
  try {
    _getCity().then(function(res) {
      return dispatch({type: GET_CITY, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getDistrict = (cityId) => async dispatch => {
  try {
    _getDistrict(cityId).then(function(res) {
      return dispatch({type: GET_DISTRICT, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getWard = (districtId) => async dispatch => {
  try {
    _getWard(districtId).then(function(res) {
      return dispatch({type: GET_WARD, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getListAddress = () => async dispatch => {
  try {
    _getListAddress().then(function(res) {
      return dispatch({type: GET_LIST_ADDRESS, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const postListAddress = (body) => async dispatch => {
  try {
    _postListAddress(body).then(function(res) {
      dispatch(getListAddress())
      return dispatch({type: POST_LIST_ADDRESS, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateListAddress = (id, body) => async dispatch => {
  try {
    _updateListAddress(id, body).then(function(res) {
      dispatch(getListAddress())
      return dispatch({type: UPDATE_LIST_ADDRESS, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteListAddress = (id) => async dispatch => {
  try {
    _deleteListAddress(id).then(function(res) {
      dispatch(getListAddress())
      return dispatch({type: DELETE_LIST_ADDRESS, data: res.data})
    })
  } catch (error) {
    throw new Error(error)
  }
}