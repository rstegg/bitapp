import React, { Component } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import SignupSuccessForm from './Form'
import styles from './Styles'

import { signupSubmit } from 'actions/signup'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class SignupSuccess extends Component {
  componentWillUpdate(nextProps) {
    const { navigation, signupPage } = nextProps
    if(signupPage === 'signupComplete') {
      navigateToHome(navigation)
    }
  }
  render() {
    const { user, isLoading, navigation, signupPage, signupSubmit, onSubmit } = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header
            left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
            center={<Header.Logo />}
            right={<Header.TextButton text='Sign Up' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
          <SignupSuccessForm onSubmit={values => signupSubmit({ ...values, phone: user.phone })} />
          <Text style={{fontSize: 12, padding: 10, paddingLeft: 20,}}>Password must include at least six characters and one number</Text>
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
  user
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('signup')),
  signupSubmit: user => dispatch(signupSubmit(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupSuccess)
