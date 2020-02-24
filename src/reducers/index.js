// redux的合并多个reducers  实际项目中，状态很多类，要划分reducer，createStore的参数只接受一个reducer ，因此需要合并
import { combineReducers } from 'redux'

// 引入reducer
import cart from './cart'
import blog from './blog'

// 导出合并后的reducers
export default combineReducers({
  // 把多个reducer作为combineReducer对象参数传入，外部可以通过store.getState().cart来获取cart的state
  cart,
  blog
})