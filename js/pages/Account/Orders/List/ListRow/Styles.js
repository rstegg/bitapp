import { StyleSheet } from 'react-native'
import { BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  listRow: {
    flexGrow: 1,
    height: 80,
    overflow: 'hidden',
  },
  orderRow: {
    flexGrow: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: Colors.darkGrey,
    fontSize: 24,
    margin: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateLabel: {
    fontSize: 16,
    padding: 5,
  },
  dateText: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold'
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 16,
    padding: 5,
  },
  totalText: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold'
  },
  chevronContainer: {
    paddingHorizontal: 10
  },
  chevronRight: {
    fontSize: 20,
    color: Colors.grey
  }
})
