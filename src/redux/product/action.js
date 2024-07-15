import { 
  _getCategory, 
  _getSubCategory,
  _getProduct,
  _getProductDetail,
  _getProductByCategory
} from "../../apis/product"

import { 
  GET_CATEGORY, 
  GET_SUB_CATEGORY,
  GET_PRODUCT,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_CATEGORY
} from "../type"

export const getCategory = () => async dispatch => {
  try {
    _getCategory().then(res => {
      return dispatch({type: GET_CATEGORY, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getSubCategory = (id) => async dispatch => {
  try {
    _getSubCategory(id).then(function(res){
      return dispatch({type: GET_SUB_CATEGORY, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getProduct = (params) => async dispatch => {
  try {
    _getProduct(params).then(function(res){
      return dispatch({type: GET_PRODUCT, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getProductDetail = (id) => async dispatch => {
  try {
    _getProductDetail(id).then(res => {
      return dispatch({type: GET_PRODUCT_DETAIL, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getProductByCategory = (params, body) => async dispatch => {
  try {
    _getProductByCategory(params, body).then(res => {
      return dispatch({type: GET_PRODUCT_CATEGORY, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}