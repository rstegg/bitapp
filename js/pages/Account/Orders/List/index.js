import React from 'react'
import {
  View,
  ListView,
} from 'react-native'

import OrderRow from './ListRow'
import styles from './Styles'

const OrderList = ({ orders, setActiveOrder }) =>
  <ListView
    key='withdraw-info-list'
    style={styles.listView}
    dataSource={orders}
    renderRow={order => <OrderRow order={order} onSelect={() => setActiveOrder(order)} />}
    keyboardDismissMode='on-drag'
    keyboardShouldPersistTaps='always'
    showsVerticalScrollIndicator={false}
    enableEmptySections={true}
    removeClippedSubviews={false}
    renderSeparator={() => <View style={styles.divider}></View>} />

export default OrderList
