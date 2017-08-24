import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  launchContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between'
  },
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  buttonImage: {
    width: Metrics.screenWidth,
    resizeMode: 'cover'
  },
  centered: {
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center'
  }
})
