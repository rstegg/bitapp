import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { onSignupSubmit } from 'actions/signup'

import styles from './Styles'

const SignupField = ({ name, autoFocus, autoCapitalize, keyboardType, label, forgotButton }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      label={label}
      style={styles.textInput} />
  </View>

const SignupForm = ({ handleSubmit, submitting, navigation }) =>
  <View onSubmit={handleSubmit} style={styles.signupScreen}>
    <SignupField name='name' autoFocus autoCapitalize='words' keyboardType='default' label='Name' />
    <SignupField name='phone' keyboardType='phone-pad' label='Phone' />
    <SignupField name='password' keyboardType='default' label='Password' />
    <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>Password must include at least six characters and one number</Text>
  </View>

export default reduxForm({
  form: 'signup',
  onSubmit: onSignupSubmit
})(SignupForm)
