import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import { Images, Metrics } from 'themes'

import styles from './Styles'

const CoinSelect = ({ navigation }) =>
  <View style={styles.container}>
    <Header
      left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
      center={<Header.Logo />} />
    <View style={styles.buttonGroup}>
      <TouchableOpacity onPress={() => navigation.navigate('CheckoutSuccessScreen', { coinType: 'BTC' })}>
        <Text>BTC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CheckoutSuccessScreen', { coinType: 'LTC' })}>
        <Text>LTC</Text>
      </TouchableOpacity>
    </View>
  </View>

export default CoinSelect
