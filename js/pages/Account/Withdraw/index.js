import React from 'react'
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

import BankAccountList from './List'
import BankAccountIntro from './Intro'
import styles from './Styles'

const WithdrawalInfo = ({ isLoading, withdrawalInfo, handleRemove, navigation }) =>
  <View style={styles.container}>
    <Header
      left={<Header.BackButton to={() => navigation.goBack()} />}
      center={<Header.Text>Withdrawal Info</Header.Text>}
    />
    { withdrawalInfo.getRowCount() ? <BankAccountList isLoading={isLoading} withdrawalInfo={withdrawalInfo} handleRemove={handleRemove} navigation={navigation} />
    : <BankAccountIntro navigation={navigation} /> }
  </View>

const firstIfExists = o => (o && o.length && o[0]) || { source: { data: [] } }
const makeBankRows = user => firstIfExists(user.banks).source.data.filter(({object}) => object === 'bank_account')
const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
  sectionHeaderHasChanged : (s1, s2) => s1 !== s2
})

const mapStateToProps = ({ user, withdraw }) =>
({
  isLoading: withdraw.isLoading,
  withdrawalInfo: dataSource.cloneWithRowsAndSections(makeBankRows(user))
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
  handleRemove: bank => confirmRemove({ type: 'bank', onConfirm: () => dispatch(removeBankAccount(bank)) })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawalInfo)
