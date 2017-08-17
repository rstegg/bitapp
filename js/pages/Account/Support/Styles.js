import { StyleSheet } from 'react-native'
import { Metrics, BaseStyles, Colors } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 32,
    padding: 10,
  },
  smallText: {
    fontSize: 18,
    color: Colors.darkGrey,
  },
  buttonContainer: {
    minWidth: 200,
    paddingVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonFilled: {
    backgroundColor: '#2e8ba4',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2e8ba4',
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonOutlined: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#2e8ba4',
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
})
