import { StyleSheet } from 'react-native'
import { BaseStyles, Colors, Metrics } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    backgroundColor: Colors.orange,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: Colors.teal,
  },
  modalControlBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  saveButton: {
    backgroundColor: Colors.orange,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    color: 'white'
  },
  cancelButton: {
    backgroundColor: '#DDD',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: Colors.gray,
  },
  editProductForm: {
    backgroundColor: 'white',
  },
  inputGroup: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  textField: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})
