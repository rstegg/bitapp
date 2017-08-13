import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import SignupVerifyForm from './Form'
import styles from './Styles'

import { signupVerifySubmit } from 'actions/signup'

class SignupVerify extends Component {
  componentWillUpdate(nextProps) {
    const { navigation, signupPage } = nextProps
    if(signupPage === 'signupSuccess') {
      navigation.navigate('SignupSuccessScreen')
    }
  }
  render() {
    const { phone, isLoading, navigation, signupPage, onSubmit, signupVerifySubmit } = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header
            left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
            center={<Header.Logo />}
            right={<Header.TextButton text='Next' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
          <Text style={{fontSize: 24, padding: 10, paddingLeft: 20, textAlign: 'center'}}>{phone}</Text>
          <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>We have sent you an SMS with a code to the number above.</Text>
          <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>To complete your phone number verification, please enter the activation code.</Text>
          <SignupVerifyForm phone={phone} onSubmit={({ code }) => signupVerifySubmit(code, phone)} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading,
  signupPage: user.signupPage,
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
