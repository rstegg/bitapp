import { TabNavigator } from 'react-navigation'

import CheckoutReview from 'pages/Checkout/Cart/Review'
import CheckoutHistory from 'pages/Checkout/History'

const CheckoutTabNav = TabNavigator({
  CheckoutReviewScreen: { screen: CheckoutReview },
  CheckoutHistoryScreen: { screen: CheckoutHistory },
}, {
  initialRouteName: 'CheckoutReviewScreen'
})

export default CheckoutTabNav
