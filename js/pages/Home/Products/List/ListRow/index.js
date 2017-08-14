import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

import Text from 'components/BitKitText'

import styles from './Styles'

const ListRow = ({ product, onSelect, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <TouchableOpacity onPress={onSelect} >
      <View style={styles.productRow}>
        <View style={styles.info}>
          <Image source={{uri: product.image}} style={styles.image} resizeMode='cover' />
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{product.unit}</Text>
            <Text numberOfLines={1} style={styles.details}>${product.unitPrice}</Text>
          </View>
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{product.item.name}</Text>
            <Text numberOfLines={1} style={styles.details}>{product.item.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.options} onPress={onOptionsBtnPress}>
          <IonIcon name='md-more' style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>

export default ListRow
