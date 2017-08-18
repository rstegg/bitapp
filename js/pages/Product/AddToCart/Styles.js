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
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addImage: {
    flexGrow: 1
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
  forgot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
    color: Colors.teal,
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
