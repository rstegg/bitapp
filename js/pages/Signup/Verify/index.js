import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import SignupVerifyForm from './Form'
import styles from './Styles'

import { signupVerifySubmit } from 'actions/signup'

const SignupVerify = ({ phone, isLoading, navigation, onSubmit, signupVerifySubmit }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Next' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
      <Text style={styles.phoneNumber}>{phone}</Text>
      <Text style={styles.instructions}>We have sent you an SMS with a code to the number above.</Text>
      <Text style={styles.instructions}>To complete your phone number verification, please enter the activation code.</Text>
      <SignupVerifyForm phone={phone} onSubmit={({ code }) => signupVerifySubmit(code, phone)} />
    </View>
  </TouchableWithoutFeedback>

const mapStateToProps = ({ user }) =>
  ({
    error: user.error,
    isLoading: user.isLoading,
    phone: user.phone
  })

const mapDispatchToProps = dispatch =>
  ({
    onSubmit: () => dispatch(submit('signupVerify')),
    signupVerifySubmit: (code, phone) => dispatch(signupVerifySubmit(code, phone))
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupVerify)
