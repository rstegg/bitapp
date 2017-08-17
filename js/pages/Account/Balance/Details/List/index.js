import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import BalanceDetailsRow from './ListRow'
import styles from './Styles'

const BalanceDetailsList = ({ products, navigation }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={products}
      renderRow={(product, sectionId, rowId) => <BalanceDetailsRow product={product} />}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
  </View>

export default BalanceDetailsList
