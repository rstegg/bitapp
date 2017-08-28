import React from 'react'
import { ListView } from 'react-native'

import BankAccountRow from './ListRow'
import styles from './Styles'

const BankAccountList = ({ withdrawalInfo, handleRemove, isLoading }) =>
  <ListView
    key='withdraw-info-list'
    style={styles.listView}
    dataSource={withdrawalInfo}
    renderRow={bank => <BankAccountRow account={bank} isLoading={isLoading} onPressTrash={() => handleRemove(bank)}/>}
    keyboardDismissMode='on-drag'
    keyboardShouldPersistTaps='always'
    showsVerticalScrollIndicator={false}
    enableEmptySections={true}
    removeClippedSubviews={false}
  />

export default BankAccountList
