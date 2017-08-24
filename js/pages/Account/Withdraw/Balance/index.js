import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { fetchBalance } from 'actions/withdraw'

import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import styles from './Styles'

class Balance extends Component {
  componentWillMount() {
    const { fetchBalance, user } = this.props
    fetchBalance(user)
  }
  render() {
    const { isLoading, balanceBTC, balanceLTC, } = this.props
    if(isLoading) {
      return <Loader style={styles.balanceLoader} />
    }
    return (
      <View style={styles.container}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={styles.balanceBTC}>
          <Text style={styles.balanceBTCLabel}>BTC:</Text>
          <Text style={styles.balanceBTCText}>{balanceBTC.confirmed}</Text>
        </View>
        <View style={styles.balanceLTC}>
          <Text style={styles.balanceLTCLabel}>LTC:</Text>
          <Text style={styles.balanceLTCText}>{balanceLTC.confirmed}</Text>
        </View>
        <View style={styles.totalUSD}>
          <Text style={styles.totalUSDLabel}>Total (USD):</Text>
          <Text style={styles.totalUSDText}>${balanceBTC.confirmedUSD + balanceLTC.confirmedUSD}</Text>
        </View>
      </View>
    )
  }
}


const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ user, withdraw }) =>
({
  isLoading: withdraw.balance.isLoading,
  balanceBTC: withdraw.balance.BTC,
  balanceLTC: withdraw.balance.LTC,
  user,
})

const confirmRemove = ({type, onConfirm}) =>
  Alert.alert(
    'Please Confirm',
    `Are you sure you want to remove this ${type}?`,
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: onConfirm},
    ]
  )

const mapDispatchToProps = dispatch =>
({
  fetchBalance: user => dispatch(fetchBalance(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Balance)
