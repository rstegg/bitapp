import Config from 'config/Debug'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

if (Config.useReactotron) {
  Reactotron
    .configure({ name: 'Ignite App' })
    .useReactNative()
    .use(reactotronRedux())
    .use(asyncStorage())
    .connect()

  Reactotron.clear()

  console.tron = Reactotron
}
