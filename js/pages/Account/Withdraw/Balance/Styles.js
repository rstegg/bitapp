import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flex: 1,
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },
  balanceLoader: {
    position: 'relative',
    alignSelf: 'center',
    top: -12.5,
    right: -12.5,
  },
  balanceLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  balanceBTC: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Metrics.screenWidth / 2,
  },
  balanceBTCLabel: {
    fontSize: 16,
  },
  balanceBTCText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  totalUSD: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Metrics.screenWidth / 2,
  },
  totalUSDLabel: {
    fontSize: 16,
  },
  totalUSDText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
})
