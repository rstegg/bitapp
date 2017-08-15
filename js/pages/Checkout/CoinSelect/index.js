import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import { currencySubmit } from 'actions/orders'

import styles from './Styles'

class CoinSelect extends Component {
  componentWillUpdate(nextProps) {
    if(nextProps.isCreated) {
      this.props.navigation.navigate('CheckoutSuccessScreen')
    }
  }
  render() {
    const { navigation, user, currencySubmit, orderId } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
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

const mapStateToProps = ({ user, orders }) =>
({
  user,
  isCreated: orders.isCreated,
  orderId: orders.orderId
})

const mapDispatchToProps = dispatch =>
({
  currencySubmit: (currency, orderId, user) => dispatch(currencySubmit(currency, orderId, user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinSelect)
