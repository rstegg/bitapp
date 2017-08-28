import React from 'react'
import { View, Image } from 'react-native'
import { path } from 'ramda'

import Text from 'components/BitKitText'

import { Images } from 'themes'

import styles from './Styles'

const itemImage = path([ 'item', 'image' ])
const itemName = path([ 'item', 'name' ])

const OrderDetailsRow = ({ product }) =>
  <View style={styles.listRow}>
    <Image source={ itemImage(product) ? { uri: itemImage(product) } : Images.productPlaceholder} style={styles.image} resizeMode='contain' />
    <View style={styles.productInfo}>
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.nameLabel}>Product:</Text>
        <Text numberOfLines={1} style={styles.nameText}>{itemName(product)}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text numberOfLines={1} style={styles.priceLabel}>Price per {product.unit}:</Text>
        <Text numberOfLines={1} style={styles.priceText}>${product.unitPrice}</Text>
      </View>
    </View>
    <View style={styles.verticalDivider}></View>
    <View style={styles.orderInfo}>
      <View style={styles.quantityContainer}>
        <Text numberOfLines={1} style={styles.quantityLabel}>Qty:</Text>
        <Text numberOfLines={1} style={styles.quantityText}>{product.quantity}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text numberOfLines={1} style={styles.totalLabel}>Total:</Text>
        <Text numberOfLines={1} style={styles.totalText}>${product.total}</Text>
      </View>
    </View>
  </View>

export default OrderDetailsRow
