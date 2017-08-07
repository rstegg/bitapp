import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import DebugConfig from 'config/Debug'
import { createEpicMiddleware } from 'redux-observable'
import RehydrationServices from 'services/Rehydration'
import ReduxPersist from 'config/ReduxPersist'
import ScreenTracking from 'services/ScreenTrack'

export default (rootReducer, rootEpic) => {
  const enhanceStore = DebugConfig.useReactotron ? console.tron.createStore : createStore
  const epicMiddleware = createEpicMiddleware(rootEpic)

  const store = enhanceStore(
    rootReducer,
    compose(
      applyMiddleware(
        ScreenTracking,
        epicMiddleware
      ),
      autoRehydrate()
    )
  )

  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  return store

}
