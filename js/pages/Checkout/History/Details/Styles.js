import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyContainer: {
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    marginTop: 30,
    margin: Metrics.baseMargin,
  },
  currencyLabel: {
    fontSize: 18,
  },
  currencyText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addressContainer: {
    flexDirection: 'row',
    paddingBottom: Metrics.baseMargin
  },
  addressLeft: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  addressRight: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.screenWidth,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: Metrics.baseMargin
  },
  priceOuterContainer: {},
  priceLeft: {
    fontSize: 14,
  },
  priceRight: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  qrCodeContainer: {
    alignItems: 'center'
  },
  statusContainer: {
    flexDirection: 'row',
    width: Metrics.screenWidth,
    justifyContent: 'center',
    marginTop: Metrics.doubleSection,
    padding: 15,
    alignItems: 'center',
    backgroundColor: Colors.orange,
  },
  statusLabel: {
    fontSize: 24
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})
