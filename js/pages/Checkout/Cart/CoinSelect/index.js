import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import { currencySubmit } from 'actions/checkout'

import styles from './Styles'

class CoinSelect extends Component {
  render() {
    const { navigation, user, currencySubmit, orderId } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
          center={<Header.Logo />} />
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => currencySubmit('BTC', orderId, user)}>
            <Text>BTC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => currencySubmit('LTC', orderId, user)}>
            <Text>LTC</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ user, checkout }) =>
({
  user,
  orderId: checkout.orderId
})

const mapDispatchToProps = dispatch =>
({
  currencySubmit: (currency, orderId, user) => dispatch(currencySubmit(currency, orderId, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinSelect)
