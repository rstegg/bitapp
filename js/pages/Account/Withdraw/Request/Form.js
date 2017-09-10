import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'

const WithdrawRequestField = ({ name, autoFocus, label, style, inputStyle, ...rest }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      {...rest}
      name={name}
      autoFocus={autoFocus}
      label={label}
      style={style}
      containerStyle={inputStyle} />
  </View>

const WithdrawRequestForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.requestForm}>
    <WithdrawRequestField name='amount' label='Amount (USD)' autoFocus />
  </View>

export default reduxForm({
  form: 'withdrawRequest'
})(WithdrawRequestForm)
