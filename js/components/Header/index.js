import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Images } from 'themes'
import ActionButton from 'components/ActionButton'
import Text from 'components/BitKitText'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './Styles'

const Header = ({ left, center, right, style }) =>
  <View style={[ style || styles.container ]}>
    <View style={[ styles.item, { alignItems: 'flex-start' } ]}>{left}</View>
    <View style={[ styles.middleItem, { alignItems: 'center' } ]}>{center}</View>
    <View style={[ styles.item, { alignItems: 'flex-end' } ]}>{right}</View>
  </View>

Header.Logo = () => <Image source={Images.headerLogo} style={styles.logo} resizeMode='contain'/>

Header.Logo.displayName = 'Header.Logo'

Header.Text = ({ style, children }) =>
  <View style={style || { justifyContent: 'center', marginTop: 16, }}>
    <Text numberOfLines={1} style={styles.headerText}>{children}</Text>
  </View>

Header.Text.displayName = 'Header.Text'

Header.MenuButton = ({ openDrawer }) =>
  <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
    <Image source={Images.hamburger} style={styles.imageButton} resizeMode='contain' />
  </TouchableOpacity>

Header.MenuButton.displayName = 'Header.MenuButton'

Header.HomeButton = ({ to }) =>
  <TouchableOpacity onPress={to} style={styles.iconButton}>
    <FontAwesome name='home' style={styles.viewButton} resizeMode='contain' />
  </TouchableOpacity>

Header.HomeButton.displayName = 'Header.HomeButton'

Header.CartButton = ({ to }) =>
  <TouchableOpacity onPress={to} style={styles.iconButton}>
    <FontAwesome name='shopping-cart' style={styles.viewButton} size={28} />
  </TouchableOpacity>

Header.CartButton.displayName = 'Header.CartButton'

Header.AccountButton = ({ to }) =>
  <TouchableOpacity onPress={to} style={styles.iconButton}>
    <FontAwesome name='user-circle-o' style={styles.viewButton} size={28} />
  </TouchableOpacity>

Header.AccountButton.displayName = 'Header.AccountButton'

Header.BackButton = ({ to, text }) =>
  <TouchableOpacity onPress={to} style={styles.navButton}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={Images.backButton} style={styles.backButton} resizeMode='contain' />
      { (text) ? <Text style={[ styles.linkText, { paddingBottom: 3 } ]}>{text}</Text> : <View/> }
    </View>
  </TouchableOpacity>

Header.BackButton.displayName = 'Header.BackButton'

Header.NextButton = ({ to, text }) =>
  <TouchableOpacity onPress={to} style={styles.navButton}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      { (text) ? <Text style={[ styles.linkText, { paddingBottom: 3 } ]}>{text}</Text> : <View/> }
      <Image source={Images.forwardButton} style={styles.forwardButton} resizeMode='contain' />
    </View>
  </TouchableOpacity>

Header.NextButton.displayName = 'Header.NextButton'

Header.CloseButton = ({ to, buttonStyle }) =>
  <TouchableOpacity onPress={to} style={styles.navButton}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, paddingBottom: 15, }}>
      <Text style={[ styles.linkText, { fontSize: 30, textAlign: 'left' }, buttonStyle ]}>&times</Text>
    </View>
  </TouchableOpacity>

Header.CloseButton.displayName = 'Header.CloseButton'

Header.SaveButton = ({ onPress, isLoading, isDisabled }) =>
  <ActionButton onPress={onPress} style={styles.navButton} isLoading={isLoading} textStyle={styles.linkText}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
      <FontAwesome name='check' style={isDisabled ? styles.checkButtonDisabled : styles.checkButton} />
    </View>
  </ActionButton>

Header.SaveButton.displayName = 'Header.SaveButton'

Header.TextButton = ({ text, onPress, isLoading }) =>
  <ActionButton onPress={onPress} style={styles.navButton} isLoading={isLoading} textStyle={styles.linkText}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
      { (text) ? <Text numberOfLines={1} style={styles.linkText}>{text}</Text> : <View/> }
    </View>
  </ActionButton>

Header.TextButton.displayName = 'Header.TextButton'

export default Header
