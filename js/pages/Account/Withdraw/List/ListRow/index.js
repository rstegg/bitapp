import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'components/ActionButton'

import { Colors } from 'themes'

import styles from './Styles'

const BankAccountRow = ({ account, isLoading, onSelect, onPressTrash }) =>
  <View style={styles.listRow}>
    <TouchableHighlight underlayColor={Colors.highlight} onPress={onSelect}>
      <View style={styles.bankRow}>
        <View style={styles.row}>
          <FontAwesome style={styles.icon} name={'bank'} />
          <Text style={styles.text}>{account.bankName} *****{account.last4}</Text>
        </View>
        { account.default_for_currency ? null : (
          <ActionButton isLoading={isLoading === account.id} style={styles.row} onPress={onPressTrash}>
            <FontAwesome name={'trash'} style={styles.icon} />
          </ActionButton>
        )}
      </View>
    </TouchableHighlight>
  </View>

export default BankAccountRow
