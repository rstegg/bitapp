import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'

import Header from 'components/Header'

import { onSignupSubmit } from 'actions/signup'

import SignupForm from './Form'
import styles from './Styles'

const Signup = ({ isLoading, navigation }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Sign Up' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
      <SignupForm navigation={navigation} />
    </View>
  </TouchableWithoutFeedback>

const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('signup'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
