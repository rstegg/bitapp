import React, { Component } from 'react'
import { ActionSheetIOS, InteractionManager, TouchableWithoutFeedback, Platform, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { NavigationActions } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'
import SearchBar from 'components/SearchBar'
import Loader from 'components/Loader'

import { Images, Metrics } from 'themes'
import IonIcon from 'react-native-vector-icons/Ionicons'

import CreateProductForm from './Form'
import ItemView from './ItemView'
import styles from './Styles'

import { createProduct } from 'actions/products'

class CreateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderPlaceholderOnly: true,
    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
     this.setState({renderPlaceholderOnly: false})
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { user, item, product, createProduct, saveProduct, isLoading, navigation } = this.props
    if(!item) {
      navigation.goBack()
    }
    if(this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveProduct()} />} />
          <ItemView item={item} />
          <CreateProductForm onSubmit={product => createProduct({...product, unit: product.unit || 'unit'}, item, user)} />
      </View>
    )
  }
}

const mapStateToProps = ({ user, items, products }) =>
({
  errors: products.newProduct.errors,
  isLoading: products.newProduct.isLoading,
  product: products.newProduct,
  item: items.activeItem,
  user
})

const mapDispatchToProps = dispatch =>
({
  saveProduct: () => dispatch(submit('createProduct')),
  createProduct: (product, item, user) => dispatch(createProduct(product, item, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
