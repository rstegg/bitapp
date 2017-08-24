import React from 'react'
import { View } from 'react-native'
import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'components/ActionButton'

import styles from './Styles'

const BankAccountRow = ({account, isLoading, onPressTrash}) =>
  <View style={styles.container}>
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

export default BankAccountRow
