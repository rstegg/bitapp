import { StyleSheet } from 'react-native'
import { BaseStyles, Colors, Metrics } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  signupScreen: {
    flexGrow: 1,
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  inputGroup: {
    width: Metrics.screenWidth,
    backgroundColor: 'white',
    paddingBottom: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  textField: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
