import { StackNavigator } from 'react-navigation'

import Launch from 'pages/Launch'
import Login from 'pages/Login'
import LoginForgot from 'pages/Login/Forgot'
import SignupPhone from 'pages/Signup/Phone'
import SignupVerify from 'pages/Signup/Verify'
import SignupSuccess from 'pages/Signup/Success'

import Account from 'pages/Account'
import AccountProfile from 'pages/Account/Profile'
import AccountWithdraw from 'pages/Account/Withdraw'
import AccountLinkBank from 'pages/Account/Withdraw/LinkBank'
import AccountBalance from 'pages/Account/Balance'
import AccountBalanceDetails from 'pages/Account/Balance/Details'
import AccountSupport from 'pages/Account/Support'

import CreateItem from 'pages/Item/Create'
import CreateProduct from 'pages/Product/Create'
import AddToCart from 'pages/Product/AddToCart'
import CheckoutReview from 'pages/Checkout/Cart/Review'
import CheckoutSuccess from 'pages/Checkout/Cart/Success'
import CheckoutCoinSelect from 'pages/Checkout/Cart/CoinSelect'
import ReduxHomeTabNav from 'navigation/ReduxHomeTabNav'
import ReduxCheckoutTabNav from 'navigation/ReduxCheckoutTabNav'

import styles from './Styles'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: Launch },
  LoginScreen: { screen: Login },
  LoginForgotScreen: { screen: LoginForgot },
  SignupPhoneScreen: { screen: SignupPhone },
  SignupVerifyScreen: { screen: SignupVerify },
  SignupSuccessScreen: { screen: SignupSuccess },
  HomeScreen: { screen: ReduxHomeTabNav },
  AccountScreen: { screen: Account },
  AccountProfileScreen: { screen: AccountProfile },
  AccountWithdrawScreen: { screen: AccountWithdraw },
  AccountLinkBankScreen: { screen: AccountLinkBank },
  AccountBalanceScreen: { screen: AccountBalance },
  AccountBalanceDetailsScreen: { screen: AccountBalanceDetails },
  AccountSupportScreen: { screen: AccountSupport },
  CreateItemScreen: { screen: CreateItem },
  CreateProductScreen: { screen: CreateProduct },
  AddToCartScreen: { screen: AddToCart },
  CheckoutScreen: { screen: ReduxCheckoutTabNav },
  CheckoutCoinSelectScreen: { screen: CheckoutCoinSelect },
  CheckoutSuccessScreen: { screen: CheckoutSuccess },
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
