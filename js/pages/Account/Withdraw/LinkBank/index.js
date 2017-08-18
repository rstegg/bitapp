import React from 'react'
import {
  View,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import ScrollView from 'components/ScrollView'

import { linkBankAccount } from 'actions/withdraw'

import LinkBankForm from './Form'
import styles from './Styles'

const LinkBank = ({ isLoading, saveBank, linkBankAccount, navigation }) =>
  <View style={styles.container}>
    <Header
      left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
      center={<Header.Text>Link Bank Account</Header.Text>}
      right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => saveBank()}/>}
      />
      <ScrollView style={{flexGrow: 1,}}>
        <LinkBankForm onSubmit={values => linkBankAccount(values)} />
      </ScrollView>
  </View>

const mapStateToProps = ({ withdraw }) =>
({
  withdraw,
  isLoading: withdraw.isLoading,
})

const mapDispatchToProps = dispatch =>
({
  saveBank: () => dispatch(submit('linkBank')),
  linkBankAccount: bank => dispatch(linkBankAccount(bank)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkBank)
