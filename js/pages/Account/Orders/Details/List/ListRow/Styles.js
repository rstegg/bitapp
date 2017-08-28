import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  listRow: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    borderColor: Colors.grey,
    justifyContent: 'space-between',
  },
  verticalDivider: {
    width: 1,
    marginVertical: 5,
    backgroundColor: Colors.divider,
    maxWidth: Metrics.screenWidth - 120,
  },
  image: {
    width: 78,
    height: 78,
    alignItems: 'center',
  },
  info: {
    flexGrow: 1,
    flexBasis: 1,
    flexDirection: 'row',
  },
  productInfo: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nameLabel: {
    flex: 0.5,
    fontSize: 12,
    padding: 5,
  },
  nameText: {
    flex: 1,
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceLabel: {
    flex: 1,
    fontSize: 12,
    padding: 5,
  },
  priceText: {
    flex: 0.5,
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  orderInfo: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  quantityLabel: {
    fontSize: 12,
    padding: 5,
  },
  quantityText: {
    fontSize: 12,
    padding: 5,
    fontWeight: 'bold'
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalLabel: {
    fontSize: 12,
    padding: 5,
  },
  totalText: {
    fontSize: 12,
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
