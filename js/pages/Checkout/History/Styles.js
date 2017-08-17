import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  buttonGroup: {
    flex: 1,
    width: Metrics.screenWidth,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between'
  },
  statusContainer: {
    marginTop: Metrics.doubleSection,
    alignItems: 'center'
  },
  statusText: {
    fontSize: 16,
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
