import React from 'react'
import {
  View,
  TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation'

import Text from 'components/BitKitText'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const navigateToHome = navigation =>
  navigation.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen' })
      ]
    })
  )

const OrdersIntro = ({ navigation }) =>
  <View style={styles.container}>
    <View style={styles.introInstructions}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introText}>Sell products to</Text>
        <Text style={styles.introText}>earn money.</Text>
      </View>
      <FontAwesome name='university' style={styles.introIcon} />
    </View>
    <TouchableOpacity style={styles.actionButton} onPress={() => navigateToHome(navigation)}>
      <Text style={styles.actionButtonText}>Sell a Product</Text>
    </TouchableOpacity>
  </View>

export default OrdersIntro
