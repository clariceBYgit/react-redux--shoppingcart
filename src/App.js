import React, { Component } from 'react'

import { CartList, BlogList } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
       <CartList />
       <BlogList />
      </div>
    )
  }
}
