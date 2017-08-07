import React, { Component, PropTypes } from 'react'
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import { Colors } from 'themes'
import styles from './Styles'
import LoginForm from './Form'

const Login = ({ isLoading, navigation }) =>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header
        left={<Header.TextButton text='Cancel' onPress={isLoading ? null : () => navigation.goBack()}/>}
        center={<Header.Logo />}
        right={<Header.TextButton text='Sign In' isLoading={isLoading} onPress={isLoading ? null : () => this.props.onSubmit()} />} />
      <LoginForm navigation={navigation} />
      <TouchableOpacity onPress={() => this._tinafey()}>
        <View style={{backgroundColor: '#ef653d', flexGrow: 5}}>
          <Text style={styles.tinafey}>Executive Login: Tina Fey</Text>
        </View>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>


const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
