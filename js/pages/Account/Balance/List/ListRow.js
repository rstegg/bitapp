import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const BalanceRow = ({ data, isLoading, onPress }) =>
  <TouchableOpacity onPress={onPress} >
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome name='list-alt' style={styles.icon} />
        <Text style={styles.text}>{data.created_at}</Text>
      </View>
      <FontAwesome name='chevron-right' style={{fontSize: 20, color: Colors.grey}} />
    </View>
  </TouchableOpacity>

export default BalanceRow
