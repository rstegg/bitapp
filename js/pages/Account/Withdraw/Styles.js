import { StyleSheet } from 'react-native'
import { BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  introInstructions: {
    flexGrow: 1,
    marginBottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  introText: {
    fontSize: 18,
    color: Colors.darkGrey
  },
  introTextContainer: {
    marginBottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  introIcon: {
    fontSize: 120,
    color: Colors.darkGrey
  },
  actionButton: {
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  actionButtonText: {
    color: 'white',
    fontSize: 24
  }
})
