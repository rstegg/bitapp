import React from 'react'
import { View, ListView } from 'react-native'

import OrderDetailsRow from './ListRow'
import styles from './Styles'

const OrderDetailsList = ({ products }) =>
  <ListView
    key='withdraw-info-list'
    style={styles.listView}
    dataSource={products}
    renderRow={product => <OrderDetailsRow product={product} />}
    keyboardDismissMode='on-drag'
    keyboardShouldPersistTaps='always'
    showsVerticalScrollIndicator={false}
    enableEmptySections={true}
    removeClippedSubviews={false}
    renderSeparator={() => <View style={styles.divider}></View>} />

export default OrderDetailsList
