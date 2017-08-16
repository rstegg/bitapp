import { TabNavigator } from 'react-navigation'

import Items from 'pages/Home/Items'
import Products from 'pages/Home/Products'

const HomeTabNav = TabNavigator({
  ProductsScreen: { screen: Products },
  ItemsScreen: { screen: Items },
}, {
  initialRouteName: 'ProductsScreen'
})

export default HomeTabNav
