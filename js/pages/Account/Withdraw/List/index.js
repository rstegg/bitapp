import React from 'react'
import {
  View,
  ListView,
} from 'react-native'

import BankAccountRow from './ListRow'
import styles from './Styles'

const BankAccountList = ({ withdrawalInfo, handleRemove, isLoading, navigation }) =>
  <ListView
    key='withdraw-info-list'
    style={styles.listView}
    dataSource={withdrawalInfo}
    renderRow={(rowData, sectionId, rowId) => <BankAccountRow account={rowData} isLoading={isLoading} onPressTrash={() => handleRemove(rowData)}/>}
    keyboardDismissMode='on-drag'
    keyboardShouldPersistTaps='always'
    showsVerticalScrollIndicator={false}
    enableEmptySections={true}
    removeClippedSubviews={false}
  />

export default BankAccountList
