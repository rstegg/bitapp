import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import { fetchBalance, removeBankAccount } from 'actions/withdraw'

import Header from 'components/Header'

import BankAccountList from './List'
import BankAccountIntro from './Intro'
import styles from './Styles'

class Withdraw extends Component {
  componentWillMount() {
    const { fetchBalance, user } = this.props
    fetchBalance(user)
  }
  render() {
    const { isLoading, withdrawalInfo, handleRemove, navigation, user } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
          center={<Header.Text>Withdraw</Header.Text>}
        />
        { withdrawalInfo.getRowCount() ? <BankAccountList isLoading={isLoading} withdrawalInfo={withdrawalInfo} handleRemove={handleRemove} navigation={navigation} />
        : <BankAccountIntro navigation={navigation} /> }
      </View>
    )
  }
}


const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ user, withdraw }) =>
({
  isLoading: withdraw.isLoading,
  withdrawalInfo: dataSource.cloneWithRows(user.banks),
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
  handleRemove: (bank, user) => confirmRemove({ type: 'bank', onConfirm: () => dispatch(removeBankAccount(bank, user)) }),
  fetchBalance: user => dispatch(fetchBalance(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdraw)
