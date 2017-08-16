import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { reducer as formReducer } from 'redux-form'
import configureStore from './store'

import nav from './reducers/nav'
import homeTab from './reducers/homeTab'
import checkoutTab from './reducers/checkoutTab'
import user from './reducers/user'
import items from './reducers/items'
import products from './reducers/products'
import orders from './reducers/orders'

import authEpics from './epics/auth'
import itemsEpics from './epics/items'
import productsEpics from './epics/products'
import ordersEpics from './epics/orders'

const rootReducer = combineReducers({
  user,
  items,
  products,
  orders,
  nav,
  homeTab,
  checkoutTab,
  form: formReducer
})

const rootEpic = combineEpics(
  authEpics,
  itemsEpics,
  productsEpics,
  ordersEpics,
)

export default () =>
  configureStore(rootReducer, rootEpic)
