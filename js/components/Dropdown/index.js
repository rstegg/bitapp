import React, { Component } from 'react'
import {
  Modal,
  Picker,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import Text from 'components/BitKitText'
import ErrorMessage from 'components/ErrorMessage'

import styles from './Styles'

export default class DropdownPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPicker: false,
    }
  }

  render() {
    const { triggerStyle, label, textStyle, labelStyle, input: { onChange, value }, meta: { touched, error, }, options, defaultValue } = this.props
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.setState({ showPicker: true })} >
          <View style={triggerStyle || styles.dropdownButton} >
            {label && <Text style={labelStyle}>{label}</Text>}
            <Text style={textStyle}>{options.find((option) => option.value === (value || defaultValue)).label}</Text>
            {touched && error && <ErrorMessage error={error} />}
          </View>
        </TouchableWithoutFeedback>

        <Modal visible={this.state.showPicker} transparent={true} animationType='slide'>
          <TouchableOpacity onPress={() => this.setState({ showPicker: false }) }>
            <View style={styles.overlay}></View>
          </TouchableOpacity>
          <View style={styles.pickerContainer}>
            <View style={styles.pickerControlBar}>
              <TouchableOpacity onPress={() => this.setState({ showPicker: false }) }>
                <View>
                  <Text style={styles.primaryBtn}>Done</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Picker style={styles.amountTypePicker} selectedValue={value || defaultValue} onValueChange={onChange}>
              { options.map((option) => <Picker.Item key={option.value} value={option.value} label={option.label} />) }
            </Picker>
          </View>
        </Modal>
      </View>
    )
  }
}
