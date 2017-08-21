import { StyleSheet } from 'react-native'
import { BaseStyles, Colors, Metrics } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  signupScreen: {
    flexGrow: 1,
    height: Metrics.screenHeight,
  },
  inputGroup: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  textField: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
