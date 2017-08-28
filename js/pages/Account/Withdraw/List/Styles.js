import { StyleSheet } from 'react-native'
import { BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    margin: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: Colors.darkGrey,
    fontSize: 24,
    margin: 15,
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
  listView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
})
