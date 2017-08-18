import HomeTabNav from 'navigation/HomeTabNav'
import { NavigationActions } from 'react-navigation'

export default (state, action) => {
  let newState
  switch(action.type) {
    case 'VIEW_ITEMS':
    case 'CREATE_ITEM_SUCCESS':
    case 'EDIT_ITEM_SUCCESS':
      newState = HomeTabNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ItemsScreen' }),
        state
      )
      break
    case 'CREATE_PRODUCT_SUCCESS':
    case 'EDIT_PRODUCT_SUCCESS':
      newState = HomeTabNav.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ProductsScreen' }),
        state
      )
      break
    case 'LOGOUT':
      newState = HomeTabNav.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'ProductsScreen' })
          ]
        }),
        state
      )
    default:
      newState = HomeTabNav.router.getStateForAction(action, state)
  }
  return newState || state
}
