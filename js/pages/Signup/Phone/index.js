import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import Header from 'components/Header'

import SignupPhoneForm from './Form'
import styles from './Styles'

import { signupPhoneSubmit } from 'actions/signup'

const navigateToVerify = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'SignupVerifyScreen'})
  ]
}))

class SignupPhone extends Component {
  componentWillMount() {
    const { navigation, signupPage } = this.props
    if(signupPage === 'signupVerify') {
      navigateToVerify(navigation)
    }
  }
  componentWillUpdate(nextProps) {
    const { navigation, signupPage } = nextProps
    if(signupPage === 'signupVerify') {
      navigateToVerify(navigation)
    }
  }
  render() {
    const { isLoading, navigation, signupPage, signupPhoneSubmit, onSubmit } = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header
            left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
            center={<Header.Logo />}
            right={<Header.TextButton text='Next' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
          <SignupPhoneForm onSubmit={({ phone }) => signupPhoneSubmit(phone)} />
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
  onSubmit: () => dispatch(submit('signupPhone')),
  signupPhoneSubmit: phone => dispatch(signupPhoneSubmit(phone))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPhone)
