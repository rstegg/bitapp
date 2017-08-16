import HomeTabNav from 'navigation/HomeTabNav'
import { NavigationActions } from 'react-navigation'

export default (state, action) => {
  let newState
  switch(action.type) {
    case 'CREATE_ITEM_SUCCESS':
    case 'UPDATE_ITEM_SUCCESS':
      newState = HomeTabNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ItemsScreen' }),
        state
      )
      break
    case 'CREATE_PRODUCT_SUCCESS':
    case 'UPDATE_PRODUCT_SUCCESS':
      newState = HomeTabNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ProductsScreen' }),
        state
      )
      break
    default:
      newState = HomeTabNav.router.getStateForAction(action, state)
  }
  return newState || state
}
