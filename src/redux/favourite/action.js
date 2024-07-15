import {
  _getFavourite,
  _postFavourite,
  _deleteFavourite
} from '../../apis/favourite'

import {
  GET_FAVOURITE,
  POST_FAVOURITE,
  DELETE_FAVOURITE
} from '../type'

import message from '../../utilities/message'

export const getFavourite = (params) => async dispatch => {
  try {
    _getFavourite(params).then(res => {
      return dispatch({ type: GET_FAVOURITE, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const postFavourite = (body) => async dispatch => {
  try {
    _postFavourite(body).then(res => {
      message(res.message, 200)
      return dispatch({ type: POST_FAVOURITE })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteFavourite = (id) => async dispatch => {
  try {
    _deleteFavourite(id).then(res => {
      message(res.message, 200)
      return dispatch({ type: DELETE_FAVOURITE, data: id })
    })
  } catch (error) {
    throw new Error(error)
  }
}