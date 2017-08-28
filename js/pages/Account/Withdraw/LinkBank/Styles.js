import { StyleSheet } from 'react-native'
import { BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  inputGroup: {
    backgroundColor: 'white',
    marginBottom: 2,
    paddingHorizontal: 20,
  },
  inputFieldGroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  inputFieldGroup: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  inputFieldGroupLast: {
    flexGrow: 0.5,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginLeft: 2,
  },
  helpLink: {
    marginTop: -60,
    marginRight: -20,
    padding: 20,
    alignSelf: 'flex-end'
  },
  helpText: {
    color: Colors.teal,
  }
})
