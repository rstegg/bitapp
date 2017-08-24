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

import { resetNewProduct } from 'actions/products'

import ProductsList from './List'
import styles from './Styles'

class Products extends Component {
  static navigationOptions = {
    tabBarLabel: 'Products',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.productIcon}
        style={[styles.icon, { tintColor }]}
      />
    ),
  }

  componentDidMount() {
    this.props.resetNewProduct()
  }

  render() {
    const { isLoading, navigation } = this.props
    if(isLoading) {
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
            <Text style={styles.subtitle}>Select a product to add to cart</Text>
          </View>
        </View>
        <ProductsList navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = ({ user, products }) =>
({
  isLoading: products.isLoading,
})

const mapDispatchToProps = dispatch =>
({
  resetNewProduct: () => dispatch(resetNewProduct()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
