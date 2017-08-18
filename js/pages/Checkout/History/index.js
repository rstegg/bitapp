import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { length } from 'ramda'
import { NavigationActions } from 'react-navigation'
import Header from 'components/Header'
import Text from 'components/BitKitText'

import { checkoutSubmit } from 'actions/checkout'

import { Images } from 'themes'

import HistoryList from './List'
import styles from './Styles'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class CheckoutHistory extends Component {
  static navigationOptions = {
    tabBarLabel: 'History',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.historyIcon}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }

  render() {
    const { cart, user, isLoading, checkoutSubmit, navigation } = this.props
    return (
      <View>
        <Header
          left={<Header.BackButton text='Back' to={() => navigateToHome(navigation)} />}
          center={<Header.Logo />} />
        <View style={styles.centered}>
          <Text style={styles.headerText}>Checkout History</Text>
        </View>
        <HistoryList navigation={navigation} />
      </View>
    )
  }
}


const mapStateToProps = ({ user, checkout }) =>
({
  cart: checkout.cart,
  isLoading: checkout.cart.isLoading,
  user
})

const mapDispatchToProps = dispatch =>
({
  checkoutSubmit: (cart, user) => dispatch(checkoutSubmit(cart, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutHistory)
