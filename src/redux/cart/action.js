import { 
  _getCart, 
  _postCart, 
  _updateCart,
  _deleteCart,
  _createOrder,
  _confirmOrder ,
  _getListOrder,
  _deleteOrder,
  _getDetailOrder
} from "../../apis/cart";
import message from "../../utilities/message";
import { 
  GET_CART,
  POST_CART, 
  UPDATE_CART,
  DELETE_CART,
  CREATE_ORDER,
  CONFIRM_ORDER,
  GET_LIST_ORDER,
  DELETE_ORDER,
  GET_DETAIL_ORDER
} from "../type";

export const getCart = () => async dispatch => {
  try {
    _getCart().then(function(res) {
      return dispatch({type: GET_CART, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const postCart = (body) => async dispatch => {
  try {
    _postCart(body).then(function(res) {
      if(res.status == 200) {
        message('Thêm vào giỏ hàng thành công', 200)
        return dispatch({type: POST_CART, data: res})
      }
      else {
        message('Thêm vào giỏ hàng thất bại', 300)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const updateCart = (body) => async dispatch => {
  try {
    _updateCart(body).then(function(res) {
      dispatch(getCart())
      return dispatch({type: UPDATE_CART, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteCart = (id) => async dispatch => {
  try {
    _deleteCart(id).then(function(res) {
      dispatch(getCart())
      return dispatch({type: DELETE_CART, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const createOrder = (body, navigation) => async dispatch => {
  try {
    _createOrder(body).then(function(res) {
      if(res.status == 200) {
        navigation.navigate('XacNhanDonHang', {data: res.data})
        return dispatch({type: CREATE_ORDER, data: res})
      }
      else {
        message('Tạo đơn hàng thất bại', 300)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const confirmOrder = (id, navigation) => async dispatch => {
  try {
    _confirmOrder(id).then(function(res) {
      message('Tạo đơn hàng thành công', 200)
      navigation.navigate('MainTab')
      return dispatch({type: CONFIRM_ORDER, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getListOrder = (params) => async dispatch => {
  try {
    _getListOrder(params).then(function(res) {
      return dispatch({type: GET_LIST_ORDER, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteOrder = (id, params, navigation) => async dispatch => {
  try {
    _deleteOrder(id).then(function(res) {
      dispatch(getListOrder(params))
      navigation.navigate('MainTab')
      return dispatch({type: DELETE_ORDER, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getDetailOrder = (id) => async dispatch => {
  try {
    _getDetailOrder(id).then(function(res) {
      return dispatch({type: GET_DETAIL_ORDER, data: res})
    })
  } catch (error) {
    throw new Error(error)
  }
}
