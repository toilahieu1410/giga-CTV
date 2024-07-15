import  {
  GET_BANNER,
  GET_PRODUCT_HOME
} from '../type'
import {REHYDRATE} from 'redux-persist'

const initialState = {
  listBanner: [],
  listProductHome: [],
  isLoading: true,
}

const home = ( state = initialState, action ) => {
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.home) {
        return state
      }
      return {...action.payload.home, isLoading: false}
    }
    case GET_BANNER:
      return {
        ...state,
        listBanner: action.data,
        isLoading: false
      }
    case GET_PRODUCT_HOME:
      return {
        ...state,
        listProductHome: action.data,
        isLoading: false
      }
    default:
      return state
  }
}

export default home