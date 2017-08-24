import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  loginScreen: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    height: Metrics.screenHeight,
  },
  section: {
    flex: 0.1,
    margin: 5,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  centered: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    marginVertical: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
})
