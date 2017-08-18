import { StyleSheet } from 'react-native'
import { Colors } from 'themes'

export default StyleSheet.create({
  listRow: {
    height: 80,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: Colors.grey,
    backgroundColor: 'white',
  },
  itemRow: {
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
})
