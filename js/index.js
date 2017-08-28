import 'rxjs'
import React from 'react'
import { Provider } from 'react-redux'

import RootContainer from './RootContainer'
import createStore from './redux'

const store = createStore()

const BitKit = () =>
  <Provider store={store}>
    <RootContainer />
  </Provider>

export default BitKit
