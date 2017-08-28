import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import styles from './Styles'

const LoginField = ({ name, autoFocus, keyboardType, label, password, forgotButton }) =>
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
    {forgotButton}
  </View>

const ForgotButton = ({ onPress }) =>
  <Text style={styles.forgot} onPress={onPress}>forgot?</Text>

const LoginForm = ({ handleSubmit, navigation }) =>
  <View onSubmit={handleSubmit} style={styles.loginScreen}>
    <LoginField name='phone' autoFocus keyboardType='phone-pad' label='Phone' />
    <LoginField name='password' keyboardType='default' label='Password' password
      forgotButton={<ForgotButton onPress={() => navigation.navigate('LoginForgotScreen')}/>} />
  </View>

export default reduxForm({
  form: 'login'
})(LoginForm)
