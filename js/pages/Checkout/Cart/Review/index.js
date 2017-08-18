import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { length } from 'ramda'
import { NavigationActions } from 'react-navigation'
import Header from 'components/Header'
import Text from 'components/BitKitText'

import { checkoutSubmit } from 'actions/checkout'

import { Images } from 'themes'

import CheckoutList from './List'
import styles from './Styles'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class ReviewCheckout extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.cartIcon}
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
          center={<Header.Text>Cart</Header.Text>}
          right={<Header.SaveButton isDisabled={!length(cart.products)} isLoading={isLoading} onPress={() => isLoading || !length(cart.products) ? null : checkoutSubmit(cart.products, user)} />} />
        <CheckoutList />
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
)(ReviewCheckout)
