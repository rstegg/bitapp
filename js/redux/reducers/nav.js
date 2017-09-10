import PrimaryNav from 'navigation/PrimaryNav'
import { NavigationActions } from 'react-navigation'

export default (state, action) => {
  let newState
  switch (action.type) {
  case 'OPEN_EDIT_ITEM':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'EditItemScreen' }),
      state
    )
    break
  case 'OPEN_EDIT_PRODUCT':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'EditProductScreen' }),
      state
    )
    break
  case 'SIGNUP_PHONE_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SignupVerifyScreen' })
        ]
      }),
      state
    )
    break
  case 'SIGNUP_VERIFY_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SignupSuccessScreen' })
        ]
      }),
      state
    )
    break
  case 'SIGNUP_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'HomeScreen' })
        ]
      }),
      state
    )
    break
  case 'CREATE_ITEM_SUCCESS':
  case 'EDIT_ITEM_SUCCESS':
  case 'CREATE_PRODUCT_SUCCESS':
  case 'DUPLICATE_PRODUCT_SUCCESS':
  case 'DUPLICATE_ITEM_SUCCESS':
  case 'EDIT_PRODUCT_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'HomeScreen' })
        ]
      }),
      state
    )
    break
  case 'ADD_TO_CART':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'CheckoutScreen' })
        ]
      }),
      state
    )
    break
  case 'CHECKOUT_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'CheckoutSuccessScreen' })
        ]
      }),
      state
    )
    break
  case 'SET_ACTIVE_TRANSACTION':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'CheckoutHistoryDetailsScreen' }),
      state
    )
    break
  case 'SET_ACTIVE_ORDER':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'AccountOrdersDetailsScreen' }),
      state
    )
    break
  case 'SET_ACTIVE_BANK':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'WithdrawRequestScreen' }),
      state
    )
    break
  case 'LINK_BANK_ACCOUNT_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.back(),
      state
    )
    break
  case 'WITHDRAW_REQUEST_SUCCESS':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'WithdrawRequestSuccessScreen' }),
      state
    )
    break
  case 'REFRESH_USER':
  case 'LOGOUT':
    newState = PrimaryNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LaunchScreen' })
        ]
      }),
      state
    )
    break
  default:
    newState = PrimaryNav.router.getStateForAction(action, state)
  }
  return newState || state
}
