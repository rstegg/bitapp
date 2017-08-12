import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { onSignupPhoneSubmit } from 'actions/signup'

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
      password={password} />
  </View>

const SignupPhoneForm = ({ handleSubmit, submitting, navigation }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='phone' keyboardType='phone-pad' label='Phone' autoFocus />
  </View>

const onSubmit = ({ phone }, dispatch) =>
  dispatch(onSignupPhoneSubmit(phone))

export default reduxForm({
  form: 'signupPhone',
  onSubmit
})(SignupPhoneForm)
