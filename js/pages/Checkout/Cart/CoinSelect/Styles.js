import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    width: Metrics.screenWidth,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-around',
    marginVertical: 25,
  },
  imageButtonContainer: {
    flex: 1,
    height: Metrics.screenHeight / 6,
    padding: 50,
    margin: 20,
    backgroundColor: Colors.buttonBackground,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    position: 'relative',
    width: Metrics.screenWidth / 3,
  }
})
