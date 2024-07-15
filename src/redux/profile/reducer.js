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
} from '../type'
import {REHYDRATE} from 'redux-persist'

const initialState = {
  profileName: null,
  listBank: [],
  isLoading: true,
  listCity: [],
  listDistrict: [],
  listWard: [],
  listAddress: []
}

const profile = ( state = initialState, action ) => {
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.profile) {
        return state;
      }
      return {...action.payload.profile, isLoading: false}
    }
    case GET_PROFILE : 
      return {
        ...state,
        profileName: action.data
      }
    case UPDATE_PROFILE : 
      return {
        ...state,
      }
    case GET_LIST_BANK : 
      return {
        ...state,
        listBank: action.data
      }
    case CHANGE_PASWORD : 
      return {
        ...state,
      }
    case GET_CITY : 
      return {
        ...state,
        listCity: action.data
      }
    case GET_DISTRICT : 
      return {
        ...state,
        listDistrict: action.data
      }
    case GET_WARD : 
      return {
        ...state,
        listWard: action.data
      }
    case GET_LIST_ADDRESS : 
      return {
        ...state,
        listAddress: action.data
      }
    case POST_LIST_ADDRESS : 
      return {
        ...state
      }
    case UPDATE_LIST_ADDRESS : 
      return {
        ...state
      }
    case DELETE_LIST_ADDRESS : 
      return {
        ...state,
    
      }
    default:
      return state
  }
}

export default profile