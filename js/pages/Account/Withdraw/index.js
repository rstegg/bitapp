import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { removeBankAccount } from 'actions/withdraw'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import BankAccountList from './List'
import BankAccountIntro from './Intro'
import BalanceInfo from './Balance'
import styles from './Styles'

const Withdraw = ({ isLoading, withdrawalInfo, handleRemove, navigation, user }) =>
  <View style={styles.container}>
    <Header
      left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
      center={<Header.Text>Withdraw</Header.Text>}
    />
    <BalanceInfo />
    { withdrawalInfo.getRowCount() ? <BankAccountList isLoading={isLoading} withdrawalInfo={withdrawalInfo} handleRemove={handleRemove} />
    : <BankAccountIntro /> }
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AccountLinkBankScreen')}>
      <Text style={styles.actionButtonText}>Add Bank Account</Text>
    </TouchableOpacity>
  </View>


const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ user, withdraw }) =>
({
  isLoading: withdraw.balance.isLoading,
  balance: withdraw.balance,
  withdrawalInfo: dataSource.cloneWithRows(withdraw.banks.list),
  user
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
  handleRemove: (bank, user) => confirmRemove({ type: 'bank', onConfirm: () => dispatch(removeBankAccount(bank, user)) })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdraw)
