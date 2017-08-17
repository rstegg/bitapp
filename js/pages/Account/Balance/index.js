import React from 'react'
import {
  View,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { removeBalance } from 'actions/withdraw'

import Header from 'components/Header'

import BalanceList from './List'
import BalanceIntro from './Intro'
import styles from './Styles'

const BalanceInfo = ({ isLoading, balanceInfo, navigation }) =>
  <View style={styles.container}>
    <Header
      left={<Header.BackButton to={() => navigation.goBack()} />}
      center={<Header.Text>Balance</Header.Text>}
    />
    { balanceInfo.getRowCount() ? <BalanceList isLoading={isLoading} balanceInfo={balanceInfo} navigation={navigation} />
    : <BalanceIntro navigation={navigation} /> }
  </View>

const firstIfExists = o => (o && o.length && o[0]) || { source: { data: [] } }
const makeBalanceRows = user => firstIfExists(user.balance).source.data.filter(({object}) => object === 'bank_account')
const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
  sectionHeaderHasChanged : (s1, s2) => s1 !== s2
})

const mapStateToProps = ({ user, withdraw }) =>
({
  isLoading: withdraw.isLoading,
  balanceInfo: dataSource.cloneWithRowsAndSections(makeBalanceRows(user))
})

export default connect(
  mapStateToProps
)(BalanceInfo)
