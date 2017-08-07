import { StyleSheet } from 'react-native'
import { Colors, Metrics } from 'themes'

export default StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F8',
  },
  logo: {
    maxWidth: 150,
    marginTop: 16,
  },
  menuButton: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 16,
  },
  iconButton: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 16,
  },
  navButton: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 16,
  },
  imageButton: {
    width: 35,
    height: 35,
  },
  viewButton: {
    fontSize: 28,
    color: Colors.orange,
  },
  backButton: {
    width: 25,
    height: 25,
  },
  item: {
    minWidth: 80,
  },
  middleItem: {
    flexGrow: 1,
    flexBasis: 1,
    minWidth: Metrics.screenWidth - 160,
  },
  menuIcon: {
    fontSize: 40,
    color: Colors.orange,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: Colors.orange,
  },
})
