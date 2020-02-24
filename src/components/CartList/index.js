import React, { Component } from 'react'
// connect方法执行之后是一个高阶组件
import { connect} from 'react-redux'
// 导入actionCreators
import { increment, decrement, decrementAsync } from '../../actions/cart'

 class CartList extends Component {
 

 
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
         {/* {
           this.props.cartList.map(item => {
             return (
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
          dispatch  调度
                <button onClick={
                  ()=>{
                    this.props.dispatch(decrement(item.id))
                  }
                }>-</button>
                <span>{item.amount}</span>
                <button onClick={
                  () => {
                    this.props.dispatch(increment(item.id))
                  }
                }>+</button>
              </td>
              <td></td>
            </tr>
             )
           })
          } */}

          {/* {
             this.props.cartList.map(item => {
              return (
               <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.title}</td>
               <td>{item.price}</td>
               <td>
           dispatch  调度
                 <button onClick={
                   ()=>{
                     this.props.reduce(item.id)
                   }
                 }>-</button>
                 <span>{item.amount}</span>
                 <button onClick={
                   () => {
                     this.props.add(item.id)
                   }
                 }>+</button>
               </td>
               <td></td>
             </tr>
              )
            })
          } */}

          {
               this.props.cartList.map(item => {
                return (
                 <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.title}</td>
                 <td>{item.price}</td>
                 <td>
             {/* dispatch  调度 */}
                   <button onClick={this.props.decrementAsync.bind(this,item.id)}>等1秒才减</button>
                   <button onClick={this.props.decrement.bind(this,item.id)}>-</button>
                   <span>{item.amount}</span>
                   <button onClick={this.props.increment.bind(this,item.id)}>+</button>
                 </td>
                 <td></td>
               </tr>
                )
              })

          }
        </tbody>
      </table> 
    )
  }
}

// mapStateToProps  这里的state实际上就store.getState()的值
const mapState = (state) => {
  // 这里return了什么，在组件里就可以通过this.props来获取
  return {
    cartList: state.cart
  }
}


// mapDispatchToProps
// const mapDispatchToProps = dispatch =>{
//   return {
//     add:(id) => dispatch(decrement(id)),
//     reduce:(id) => dispatch(decrement(id))
//   }
// }

// connect 方法有四个参数，常用的就是前面两个
// 第一个参数mapStateToProps，作用就是从store里把state注入到当前组件的props上
// 第二个参数，可以是mapDispatchToProps，这个的主要作用是把action生成的方法注入到当前组件的props上，一般没有必要那么用

// export default connect(mapState, mapDispatchToProps)(CartList)


// 直接第二个参数传递一个对象，这里的对象就是actionCreator,只要传入了actionCreator，在组件内就可以通过this.props.actionCreator来调用，在调用之后，actionCreator会自动把它内部的action  dispatch出去
export default connect( mapState, { increment, decrement, decrementAsync })(CartList)