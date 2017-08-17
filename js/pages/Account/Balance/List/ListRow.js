import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const BalanceRow = ({ order, isLoading, onPress }) =>
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome name='list-alt' style={styles.icon} />
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>${order.totalUSD}</Text>
      </View>
      <FontAwesome name='chevron-right' style={styles.chevronRight} />
    </View>
  </TouchableOpacity>


export default BalanceRow
