import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import ErrorMessage from 'components/ErrorMessage'

import SignupPhoneForm from './Form'
import styles from './Styles'

import { signupPhoneSubmit } from 'actions/signup'
import { refreshUser } from 'actions/user'

const SignupPhone = ({ isLoading, error, navigation, signupPhoneSubmit, onSubmit, refreshUser }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => refreshUser()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Next' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
      <SignupPhoneForm onSubmit={({ phone }) => signupPhoneSubmit(phone)} />
      <View style={styles.errorContainer}>
        <ErrorMessage error={error} />
      </View>
    </View>
  </TouchableWithoutFeedback>


const mapStateToProps = ({ user }) =>
  ({
    error: user.error,
    isLoading: user.isLoading,
  })

const mapDispatchToProps = dispatch =>
  ({
    onSubmit: () => dispatch(submit('signupPhone')),
    signupPhoneSubmit: phone => dispatch(signupPhoneSubmit(phone)),
    refreshUser: () => dispatch(refreshUser()),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPhone)
