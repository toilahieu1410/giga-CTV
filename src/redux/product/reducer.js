import {
  GET_CATEGORY,
  GET_SUB_CATEGORY,
  GET_PRODUCT,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_CATEGORY
} from '../type'
import {REHYDRATE} from 'redux-persist'

const initialState = {
  listCategory: [],
  listSubCategory: [],
  listProduct: [],
  productDetail: null,
  listProductCategory: []
}

const product = ( state = initialState, action ) => {
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.product) {
        return state
      }
      return {...action.payload.product, isLoading: false}
    }
    case GET_CATEGORY : 
      return {
        ...state,
        listCategory: action.data,
      }
    case GET_SUB_CATEGORY : 
      return {
        ...state,
        listSubCategory: action.data,
      }
    case GET_PRODUCT : 
      return {
        ...state,
        listProduct: action.data,
      }
    case GET_PRODUCT_DETAIL : 
      return {
        ...state,
        productDetail: action.data,
      }
    case GET_PRODUCT_CATEGORY : 
      return {
        ...state,
        listProductCategory: action.data,
      }
    default:
      return state
  }
}

export default product