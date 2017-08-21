import React from 'react'
import {
  View,
  ListView,
  TouchableOpacity,
} from 'react-native'

import Header from 'components/Header'
import Text from 'components/BitKitText'

import BankAccountRow from './ListRow'
import styles from './Styles'

const BankAccountList = ({ withdrawalInfo, handleRemove, isLoading, navigation }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={withdrawalInfo}
      renderRow={(rowData, sectionId, rowId) => <BankAccountRow data={rowData} isLoading={isLoading} onPressTrash={() => handleRemove(rowData)}/>}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AccountLinkBankScreen')}>
      <Text style={styles.actionButtonText}>Add Bank Account</Text>
    </TouchableOpacity>
  </View>

export default BankAccountList
