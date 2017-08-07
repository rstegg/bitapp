import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { reducer as formReducer } from 'redux-form'
import configureStore from './store'

import nav from './reducers/nav'
import tab from './reducers/tab'
import user from './reducers/user'
import items from './reducers/items'
import products from './reducers/products'

import authEpics from './epics/auth'

const rootReducer = combineReducers({
  user,
  items,
  products,
  nav,
  tab,
  form: formReducer
})

const rootEpic = combineEpics(
  authEpics
)

export default () =>
  configureStore(rootReducer, rootEpic)
