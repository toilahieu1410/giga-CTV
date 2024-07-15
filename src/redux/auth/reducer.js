import { 
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP,
  SET_LOGGED_IN
} from '../type'
import {REHYDRATE} from 'redux-persist'

const initialState = {
  isLoggedIn: false,
  restoring: true,
  err: null,
  isLoading: true,
}

const auth = ( state = initialState, action ) => {
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.auth) {
        return state;
      }
      return {...action.payload.auth, isLoading: false}
    }
    case SIGN_UP : 
      return {
        ...state,
        restoring: false,
      }
    case LOGIN_SUCCESS:
      return {
          ...state,
          isLoggedIn: true,
          restoring: false,
      }
    case LOGIN_FAILED: 
      return {
          ...state,
          restoring: false,
          err: action.err
      }
    case SET_LOGGED_IN:
      return {
          ...state,
          restoring: false,
          isLoggedIn: action.isLoggedIn
      }
    case LOGOUT:
      return {
          ...state,
          isLoggedIn: false
      }
    default:
      return state
  }
}

export default auth