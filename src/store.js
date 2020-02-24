// createStore是redux提供的一个用于创建store的方法

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// 引入合并后的reducer  必须是一个function   
import rootReducer from './reducers'

// createStore的第一个参数是一个reducer，若是多个，在reducers目录下先使用combineReducer合并之后在导出
export default  createStore(
    rootReducer,
    applyMiddleware(thunk)
    )