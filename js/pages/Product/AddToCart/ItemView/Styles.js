import { StyleSheet } from 'react-native'
import { Colors } from 'themes'

export default StyleSheet.create({
  listRow: {
    flexGrow: 1,
    height: 80,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  itemRow: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productRow: {
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
    flexGrow: 1,
    padding: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 18,
    padding: 5,
  },
  details: {
    fontSize: 14,
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
