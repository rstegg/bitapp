import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

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

const SignupSuccessForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='name' keyboardType='default' autoCapitalize='words' label='Full name' autoFocus />
    <SignupField name='password' keyboardType='default' label='Password' password />
  </View>

export default reduxForm({
  form: 'signup'
})(SignupSuccessForm)
