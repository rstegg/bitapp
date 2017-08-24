import React, { Component } from 'react'
import { InteractionManager, TouchableWithoutFeedback, Platform, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { NavigationActions } from 'react-navigation'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { Images, Metrics } from 'themes'

import styles from './Styles'

import { createProduct } from 'actions/products'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class CheckoutSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPlaceholderOnly: true,
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
     this.setState({renderPlaceholderOnly: false})
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { user, transaction, navigation } = this.props
    if(this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.HomeButton to={() => navigateToHome(navigation)} />}
          center={<Header.Text>Checkout</Header.Text>} />
          <View style={styles.innerContainer}>
            <View style={styles.currencyContainer}>
              <Text style={styles.currencyLabel}>Currency: </Text>
              <Text style={styles.currencyText}>{transaction.currency}</Text>
            </View>
            <View style={styles.priceOuterContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLeft}>Total Price (USD): </Text>
                <Text style={styles.priceRight}>${transaction.amountUSD}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLeft}>Total Price (BTC): </Text>
                <Text style={styles.priceRight}>{transaction.amount}</Text>
              </View>
            </View>
            <View style={styles.qrCodeContainer}>
              <QRCode value={transaction.url} size={300} />
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusLabel}>Status: </Text>
              <Text style={styles.statusText}>{transaction.status}</Text>
            </View>
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ user, checkout }) =>
({
  user,
  transaction: checkout.cart.active
})

export default connect(mapStateToProps)(CheckoutSuccess)