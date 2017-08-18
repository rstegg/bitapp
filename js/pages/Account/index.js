import React, { Component } from 'react'
import {
  Alert,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import Text from 'components/BitKitText'
import Header from 'components/Header'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Colors } from 'themes'

import { logout } from 'actions/login'

import styles from './Styles'

const AccountListItem = ({ text, icon, onPress }) =>
  <TouchableOpacity onPress={onPress} >
    <View style={styles.button}>
      <View style={styles.buttonSection}>
        <FontAwesome name={icon} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      <FontAwesome name='chevron-right' style={{fontSize: 20, color: Colors.grey}} />
    </View>
  </TouchableOpacity>

const AccountLogoutItem = ({ onPress }) =>
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <View style={styles.buttonSection}>
        <FontAwesome name='sign-out' style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log out</Text>
      </View>
    </View>
  </TouchableOpacity>

class Account extends Component {
  render() {
    const { navigation, handleLogout } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()}/>}
          center={<Header.Text>Account</Header.Text>}
        />
        <AccountListItem text='Profile' icon='user' onPress={() => navigation.navigate('AccountProfileScreen')} />
        <AccountListItem text='Orders' icon='credit-card' onPress={() => navigation.navigate('AccountOrdersScreen')} />
        <AccountListItem text='Withdrawal Info' icon='bank' onPress={() => navigation.navigate('AccountWithdrawScreen')} />
        <AccountListItem text='Support' icon='info-circle' onPress={() => navigation.navigate('AccountSupportScreen')} />
        <AccountLogoutItem onPress={() => handleLogout()} />
    </View>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  user
})

const mapDispatchToProps = dispatch =>
({
  handleLogout: () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel' },
      { text: 'Log out', onPress: () => dispatch(logout()) },
    ])
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)
