import { StyleSheet } from 'react-native'
import { Metrics, Colors } from 'themes'

export default StyleSheet.create({
  listRow: {
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: Colors.grey,
  },
  checkoutRow: {
    flex: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  infoText: {
    paddingLeft: 20,
    justifyContent: 'center'
  },
  amountContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyLabel: {
    fontSize: 12,
    padding: 5,
  },
  currencyText: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusLabel: {
    fontSize: 12,
    padding: 5,
  },
  statusText: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  totalUSDContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalUSDLabel: {
    fontSize: 12,
    padding: 5,
  },
  totalUSDText: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateLabel: {
    fontSize: 12,
    padding: 5,
  },
  dateText: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  chevronContainer: {
    flex: 0.05,
    marginRight: 10
  },
  chevronRight: {
    fontSize: 20,
    color: Colors.grey
  }
})
