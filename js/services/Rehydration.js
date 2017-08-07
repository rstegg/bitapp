import ReduxPersistConfig from 'config/ReduxPersist'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import DebugConfig from 'config/Debug'

const updateReducers = store => {
  const reducerVersion = ReduxPersistConfig.reducerVersion
  const config = ReduxPersistConfig.storeConfig

  AsyncStorage.getItem('reducerVersion').then(localVersion => {
    if (localVersion !== reducerVersion) {
      if (DebugConfig.useReactotron) {
        console.tron.display({
          name: 'PURGE',
          value: {
            'Old Version:': localVersion,
            'New Version:': reducerVersion
          },
          preview: 'Reducer Version Change Detected',
          important: true
        })
      }

      persistStore(store, config).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config)
    }
  }).catch(() => {
    persistStore(store, config)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
