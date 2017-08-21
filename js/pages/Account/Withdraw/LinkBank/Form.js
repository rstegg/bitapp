import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'
import validate from './validators'

const LinkBankField = ({ name, autoFocus, label, style, inputStyle, ...rest }) =>
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

const AccountProfileForm = ({ handleSubmit, submitting }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <LinkBankField name='routing' label='Routing number' autoFocus keyboardType='numeric' />
    <LinkBankField name='account' label='Account number' keyboardType='numeric' />
    <LinkBankField name='confirmAccount' label='Confirm account number' keyboardType='numeric' />
  </View>

export default reduxForm({
  form: 'linkBank',
  validate
})(AccountProfileForm)
