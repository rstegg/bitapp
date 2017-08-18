import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { path } from 'ramda'

import Text from 'components/BitKitText'
import { Images } from 'themes'

import styles from './Styles'

const itemImage = path(['item', 'image'])
const itemName = path(['item', 'name'])

const ListRow = ({ product, onSelect, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.checkoutRow}>
        <View style={styles.info}>
          <Image source={itemImage(product) ? { uri: itemImage(product) } : Images.productPlaceholder} style={styles.image} resizeMode='cover' />
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{itemName(product)}</Text>
            <Text numberOfLines={1} style={styles.price}>Price: ${product.unitPrice}</Text>
          </View>
          <View style={styles.detailsText}>
            <Text numberOfLines={1} style={styles.quantity}>{product.quantity} {product.unit}</Text>
            <Text numberOfLines={1} style={styles.total}>Total: ${product.quantity * product.unitPrice}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.options} onPress={onOptionsBtnPress}>
          <IonIcon name='md-more' style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>

export default ListRow