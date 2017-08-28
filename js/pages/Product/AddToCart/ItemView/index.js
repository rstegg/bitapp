import React from 'react'
import {
  View,
  Image,
} from 'react-native'
import { path } from 'ramda'

import Text from 'components/BitKitText'
import { Images } from 'themes'

import styles from './Styles'

const itemImage = path([ 'item', 'image' ])
const itemName = path([ 'item', 'name' ])
const itemDesc = path([ 'item', 'description' ])

const ItemView = ({ product }) =>
  <View style={styles.listRow}>
    <View style={styles.itemRow}>
      <View style={styles.info}>
        <Image source={itemImage(product) ? { uri: itemImage(product) } : Images.itemPlaceholder} style={styles.image} resizeMode='cover' />
        <View style={styles.infoText}>
          <Text numberOfLines={1} style={styles.name}>{itemName(product)}</Text>
          <Text numberOfLines={1} style={styles.details}>{itemDesc(product)}</Text>
          <Text numberOfLines={1} style={styles.unitPrice}>${product.unitPrice} per {product.unit}</Text>
        </View>
      </View>
    </View>
  </View>

export default ItemView
