import { createStore } from 'redux'

// 引入reducer  必须是一个function
import rootReducer from './reducers'


export default  createStore(rootReducer)