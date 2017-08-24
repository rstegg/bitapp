import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  floatingButton: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: Metrics.screenWidth,
    height: 100,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 18,
  },
  largePlus: {
    width: 70,
    height: 70,
  },
  section: {
    flex: 0.2,
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
  icon: {
    width: 26,
    height: 26,
  },
})
