import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'
import SearchBar from 'components/SearchBar'

import { Images } from 'themes'

import ItemsList from './List'
import styles from './Styles'

import { searchItems } from 'actions/items'

class Items extends Component {
  static navigationOptions = {
    tabBarLabel: 'Items',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.api}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    const { isLoading, navigation, searchItems, clearSearch, keyword, user } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
          center={<Header.Logo />}
          right={<Header.CartButton to={() => navigation.navigate('CheckoutReviewScreen')}/>} />
        <View style={styles.section}>
          <View style={styles.centered}>
            <SearchBar onSearch={keyword => searchItems(keyword, user)} onCancel={clearSearch} searchTerm={keyword} />
          </View>
        </View>
        <ItemsList navigation={navigation} />
      </View>
    )
  }
}



const mapStateToProps = ({ user, items }) =>
({
  errors: user.errors,
  isLoading: user.isLoading,
  user,
  keyword: items.keyword
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
