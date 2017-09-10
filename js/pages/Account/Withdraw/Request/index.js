import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { submit } from 'redux-form'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { withdrawRequest } from 'actions/withdraw'

import WithdrawRequestForm from './Form'

import styles from './Styles'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class WithdrawRequest extends Component {
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
    const { bank, user, navigation } = this.props
    if (this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton to={() => navigation.goBack()} />}
          center={<Header.Text>Withdraw Request</Header.Text>}
          right={<Header.SaveButton isLoading={bank.isLoading} onPress={() => bank.isLoading ? null : withdrawSubmit()} />} />
        <View style={styles.innerContainer}>
          <View style={styles.bankContainer}>
            <Text style={styles.bankLabel}>Withdraw to Bank: </Text>
            <Text style={styles.bankText}>{bank.bankName}</Text>
          </View>
          <View style={styles.bankContainer}>
            <Text style={styles.bankLabel}>Recipient Name: </Text>
            <Text style={styles.bankText}>{bank.recipientName}</Text>
          </View>
          <View style={styles.bankContainer}>
            <Text style={styles.bankLabel}>Account Number: </Text>
            <Text style={styles.bankText}>{bank.account}</Text>
          </View>
        </View>
        <WithdrawRequestForm onSubmit={({ amount }) => withdrawRequest(bank, amount, user)} />
      </View>
    )
  }
}

const mapStateToProps = ({ user, withdraw }) =>
  ({
    bank: withdraw.banks.active,
    user
  })

const mapDispatchToProps = dispatch =>
  ({
    withdrawSubmit: () => dispatch(submit('withdrawRequest')),
    withdrawRequest: (bank, amount, user) => dispatch(withdrawRequest(bank, amount, user)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawRequest)
