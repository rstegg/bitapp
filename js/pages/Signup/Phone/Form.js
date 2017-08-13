import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import styles from './Styles'

const SignupField = ({ name, autoFocus, autoCapitalize, keyboardType, label, password }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      autoCapitalize={autoCapitalize || 'none'}
      autoComplete={false}
      keyboardType={keyboardType}
      label={label}
      style={styles.textInput}
      secureTextEntry={password} />
  </View>

const SignupPhoneForm = ({ handleSubmit, submitting }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='phone' keyboardType='phone-pad' label='Phone' autoFocus />
  </View>

export default reduxForm({
  form: 'signupPhone'
})(SignupPhoneForm)
