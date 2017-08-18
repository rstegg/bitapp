import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import OrderDetailsRow from './ListRow'
import styles from './Styles'

const OrderDetailsList = ({ products, navigation }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={products}
      renderRow={(product, sectionId, rowId) => <OrderDetailsRow product={product} />}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
  </View>

export default OrderDetailsList
