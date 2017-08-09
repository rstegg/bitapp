import { StyleSheet } from 'react-native'
import { Colors, Metrics } from 'themes'

export default StyleSheet.create({
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
  pickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#999',
  },
  amountTypePicker: {
    flexGrow: 1,
  },
  pickerControlBar: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    alignItems: 'flex-end',
  },
  dropdownButton: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  primaryBtn: {
    flexGrow: 0,
    backgroundColor: Colors.teal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'white',
  }
})
