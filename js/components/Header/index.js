import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Images } from 'themes'
import ActionButton from 'components/ActionButton'
import Text from 'components/BitKitText'

import { IonIcon } from 'react-native-vector-icons'

import styles from './Styles'

export default Header = ({left, center, right, style}) => {
  return (
    <View style={[style || styles.container]}>
      <View style={[ styles.item, { alignItems: 'flex-start' } ]}>{left}</View>
      <View style={[ styles.middleItem, { alignItems: 'center' } ]}>{center}</View>
      <View style={[ styles.item, { alignItems: 'flex-end' } ]}>{right}</View>
    </View>
  )
}

Header.Logo = () => <Image source={Images.logo} style={styles.logo} resizeMode='contain'/>

Header.Text = ({style, children}) =>
  <View style={{justifyContent: 'center', marginTop: 16,}}>
    <Text numberOfLines={1} style={styles.headerText}>{children}</Text>
  </View>

Header.MenuButton = (_, {drawer}) =>
  <TouchableOpacity onPress={drawer.open} style={styles.menuButton}>
    <Image source={Images.hamburger} style={styles.imageButton} resizeMode='contain' />
  </TouchableOpacity>

Header.HomeButton = ({to}) =>
   <TouchableOpacity onPress={to} style={styles.iconButton}>
        <Image source={Images.home} style={styles.imageButton} resizeMode='contain' />
    </TouchableOpacity>

Header.ViewButton = ({to}) =>
   <TouchableOpacity onPress={to} style={styles.iconButton}>
        <IonIcon name='android-open' style={styles.viewButton} size={28} />
    </TouchableOpacity>

Header.BackButton = ({to, text}) =>
  <TouchableOpacity onPress={to} style={styles.navButton}>
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={Images.backButton} style={styles.backButton} resizeMode='contain' />
      { (text) ? <Text style={[styles.linkText, {paddingBottom: 3}]}>{text}</Text> : <View/> }
    </View>
  </TouchableOpacity>

Header.CloseButton = ({to, buttonStyle}) =>
   <TouchableOpacity onPress={to} style={styles.navButton}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, paddingBottom: 15,}}>
        <Text style={[styles.linkText, {fontSize: 30, textAlign: 'left'}, buttonStyle]}>&times</Text>
      </View>
    </TouchableOpacity>

Header.TextButton = ({text, onPress, isLoading}) =>
  <ActionButton onPress={onPress} style={styles.navButton} isLoading={isLoading || false} textStyle={styles.linkText}>
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: 10}}>
      { (text) ? <Text numberOfLines={1} style={styles.linkText}>{text}</Text> : <View/> }
    </View>
  </ActionButton>
