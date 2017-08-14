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
  addressContainer: {
    paddingBottom: Metrics.baseMargin
  },
  addressLeft: {
    borderStyle: 'solid',
    borderWidth: 1
  },
  addressRight: {
    borderStyle: 'solid',
    borderWidth: 1
  },
  priceContainer: {
    paddingBottom: Metrics.baseMargin
  },
  priceLeft: {
    borderStyle: 'solid',
    borderWidth: 1
  },
  priceRight: {
    borderStyle: 'solid',
    borderWidth: 1
  },
  qrCodeContainer: {
    alignItems: 'center'
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
    fontSize: 18
  },
})
