import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'
import SearchBar from 'components/SearchBar'

import { Images } from 'themes'

import ProductsList from './List'
import styles from './Styles'

class Products extends Component {
  static navigationOptions = {
    tabBarLabel: 'Products',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.api}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }
  render() {
    const { isLoading, navigation } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.MenuButton openDrawer={() => navigation.navigate('DrawerOpen')} />}
          center={<Header.Logo />} />
          <View style={styles.section}>
            <View style={styles.centered}>
              <SearchBar onSearch={console.log} onCancel={console.log} searchTerm={'abc'} />
            </View>
          </View>
          <ProductsList />
      </View>
    )
  }
}



const mapStateToProps = ({ user }) =>
({
  errors: user.errors,
  isLoading: user.isLoading
})

const mapDispatchToProps = dispatch =>
({
  onSubmit: () => dispatch(submit('login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
