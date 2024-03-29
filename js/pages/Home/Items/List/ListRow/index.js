import React from 'react'
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'

import Text from 'components/BitKitText'
import { Images, Colors } from 'themes'

import styles from './Styles'

const ListRow = ({ item, onSelect, onOptionsBtnPress }) =>
  <View style={styles.listRow}>
    <TouchableHighlight underlayColor={Colors.highlight} onPress={onSelect} >
      <View style={styles.itemRow}>
        <View style={styles.info}>
          <Image source={item.image ? { uri: item.image } : Images.itemPlaceholder} style={styles.image} resizeMode='cover' />
          <View style={styles.infoText}>
            <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.details}>{item.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.options} onPress={onOptionsBtnPress}>
          <IonIcon name='md-more' style={styles.optionsIcon} />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  </View>

export default ListRow
