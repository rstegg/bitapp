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
  sectionHeader: {
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: Colors.lightGrey,
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
  forgot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
    color: Colors.teal,
  },
  inputGroup: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  textField: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
