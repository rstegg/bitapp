import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { removeBankAccount, setActiveBank } from 'actions/withdraw'

import { prop } from 'ramda'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import BankAccountList from './List'
import BankAccountIntro from './Intro'
import BalanceInfo from './Balance'
import styles from './Styles'

const Withdraw = ({ isLoading, banks, handleRemove, setActiveBank, navigation, user }) =>
  <View style={styles.container}>
    <Header
      left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
      center={<Header.Text>Withdraw</Header.Text>}
    />
    <BalanceInfo />
    { banks.getRowCount() ? <BankAccountList isLoading={isLoading} banks={banks} handleRemove={bank => handleRemove(bank, user)} setActiveBank={bank => setActiveBank(bank)} />
      : <BankAccountIntro /> }
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AccountLinkBankScreen')}>
      <Text style={styles.actionButtonText}>Add Bank Account</Text>
    </TouchableOpacity>
  </View>


const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const getBanks = prop('banks')
const hasBanks = user => getBanks(user) || []

const mapStateToProps = ({ user, withdraw }) =>
  ({
    isLoading: withdraw.banks.isLoading,
    banks: dataSource.cloneWithRows(hasBanks(user)),
    user
  })

const confirmRemove = ({ type, onConfirm }) =>
  Alert.alert(
    'Please Confirm',
    `Are you sure you want to remove this ${type}?`,
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: onConfirm },
    ]
  )

const mapDispatchToProps = dispatch =>
  ({
    handleRemove: (bank, user) => confirmRemove({ type: 'bank', onConfirm: () => dispatch(removeBankAccount(bank, user)) }),
    setActiveBank: bank => dispatch(setActiveBank(bank)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdraw)
