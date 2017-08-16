import React, { Component } from 'react'
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import { loginSubmit } from 'actions/login'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { Colors } from 'themes'
import styles from './Styles'
import LoginForm from './Form'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class Login extends Component {
  componentWillMount() {
    const { navigation, user } = this.props
    if(user.isAuthenticated) {
      navigateToHome(navigation)
    }
  }
  componentWillUpdate(nextProps) {
    const { navigation, user } = nextProps
    if(user.isAuthenticated) {
      navigateToHome(navigation)
    }
  }
  render() {
    const { isLoading, navigation, loginSubmit, onSubmit } = this.props
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header
            left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
            center={<Header.Logo />}
            right={<Header.TextButton text='Sign In' isLoading={isLoading} onPress={isLoading ? null : () => onSubmit()} />} />
          <LoginForm navigation={navigation} onSubmit={loginSubmit} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading,
  user
})

const mapDispatchToProps = dispatch =>
({
  loginSubmit: user => dispatch(loginSubmit(user)),
  onSubmit: () => dispatch(submit('login')),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
