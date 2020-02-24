import React from 'react'
import { render } from 'react-dom'
// Provider 是react-redux提供的组件
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

// 调试时，将store上的数据暂时赋值到 Window.store
// window.store = store
// console.log(store)



render(
  // 一般直接把provider放在应用的最顶层，这个组件必须有一个store属性，
  // 在最外层包裹provider，所有的后代组件都可以使用Redux.connect做连接
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)