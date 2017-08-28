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
import AccountOrders from 'pages/Account/Orders'
import AccountOrdersDetails from 'pages/Account/Orders/Details'
import AccountSupport from 'pages/Account/Support'

import CreateItem from 'pages/Item/Create'
import CreateProduct from 'pages/Product/Create'
import EditItem from 'pages/Item/Edit'
import EditProduct from 'pages/Product/Edit'

import AddToCart from 'pages/Product/AddToCart'
import CheckoutSuccess from 'pages/Checkout/Cart/Success'
import CheckoutCoinSelect from 'pages/Checkout/Cart/CoinSelect'
import CheckoutHistoryDetails from 'pages/Checkout/History/Details'

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
  AccountOrdersScreen: { screen: AccountOrders },
  AccountOrdersDetailsScreen: { screen: AccountOrdersDetails },
  AccountSupportScreen: { screen: AccountSupport },
  CreateItemScreen: { screen: CreateItem },
  CreateProductScreen: { screen: CreateProduct },
  EditItemScreen: { screen: EditItem },
  EditProductScreen: { screen: EditProduct },
  AddToCartScreen: { screen: AddToCart },
  CheckoutScreen: { screen: ReduxCheckoutTabNav },
  CheckoutCoinSelectScreen: { screen: CheckoutCoinSelect },
  CheckoutSuccessScreen: { screen: CheckoutSuccess },
  CheckoutHistoryDetailsScreen: { screen: CheckoutHistoryDetails },
}, {
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
