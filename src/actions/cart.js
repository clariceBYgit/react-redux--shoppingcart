import actionType from './acrtionType'


// action有两种写法
// 第一种  标准的action   不方便传递动态参数
/*
 export const increment = {
   type: actionType.CART_AMOUNT_INCREMENT
 }

*/


// 第二种
export const increment = (id) => {
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    payload: {
      id
    }
  }

}

export const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id
    }
  }

}


// 异步action，使用redux-thunk之后，就可以子actionCreator里return一个方法，这个方法的参数是dispatch
// 第一版
/*export const decrementAsync = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
          id
        }
      })
    },1000)
  }
}
*/
// 第二版
/*
export const decrementAsync = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement(id))
    },1000)
  }
}
*/

// 第三版  
export const decrementAsync = id => dispatch => {
    setTimeout(() => {
      dispatch(decrement(id))
    },1000)
  }



