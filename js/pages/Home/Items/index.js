import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Loader from 'components/Loader'
import Text from 'components/BitKitText'
import SearchBar from 'components/SearchBar'

import { Images } from 'themes'
import { resetNewItem } from 'actions/items'

import ItemsList from './List'
import styles from './Styles'

import { searchItems, clearSearchItems } from 'actions/items'

class Items extends Component {
  static navigationOptions = {
    tabBarLabel: 'Inventory',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.itemIcon}
        style={[ styles.icon, { tintColor: tintColor } ]}
      />
    ),
  }

  componentDidMount() {
    this.props.resetNewItem()
  }

  render() {
    const { isLoading, navigation, searchItems, clearSearchItems, keyword, user } = this.props
    if (isLoading) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.AccountButton to={() => navigation.navigate('AccountScreen')} />}
          center={<Header.Logo />}
          right={<Header.CartButton to={() => navigation.navigate('CheckoutScreen')}/>} />
        <View style={styles.section}>
          <View style={styles.centered}>
            <Text style={styles.subtitle}>Select an item to create a product</Text>
            <SearchBar onSearch={keyword => searchItems(keyword, user)} onCancel={clearSearchItems} searchTerm={keyword} />
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



const mapStateToProps = ({ user, items }) =>
  ({
    errors: items.errors,
    isLoading: items.isLoading,
    user,
    keyword: items.keyword
  })

const mapDispatchToProps = dispatch =>
  ({
    onSubmit: () => dispatch(submit('searchItem')),
    resetNewItem: () => dispatch(resetNewItem()),
    searchItems: (keyword, user) => dispatch(searchItems(keyword, user)),
    clearSearchItems: () => dispatch(clearSearchItems()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Items)
