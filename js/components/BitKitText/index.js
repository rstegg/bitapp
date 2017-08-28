import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './Styles'

export default class BitKitText extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    style: Text.propTypes.style,
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  }

  render() {
    return (
      <Text ref={component => this._root = component} {...this.props} style={[ styles.text, this.props.style ]}>
        {this.props.children}
      </Text>
    )
  }
}
