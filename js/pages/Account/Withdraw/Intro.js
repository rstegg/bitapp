import React from 'react'
import {
  View,
  TouchableOpacity,
} from 'react-native'

import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const BankAccountIntro = ({ navigation }) =>
  <View style={styles.container}>
    <View style={styles.introInstructions}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introText}>Link bank account(s) to receive</Text>
        <Text style={styles.introText}>the money you collect.</Text>
      </View>
      <FontAwesome name='university' style={styles.introIcon} />
    </View>
    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AccountLinkBankScreen')}>
      <Text style={styles.actionButtonText}>Add Bank Account</Text>
    </TouchableOpacity>
  </View>

export default BankAccountIntro
