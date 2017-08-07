import { TabNavigator } from 'react-navigation'

import Items from 'pages/Home/Items'
import Products from 'pages/Home/Products'

const TabNav = TabNavigator({
  ItemsScreen: { screen: Items },
  ProductsScreen: { screen: Products }
}, {
  initialRouteName: 'ItemsScreen'
})

export default TabNav
