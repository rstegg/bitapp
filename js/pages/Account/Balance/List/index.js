import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import BalanceRow from './ListRow'
import styles from './Styles'

const BalanceList = ({ orders, setActiveOrder }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={orders}
      renderRow={order => <BalanceRow order={order} onPress={() => setActiveOrder(order)} />}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
  </View>

export default BalanceList
