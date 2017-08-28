import { StyleSheet } from 'react-native'
import { BaseStyles } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5
  },
  listView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
})
