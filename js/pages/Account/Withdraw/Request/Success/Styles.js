import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  requestForm: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  bankContainer: {
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    marginTop: 30,
    margin: Metrics.baseMargin,
  },
  bankLabel: {
    fontSize: 18,
  },
  bankText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
