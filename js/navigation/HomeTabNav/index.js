import { TabNavigator } from 'react-navigation'

import Items from 'pages/Home/Items'
import Products from 'pages/Home/Products'

import { Colors } from 'themes'

const HomeTabNav = TabNavigator({
  ProductsScreen: { screen: Products },
  ItemsScreen: { screen: Items },
}, {
  initialRouteName: 'ProductsScreen',
  tabBarOptions: {
    activeTintColor: Colors.orange,
  },
})

export default HomeTabNav
