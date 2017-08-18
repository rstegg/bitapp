import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  loginScreen: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    height: Metrics.screenHeight,
  },
  inputGroup: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  forgot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
    color: Colors.teal,
  },
  tinafey: {
    padding: 30,
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.lightBlue,
  }
})
