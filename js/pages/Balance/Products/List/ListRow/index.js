import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

import Text from 'components/BitKitText'

import styles from './Styles'

const ListRow = ({ product }) =>
  <View style={styles.listRow}>
    <TouchableOpacity onPress={this.props.onSelect} >
      <View style={styles.productRow}>
        <View style={styles.info}>
          <Image source={{uri: product.image}} style={styles.image} resizeMode='cover' />
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{product.name}</Text>
            <Text numberOfLines={1} style={styles.details}>{product.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.options} onPress={this.props.onOptionsBtnPress}>
          <IonIcon name='md-more' style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>

export default ListRow
