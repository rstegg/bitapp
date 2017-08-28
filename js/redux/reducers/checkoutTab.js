import CheckoutTabNav from 'navigation/CheckoutTabNav'
import { NavigationActions } from 'react-navigation'

export default (state, action) => {
  let newState
  switch (action.type) {
  // case 'CHECKOUT_SUCCESS':
  //   newState = CheckoutTabNav.router.getStateForAction(
  //     NavigationActions.navigate({ routeName: 'CheckoutReviewScreen' }),
  //     state
  //   )
  //   break
  // case 'CURRENCY_SUCCESS':
  //   newState = CheckoutTabNav.router.getStateForAction(
  //     NavigationActions.navigate({ routeName: 'CheckoutReviewScreen' }),
  //     state
  //   )
  //   break
  case 'ADD_TO_CART':
  case 'LOGOUT':
    newState = CheckoutTabNav.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'CheckoutReviewScreen' })
        ]
      }),
      state
    )
    break
  default:
    newState = CheckoutTabNav.router.getStateForAction(action, state)
  }
  return newState || state
}
