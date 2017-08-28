import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'

const LoginField = ({ name, autoFocus, keyboardType, label, password }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      autoCapitalize='none'
      keyboardType={keyboardType}
      label={label}
      style={styles.textInput}
      secureTextEntry={password} />
  </View>

const LoginForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.loginScreen}>
    <LoginField name='phone' autoFocus keyboardType='phone-pad' label='Phone' />
  </View>

export default reduxForm({
  form: 'loginForgot'
})(LoginForm)
