import { StackNavigator } from 'react-navigation'
import Launch from 'pages/Launch'
import Signup from 'pages/Signup'
import Login  from 'pages/Login'

import styles from './Styles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: Launch },
  SignupScreen: { screen: Signup },
  LoginScreen: { screen: Login },
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
