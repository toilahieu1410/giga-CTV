import { 
  GET_CART, 
  POST_CART, 
  UPDATE_CART, 
  DELETE_CART,
  CREATE_ORDER,
  CONFIRM_ORDER ,
  GET_LIST_ORDER,
  DELETE_ORDER,
  GET_DETAIL_ORDER
} from "../type";
import {REHYDRATE} from 'redux-persist'

const initialState = {
  listCart: [],
  listOrder: [],
  detailOrder: {}
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.cart) {
        return state;
      }
      return {...action.payload.cart, isLoading: false}
    }
    case GET_CART :
      return {
        ...state,
        listCart: action.data
      }
    case POST_CART :
      return {
        ...state
      }
    case UPDATE_CART :
      return {
        ...state
      }
    case DELETE_CART :
      return {
        ...state
      }
    case CREATE_ORDER :
      return {
        ...state
      }
    case CONFIRM_ORDER :
      return {
        ...state
      }
    case GET_LIST_ORDER :
      return {
        ...state,
        listOrder: action.data
      }
    case DELETE_ORDER :
      return {
        ...state
      }
    case GET_DETAIL_ORDER :
      return {
        ...state,
        detailOrder: action.data
      }
    default: 
      return state
  }
}

export default cart