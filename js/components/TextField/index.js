import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Platform
} from 'react-native'

import { MKTextField } from 'react-native-material-kit'
import ErrorMessage from 'components/ErrorMessage'

export default class TextField extends Component {
  focus() {
    this.refs.defaultInput.focus()
  }
  render() {
    const { label, style, underlineEnabled, textInputStyle, onSubmitEditing, meta: { touched, error, }, ...rest } = this.props
    let underlineSize = underlineEnabled ? 1 : 0
    return (
      <View>
        <MKTextField
          ref='defaultInput'
          {...rest}
          floatingLabelEnabled={true}
          underlineEnabled={underlineEnabled}
          underlineSize={underlineSize}
          returnKeyType={onSubmitEditing ? 'next' : 'done'}
          textInputStyle={[styles.textInput, textInputStyle]}
          tintColor='#aaa'
          style={[styles.textInputContainer, Platform.select({ios: styles.textInputContainerIos}), style]}
          placeholder={label}
          floatingLabelFont={styles.floatingLabel}
          highlightColor='#aaa'
        />
        {touched && error && <ErrorMessage error={error} />}
      </View>
    )
  }
}

const styles = {
  textInputContainerIos: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    paddingTop: 0,
    marginBottom: 15,
    marginTop: 5,
  },
  textInput: {
    fontFamily: 'HelveticaNeue-Light',
    color: '#444',
    fontSize: 18
  },
  floatingLabel: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
    color: '#666'
  }
}
