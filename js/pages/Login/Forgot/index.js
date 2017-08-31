import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'

import { loginForgotSubmit } from 'actions/login'

import styles from './Styles'
import ForgotPasswordForm from './Form'

const ForgotPassword = ({ isLoading, navigation, onSubmit }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Back' onPress={isLoading ? null : () => navigation.goBack()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Submit' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
      <ForgotPasswordForm navigation={navigation} onSubmit={({ phone }) => loginForgotSubmit(phone)} />
    </View>
  </TouchableWithoutFeedback>


const mapStateToProps = ({ user }) =>
  ({
    error: user.error,
    isLoading: user.isLoading
  })

const mapDispatchToProps = dispatch =>
  ({
    onSubmit: () => dispatch(submit('loginForgot')),
    loginForgotSubmit: phone => dispatch(loginForgotSubmit(phone))
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)
