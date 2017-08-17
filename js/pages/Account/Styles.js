import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  buttonGroup: {
    flex: 1,
    width: Metrics.screenWidth,
    backgroundColor: Colors.transparent,
    justifyContent: 'space-between'
  },
  statusContainer: {
    marginTop: Metrics.doubleSection,
    alignItems: 'center'
  },
  statusText: {
    fontSize: 16,
  },
  centered: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    marginVertical: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingRight: 15,
    marginBottom: 2,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: Colors.darkGrey,
    fontSize: 18,
  },
  buttonIcon: {
    minWidth: 60,
    color: Colors.teal,
    fontSize: 20,
    textAlign: 'center',
  },
  logoutText: {
    color: Colors.red,
    fontSize: 18,
  },
  logoutIcon: {
    minWidth: 60,
    color: Colors.red,
    fontSize: 20,
    textAlign: 'center',
  }
})
