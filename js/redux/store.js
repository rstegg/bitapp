import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import { createEpicMiddleware } from 'redux-observable'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'remote-redux-devtools'

const persistConfig = {
  storage: AsyncStorage,
  whitelist: ['user']
}

const composeEnhancers = composeWithDevTools({ realtime: true })

export default (rootReducer, rootEpic) => {
  const epicMiddleware = createEpicMiddleware(rootEpic)

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      ),
      autoRehydrate()
    )
  )

  persistStore(store, persistConfig)

  return store

}
