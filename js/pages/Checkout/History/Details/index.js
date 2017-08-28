import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import styles from './Styles'

class BalanceDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPlaceholderOnly: true,
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ renderPlaceholderOnly: false })
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { transaction, navigation } = this.props
    if (this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
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

const mapStateToProps = ({ checkout }) =>
  ({
    transaction: checkout.history.active
  })

export default connect(mapStateToProps)(BalanceDetails)
