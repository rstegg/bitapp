import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const capIt = str => str.charAt(0).toUpperCase() + str.slice(1)

const BalanceDetailsRow = ({ product }) =>
  <View style={styles.container}>
    <FontAwesome name='list-alt' style={styles.icon} />
    <Text style={styles.text}>Price per {product.unit}: ${product.unitPrice}</Text>
    <View style={styles.column}>
      <Text style={styles.text}>Qty: {product.quantity}</Text>
      <Text style={styles.text}>Total: ${product.total}</Text>
    </View>
  </View>

export default BalanceDetailsRow
