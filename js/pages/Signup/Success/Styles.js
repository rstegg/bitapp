import { StyleSheet } from 'react-native'
import { BaseStyles, Metrics } from 'themes'

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
  instructionsContainer: {
    
  },
  instructions: {
    fontSize: 12,
    padding: 10,
    paddingLeft: 20,
  },
  textField: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
