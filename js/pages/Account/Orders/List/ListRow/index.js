import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { format } from 'date-fns'

import { Colors } from 'themes'

import styles from './Styles'

const formatDate = date => format(date, 'MMM DD, YYYY hh:mm A')

const OrderRow = ({ order, onSelect }) =>
  <View style={styles.listRow}>
    <TouchableHighlight underlayColor={Colors.highlight} onPress={onSelect}>
      <View style={styles.orderRow}>
        <FontAwesome name='list-alt' style={styles.icon} />
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{formatDate(order.createdAt)}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalText}>${order.totalUSD}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <FontAwesome name='chevron-right' style={styles.chevronRight} />
        </View>
      </View>
    </TouchableHighlight>
  </View>

export default OrderRow
