import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import ErrorMessage from 'components/ErrorMessage'

import styles from './Styles'

const SignupField = ({ name, autoFocus, autoCapitalize, keyboardType, label, password, error }) =>
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

const SignupPhoneForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='phone' keyboardType='phone-pad' label='Phone' autoFocus />
  </View>

export default reduxForm({
  form: 'signupPhone'
})(SignupPhoneForm)
