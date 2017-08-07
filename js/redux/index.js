import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import configureStore from './store'

import nav from './reducers/nav'
import user from './reducers/user'

import authEpics from './epics/auth'

const rootReducer = combineReducers({
  user,
  nav
})

const rootEpic = combineEpics(
  authEpics
)

export default () =>
  configureStore(rootReducer, rootEpic)
