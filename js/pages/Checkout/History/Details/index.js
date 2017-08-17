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

class BalanceDetails extends Component {
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
          left={<Header.BackButton to={() => navigation.goBack()} />}
          center={<Header.Logo />} />
          <Text>Balance Details</Text>
          <View style={styles.buttonGroup}>
            <Text>{this.props.currency}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLeft}>Total Price (USD):</Text>
            <Text style={styles.priceRight}>${this.props.amountUSD}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLeft}>Total Price (BTC):</Text>
            <Text style={styles.priceRight}>${this.props.amount}</Text>
          </View>
          <View style={styles.qrCodeContainer}>
            <QRCode value={this.props.url} />
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{this.props.status}</Text>
          </View>
      </View>
    )
  }
}

//TODO: where address is saved?
const mapStateToProps = ({ user, checkout }) =>
({
  user,
  currency: checkout.currency,
  amountUSD: checkout.amountUSD,
  amount: checkout.amount,
  url: checkout.url,
  status: checkout.status
})

export default connect(mapStateToProps)(BalanceDetails)
