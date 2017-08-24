import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  createForm: {
    marginBottom: 10,
    backgroundColor: Colors.background
  },
  unitPriceContainer: {
    flex: 1,
    flexGrow: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitPrice: {
    fontSize: 24
  },
  totalPriceContainer: {
    flexGrow: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },
  totalPriceLabel: {
    fontSize: 24,
    color: 'white',
  },
  totalPrice: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  inputGroup: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  fieldGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  itemImage: {
    width: 78,
    height: 78,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center'
  },
  icon: {
    width: 26,
    height: 26,
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth,
  },
  textFieldContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
