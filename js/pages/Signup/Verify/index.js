import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'

import SignupVerifyForm from './Form'
import styles from './Styles'

class SignupVerify extends Component {
  componentWillUpdate(nextProps) {
    const { navigation, signupPage } = nextProps
    if(signupPage === 'signupSuccess') {
      navigation.navigate('SignupSuccessScreen')
    }
  }
  render() {
    const { isLoading, navigation, signupPage, onSubmit } = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header
            left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
            center={<Header.Logo />}
            right={<Header.TextButton text='Next' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
          <SignupVerifyForm />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading,
  signupPage: user.signupPage
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('signupVerify'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupVerify)
