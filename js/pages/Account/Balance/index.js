import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { fetchOrders, setActiveOrder } from 'actions/orders'

import Header from 'components/Header'
import Loader from 'components/Loader'

import BalanceList from './List'
import BalanceIntro from './Intro'
import styles from './Styles'

class BalanceInfo extends Component {
  componentWillMount() {
    console.log(this.props);
    const { user, fetchOrders } = this.props
    fetchOrders(user)
  }

  render() {
    const { isLoading, orders, setActiveOrder, navigation } = this.props
    if(isLoading) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton to={() => navigation.goBack()} />}
          center={<Header.Text>Balance</Header.Text>}
        />
        { orders.getRowCount() ? <BalanceList orders={orders} setActiveOrder={setActiveOrder} />
        : <BalanceIntro navigation={navigation} /> }
      </View>
    )
  }
}


const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ user, orders }) =>
({
  isLoading: orders.history.isLoading,
  orders: dataSource.cloneWithRows(orders.history.list),
  user
})

const mapDispatchToProps = dispatch =>
({
  fetchOrders: user => dispatch(fetchOrders(user)),
  setActiveOrder: order => dispatch(setActiveOrder(order)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BalanceInfo)
