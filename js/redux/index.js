import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { reducer as formReducer } from 'redux-form'
import configureStore from './store'

import nav from './reducers/nav'
import tab from './reducers/tab'
import user from './reducers/user'
import items from './reducers/items'
import products from './reducers/products'
import orders from './reducers/orders'

import authEpics from './epics/auth'
import itemsEpics from './epics/items'
import productsEpics from './epics/products'

const rootReducer = combineReducers({
  user,
  items,
  products,
  orders,
  nav,
  tab,
  form: formReducer
})

const rootEpic = combineEpics(
  authEpics,
  itemsEpics,
  productsEpics,
)

export default () =>
  configureStore(rootReducer, rootEpic)
