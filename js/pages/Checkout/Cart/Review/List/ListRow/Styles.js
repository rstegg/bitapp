import { StyleSheet } from 'react-native'
import { Colors } from 'themes'

export default StyleSheet.create({
  listRow: {
    flexGrow: 1,
    height: 80,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: Colors.grey,
  },
  checkoutRow: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 78,
    height: 78,
    alignSelf: 'center',
  },
  info: {
    flexGrow: 1,
    flexBasis: 1,
    flexDirection: 'row',
  },
  infoText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
    padding: 5,
  },
  price: {
    fontSize: 12,
    padding: 5,
  },
  detailsText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantity: {
    fontSize: 12,
    padding: 5,
  },
  total: {
    fontSize: 12,
    padding: 5,
  },
  options: {
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  optionsIcon: {
    fontSize: 24,
    color: Colors.grey,
  },
})
