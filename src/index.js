import React from 'react'
import { render } from 'react-dom'
import App from './App'

import store from './store'

// 调试时，将store上的数据暂时赋值到 Window.store
// window.store = store
// console.log(store)



render(
  <App store={store} />,
  document.querySelector('#root')
)