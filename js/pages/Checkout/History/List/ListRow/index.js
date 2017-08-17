import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { path } from 'ramda'

import Text from 'components/BitKitText'
import { Images } from 'themes'

import styles from './Styles'

const itemImage = path(['item', 'image'])
const itemName = path(['item', 'name'])

const ListRow = ({ transaction, onSelect, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.checkoutRow}>
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>Currency: {transaction.currency}</Text>
            <Text numberOfLines={1} style={styles.price}>Status: {transaction.status}</Text>
          </View>
          <View style={styles.detailsText}>
            <Text numberOfLines={1} style={styles.price}>Amount (USD): ${transaction.amountUSD}</Text>
            <Text numberOfLines={1} style={styles.price}>Amount (BTC): {transaction.amount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>

export default ListRow
