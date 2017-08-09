import { StackNavigator } from 'react-navigation'

import Launch from 'pages/Launch'
import Login from 'pages/Login'
import SignupPhone from 'pages/Signup/Phone'
import SignupVerify from 'pages/Signup/Verify'
import SignupSuccess from 'pages/Signup/Success'
import CreateItem from 'pages/Item/Create'
import CreateProduct from 'pages/Product/Create'
import ReduxTabNav from 'navigation/ReduxTabNav'

import styles from './Styles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: Launch },
  LoginScreen: { screen: Login },
  SignupPhoneScreen: { screen: SignupPhone },
  SignupVerifyScreen: { screen: SignupVerify },
  SignupSuccessScreen: { screen: SignupSuccess },
  HomeScreen: { screen: ReduxTabNav },
  CreateItemScreen: { screen: CreateItem },
  CreateProductScreen: { screen: CreateProduct },
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
