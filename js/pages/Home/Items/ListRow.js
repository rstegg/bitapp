import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

import { Colors } from 'themes'

import IonIcon from 'react-native-vector-icons/Ionicons'

import Text from 'components/BitKitText'

export default class ListRow extends Component {
  renderImageIfExists(image) {
    let renderedImage
    if(image) {
      renderedImage = <Image
                        key={image}
                        style={{width: 78, height: 78, alignSelf: 'center',}}
                        resizeMode='cover'
                        source={{uri: image}} />
    } else {
      renderedImage = null
    }
    return renderedImage
  }

  render() {
    const { item } = this.props
    return (
      <View style={styles.listRow}>
        <TouchableOpacity onPress={this.props.onSelect} >
        <View style={{flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={styles.info}>
            {this.renderImageIfExists(item.image)}
            <View style={styles.infoText}>
              <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.details}>{item.description}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.options} onPress={this.props.onOptionsBtnPress}>
            <IonIcon name='android-more-horizontal' style={styles.optionsIcon} />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listRow: {
    flexGrow: 1,
    height: 80,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  info: {
    flexGrow: 1,
    flexBasis: 1,
    flexDirection: 'row',
  },
  infoText: {
    flexGrow: 1,
    padding: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 18,
    padding: 5,
  },
  details: {
    fontSize: 14,
    padding: 5,
  },
  options: {
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  optionsIcon: {
    fontSize: 24,
    color: Colors.grey,
  },
})
