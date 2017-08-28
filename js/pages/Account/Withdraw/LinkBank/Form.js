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

const LinkBankGroupField = ({ name, autoFocus, label, style, inputStyle, last, ...rest }) =>
  <View style={last ? styles.inputFieldGroupLast : styles.inputFieldGroup}>
    <Field
      component={TextField}
      {...rest}
      name={name}
      autoFocus={autoFocus}
      label={label}
      style={style}
      containerStyle={inputStyle} />
  </View>

const AccountProfileForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <LinkBankField name='recipientName' label='Recipient name' autoFocus />
    <LinkBankField name='address' label='Address 1' />
    <LinkBankField name='address2' label='Address 2 (optional)' />
    <View style={styles.inputFieldGroupContainer}>
      <LinkBankGroupField name='city' label='City' />
      <LinkBankGroupField name='state' label='State' last />
    </View>
    <LinkBankField name='bankName' label='Bank Name' />
    <LinkBankField name='routing' label='Routing number' keyboardType='numeric'  />
    <LinkBankField name='account' label='Account number' keyboardType='numeric' />
    <LinkBankField name='confirmAccount' label='Confirm account number' keyboardType='numeric' />
  </View>

export default reduxForm({
  form: 'linkBank',
  validate
})(AccountProfileForm)
