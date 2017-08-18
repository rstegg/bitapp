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
const itemDescr = path(['item', 'description'])

const ListRow = ({ product, onSelect, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <TouchableOpacity onPress={onSelect} >
      <View style={styles.productRow}>
        <View style={styles.info}>
          <Image source={itemImage(product) ? { uri: itemImage(product) } : Images.productPlaceholder} style={styles.image} resizeMode='cover' />
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{itemName(product)}</Text>
            <Text numberOfLines={1} style={styles.details}>{itemDescr(product)}</Text>
            <Text numberOfLines={1} style={styles.unit}>${product.unitPrice} per {product.unit}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.options} onPress={onOptionsBtnPress}>
          <IonIcon name='md-more' style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>

export default ListRow
