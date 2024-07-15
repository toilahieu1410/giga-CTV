import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist'
import auth from './auth/reducer'
import home from './home/reducer'
import profile from './profile/reducer'
import product from './product/reducer'
import favourite from './favourite/reducer'
import cart from './cart/reducer'

const rootReducer = combineReducers({
  auth, home, profile, cart, product, favourite
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export default {store, persistor}