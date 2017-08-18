import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import OrderRow from './ListRow'
import styles from './Styles'

const OrderList = ({ orders, setActiveOrder }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={orders}
      renderRow={order => <OrderRow order={order} onPress={() => setActiveOrder(order)} />}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
  </View>

export default OrderList
