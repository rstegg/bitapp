import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGrey,
    margin: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    color: Colors.darkGrey,
    fontSize: 24,
    margin: 15,
  },
  chevronRight: {
    fontSize: 20,
    color: Colors.grey
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
  listView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
