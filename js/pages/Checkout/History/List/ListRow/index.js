import React from 'react'
import {
  View,
  TouchableHighlight,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { format } from 'date-fns'

import Text from 'components/BitKitText'
import { Colors } from 'themes'

import styles from './Styles'

const formatDate = date => format(date, 'MMM DD, YYYY hh:mm A')

const ListRow = ({ transaction, onSelect }) =>
  <View style={styles.listRow}>
    <TouchableHighlight underlayColor={Colors.highlight} onPress={onSelect}>
      <View style={styles.checkoutRow}>
        <View style={styles.textContainer}>
          <View style={styles.infoText}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Date:</Text>
              <Text style={styles.dateText}>{formatDate(transaction.createdAt)}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusLabel}>Status:</Text>
              <Text style={styles.statusText}>{transaction.status}</Text>
            </View>
          </View>
          <View style={styles.amountContainer}>
            <View style={styles.currencyContainer}>
              <Text style={styles.currencyLabel}>Currency:</Text>
              <Text style={styles.currencyText}>{transaction.currency}</Text>
            </View>
            <View style={styles.totalUSDContainer}>
              <Text style={styles.totalUSDLabel}>Amount (USD):</Text>
              <Text style={styles.totalUSDText}>${transaction.amountUSD}</Text>
            </View>
          </View>
        </View>
        <View style={styles.chevronContainer}>
          <FontAwesome name='chevron-right' style={styles.chevronRight} />
        </View>
      </View>
    </TouchableHighlight>
  </View>

export default ListRow
