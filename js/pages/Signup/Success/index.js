import React from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import SignupSuccessForm from './Form'
import styles from './Styles'

import { signupSubmit } from 'actions/signup'

const SignupSuccess = ({ user, isLoading, navigation, signupSubmit, onSubmit }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Sign Up' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
      <SignupSuccessForm onSubmit={values => signupSubmit({ ...values, phone: user.phone })} />
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
          Password must include at least six characters and one number
        </Text>
      </View>
      <View style={styles.errorContainer}>
        <ErrorMessage error={error} />
      </View>
    </View>
  </TouchableWithoutFeedback>

const mapStateToProps = ({ user }) =>
  ({
    error: user.error,
    isLoading: user.isLoading,
    user
  })

const mapDispatchToProps = dispatch =>
  ({
    onSubmit: () => dispatch(submit('signup')),
    signupSubmit: user => dispatch(signupSubmit(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SignupSuccess)
