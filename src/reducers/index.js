// redux的合并多个reducers
import { combineReducers } from 'redux'


import cart from './cart'


export default combineReducers({
  cart
})