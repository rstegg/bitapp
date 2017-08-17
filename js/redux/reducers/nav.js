import PrimaryNav from 'navigation/PrimaryNav'
import { NavigationActions } from 'react-navigation'

export default (state, action) => {
  let newState
  switch(action.type) {
    case 'CREATE_ITEM_SUCCESS':
    case 'UPDATE_ITEM_SUCCESS':
    case 'CREATE_PRODUCT_SUCCESS':
    case 'UPDATE_PRODUCT_SUCCESS':
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
        NavigationActions.navigate({ routeName: 'CheckoutScreen' }),
        state
      )
      break
    case 'CHECKOUT_SUCCESS':
      newState = PrimaryNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CheckoutCoinSelectScreen' }),
        state
      )
      break
    case 'CURRENCY_SUCCESS':
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
    case 'SET_ACTIVE_ORDER':
      newState = PrimaryNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'AccountBalanceDetailsScreen' }),
        state
      )
      break
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