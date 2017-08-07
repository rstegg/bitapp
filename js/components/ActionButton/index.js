import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Loader from 'components/Loader'
import Text from 'components/BitKitText'

export default class ActionButton extends Component {
  render() {
    const {onPress, style, loaderStyle, loaderColor, isLoading, textStyle, buttonText, buttonContent, children, ...rest} = this.props
    return (
      <View style={style}>
      { !!isLoading ?
        <View {...rest}>
          <Loader style={loaderStyle || {alignSelf: 'center', justifyContent: 'center', marginRight: 10,}} color={loaderColor} size={20} />
        </View>
        :
        <TouchableOpacity {...rest} onPress={onPress}>
          {children || <Text style={textStyle}>{buttonText}{buttonContent}</Text>}
        </TouchableOpacity>
      }
      </View>
    )
  }
}
