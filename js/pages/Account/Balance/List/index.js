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

const BalanceList = ({ balanceInfo, navigation }) =>
  <View style={styles.container}>
    <ListView
      key='withdraw-info-list'
      style={styles.listView}
      dataSource={balanceInfo}
      renderRow={(rowData, sectionId, rowId) => <BalanceRow data={rowData} isLoading={isLoading} onPress={() => navigation.navigate('AccountBalanceDetails', { rowData })}/>}
      renderSectionHeader={ (data, id) => <Header.Text style={{margin: 5, textAlign: 'left'}}>{'Bank Account(s)'}</Header.Text> }
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps={true}
      showsVerticalScrollIndicator={false}
      enableEmptySections={true}
      removeClippedSubviews={false}
    />
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AccountLinkBankScreen')}>
      <Text style={styles.actionButtonText}>Add Bank Account</Text>
    </TouchableOpacity>
  </View>

export default BalanceList
