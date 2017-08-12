import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { onSignupSubmit } from 'actions/signup'

import styles from './Styles'

const SignupField = ({ name, autoFocus, autoCapitalize, keyboardType, label, forgotButton, password }) =>
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

const SignupSuccessForm = ({ handleSubmit, submitting }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='name' keyboardType='default' autoCapitalize='words' label='Full name' autoFocus />
    <SignupField name='password' keyboardType='default' label='Password' password />
    <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>Password must include at least six characters and one number</Text>
  </View>

const onSubmit = ({ name, password }, dispatch) =>
  dispatch(onSignupSubmit({ name, password }))

export default reduxForm({
  form: 'signup',
  onSubmit
})(SignupSuccessForm)
