import React from 'react'
import {
  View,
  Image,
} from 'react-native'

import Text from 'components/BitKitText'
import { Images } from 'themes'

import styles from './Styles'

const ItemView = ({ item }) =>
  <View style={styles.listRow}>
    <View style={styles.itemRow}>
      <Image source={item.image ? { uri: item.image } : Images.itemPlaceholder} style={styles.image} resizeMode='cover' />
      <View style={styles.info}>
        <View style={styles.infoText}>
          <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.details}>{item.description}</Text>
        </View>
      </View>
    </View>
  </View>

export default ItemView
