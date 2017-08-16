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
import { resetNewItem } from 'actions/items'

import ItemsList from './List'
import styles from './Styles'

import { searchItems } from 'actions/items'

class Items extends Component {
  static navigationOptions = {
    tabBarLabel: 'Inventory',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.api}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  componentDidMount() {
    this.props.resetNewItem()
  }

  render() {
    const { isLoading, navigation, searchItems, clearSearch, keyword, user } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.AccountButton to={() => navigation.navigate('DrawerOpen')} />}
          center={<Header.Logo />}
          right={<Header.CartButton to={() => navigation.navigate('CheckoutScreen')}/>} />
        <View style={styles.section}>
          <View style={styles.centered}>
            <SearchBar onSearch={keyword => searchItems(keyword, user)} onCancel={clearSearch} searchTerm={keyword} />
          </View>
        </View>
        <ItemsList navigation={navigation} />
        <TouchableOpacity onPress={() => navigation.navigate('CreateItemScreen')}>
          <View style={styles.floatingButton}>
            <Image source={Images.largePlus} style={styles.largePlus} resizeMode='contain' />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}



const mapStateToProps = ({ user, items, products }) =>
({
  errors: user.errors,
  isLoading: user.isLoading,
  user,
  keyword: items.keyword,
  item: items.newItem,
  product: products.newProduct,
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('searchItem')),
  resetNewItem: () => dispatch(resetNewItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
