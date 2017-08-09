import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

import Text from 'components/BitKitText'

import styles from './Styles'

const ItemView = ({ item, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <View style={styles.itemRow}>
      <View style={styles.info}>
        <Image source={{uri: item.image}} style={styles.image} resizeMode='cover' />
        <View style={styles.infoText}>
          <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.details}>{item.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.options} onPress={onOptionsBtnPress}>
        <IonIcon name='android-more-horizontal' style={styles.optionsIcon} />
      </TouchableOpacity>
    </View>
  </View>

export default ItemView
