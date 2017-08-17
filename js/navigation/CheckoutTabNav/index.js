import { TabNavigator } from 'react-navigation'

import CheckoutReview from 'pages/Checkout/Cart/Review'
import CheckoutHistory from 'pages/Checkout/History'

import { Colors } from 'themes'

const CheckoutTabNav = TabNavigator({
  CheckoutReviewScreen: { screen: CheckoutReview },
  CheckoutHistoryScreen: { screen: CheckoutHistory },
}, {
  initialRouteName: 'CheckoutReviewScreen',
  tabBarOptions: {
    activeTintColor: Colors.orange,
  },
})

export default CheckoutTabNav
