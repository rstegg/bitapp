import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import { onCheckoutSubmit } from 'actions/orders'

import CheckoutList from './List'
import styles from './Styles'

const ReviewCheckout = ({ cart, user, isLoading, checkoutSubmit, navigation }) =>
  <View>
    <Header
      left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
      center={<Header.Logo />}
      right={<Header.TextButton text='Checkout' isLoading={isLoading} onPress={() => isLoading ? null : onCheckoutSubmit(cart, user)} />} />
    <Text>Current Cart</Text>
    <CheckoutList />
  </View>

const mapStateToProps = ({ user, orders }) =>
({
  cart: orders.cart,
  isLoading: orders.cart.isLoading,
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
