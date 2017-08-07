import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { onSignupVerifySubmit } from 'actions/signup'

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

const SignupVerifyForm = ({ handleSubmit, submitting, phone }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>{phone}</Text>
    <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>We have sent you an SMS with a code to the number above.</Text>
    <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>To complete your phone number verification, please enter the activation code.</Text>
    <SignupField name='phoneVerify' keyboardType='phone-pad' label='Activation Code' autoFocus />
  </View>

const mapStateToProps = ({ user }) =>
({
  phone: user.phone
})

const ConnectedSignupVerifyForm = connect(mapStateToProps)(SignupVerifyForm)

const onSubmit = (values, dispatch) =>
  dispatch(onSignupVerifySubmit(values))

export default reduxForm({
  form: 'signupVerify',
  onSubmit
})(ConnectedSignupVerifyForm)
