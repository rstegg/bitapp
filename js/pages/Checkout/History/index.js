import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { length } from 'ramda'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import { checkoutSubmit } from 'actions/orders'

import HistoryList from './List'
import styles from './Styles'

class CheckoutHistory extends Component {
  render() {
    const { cart, user, isLoading, checkoutSubmit, navigation } = this.props
    return (
      <View>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Checkout' isLoading={isLoading} onPress={() => isLoading || !length(cart.products) ? null : checkoutSubmit(cart.products, user)} />} />
          <View style={styles.centered}>
            <Text style={styles.headerText}>Checkout History</Text>
          </View>
        <HistoryList />
      </View>
    )
  }
}


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
)(CheckoutHistory)
