import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { submit } from 'redux-form'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import styles from './Styles'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class WithdrawRequestSuccess extends Component {
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
          left={<Header.HomeButton to={() => navigateToHome(navigation)} />}
          center={<Header.Text>Withdraw Processed</Header.Text>} />
        <View style={styles.innerContainer}>
          <View style={styles.bankContainer}>
            <Text style={styles.bankLabel}>Your withdrawal has been processed.</Text>
            <Text style={styles.bankText}>{bank.bankName}</Text>
          </View>
          <View style={styles.bankContainer}>
            <Text style={styles.bankLabel}>You will receive the amount requested in 3-5 business days.</Text>
            <Text style={styles.bankText}></Text>
          </View>
        </View>
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
)(WithdrawRequestSuccess)
