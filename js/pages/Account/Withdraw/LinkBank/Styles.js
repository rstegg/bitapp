import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  inputGroup: {
    backgroundColor: 'white',
    marginBottom: 2,
    paddingHorizontal: 20,
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
