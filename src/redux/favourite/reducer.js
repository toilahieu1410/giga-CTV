import {
  GET_FAVOURITE,
  POST_FAVOURITE,
  DELETE_FAVOURITE
} from '../type'
import {REHYDRATE} from 'redux-persist'

const initialState = {
  listFavourite: [],
  countFavourite: null
}

const favourite = ( state = initialState, action ) => {
 
  switch(action.type) {
    case REHYDRATE: {
      if(!action.payload || !action.payload.favourite) {
        return state
      }
      return {...action.payload.favourite, isLoading: false}
    }
    case GET_FAVOURITE:
      return {
        ...state,
        listFavourite: action.data.data,
        countFavourite: action.data.count
      }
    case POST_FAVOURITE: {
      return {
        ...state
      }
    }
    case DELETE_FAVOURITE: {
      return {
        ...state,
        listFavourite: state.listFavourite.filter(item => item._id !== action.data)
      }
    }
    default: 
      return state
  }
}

export default favourite