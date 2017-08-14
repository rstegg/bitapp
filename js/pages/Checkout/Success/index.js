import React, { Component } from 'react'
import { InteractionManager, TouchableWithoutFeedback, Platform, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { Images, Metrics } from 'themes'

import styles from './Styles'

import { createProduct } from 'actions/products'

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
    const { user, navigation } = this.props
    if(this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
          center={<Header.Logo />} />
          <Text>Checkout</Text>
          <View style={styles.buttonGroup}>
            <Text>{this.props.coinType}</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressLeft}>To:</Text>
            <Text style={styles.addressRight}>{this.props.address}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLeft}>Total Price:</Text>
            <Text style={styles.priceRight}>{this.props.totalPrice}</Text>
          </View>
          <View style={styles.qrCodeContainer}>
            <QRCode value={this.props.url} />
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{this.props.checkoutStatus}</Text>
          </View>
      </View>
    )
  }
}

//TODO: where address is saved?
const mapStateToProps = ({ user, orders }) =>
({
  user,
  address: orders.address,
  totalPrice: orders.totalPrice,
  checkoutStatus: orders.checkoutStatus,
  url: orders.url
})

export default connect(mapStateToProps)(CheckoutSuccess)
