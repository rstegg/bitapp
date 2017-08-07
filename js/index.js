import 'rxjs'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RootContainer from './RootContainer'
import createStore from './redux'

const store = createStore()

export default class BitKit extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
