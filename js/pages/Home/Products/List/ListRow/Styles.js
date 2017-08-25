import { StyleSheet } from 'react-native'
import { Colors } from 'themes'

export default StyleSheet.create({
  listRow: {
    flexGrow: 1,
    height: 80,
    marginBottom: 10,
    overflow: 'hidden',
    borderColor: Colors.grey,
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
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  name: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
    fontSize: 14,
    padding: 5,
    fontWeight: '100',
  },
  unit: {
    flex: 1,
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
