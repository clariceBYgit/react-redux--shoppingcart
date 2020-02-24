// 为了避免actionType重复，会把actionType放在文件里统一管理

import actionType from '../actions/acrtionType'

// 此文件建立初始时，只需要定义一个初始的状态，其他的都可以不用管

// 数据初始化 
const iniState = [{
  id: 1, 
  title: 'Apple',
  price: 8888.5,
  amount: 10
},
{
  id: 2,
  title: 'orange',
  price: 5555.55,
  amount: 12
}
]
// 创建购物车的reducer  reducer的固定写法是两个参数，第一个是state并有一个初始值，第二个是action
export default (state = iniState, action) => {
// 根据不同的action.type 做不同的处理，每次返回一个新的state，返回的类型要一样
  switch(action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if(item.id === action.payload.id){
          item.amount +=1
        }
        return item
      })
      case actionType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if(item.id === action.payload.id){
          item.amount -=1
        }
        return item
      })
    default:
      return state
  }
  
}