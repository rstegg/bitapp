import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Platform
} from 'react-native'

import TextField from './field'
import ErrorMessage from 'components/ErrorMessage'

export default class BitTextField extends Component {
  focus() {
    this.refs.defaultInput.focus()
  }
  render() {
    const { label, multiline, style, underlineEnabled, textInputStyle, onSubmitEditing, input, meta: { touched, error, }, ...rest } = this.props
    return (
      <View>
        <TextField
          ref='defaultInput'
          {...input}
          {...rest}
          returnKeyLabel={onSubmitEditing ? 'next' : 'done'}
          style={[styles.textInput, style, textInputStyle]}
          tintColor='#aaa'
          label={label}
          multiline={multiline}
          labelTextStyle={styles.floatingLabel}
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
    fontFamily: 'Agenda',
    fontWeight: '100',
    color: '#444',
    fontSize: 18
  },
  floatingLabel: {
    fontFamily: 'Agenda',
    fontWeight: '100',
    fontSize: 18,
    color: '#666'
  }
}
