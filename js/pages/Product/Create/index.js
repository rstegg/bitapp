import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Loader from 'components/Loader'

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
      this.setState({ renderPlaceholderOnly: false })
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { user, item, createProduct, saveProduct, isLoading, navigation } = this.props
    if (!item) {
      navigation.goBack()
    }
    if (this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveProduct()} />} />
        <ItemView item={item} />
        <CreateProductForm onSubmit={product => createProduct({ ...product, unit: product.unit || 'unit' }, item, user)} />
      </View>
    )
  }
}

const mapStateToProps = ({ user, items, products }) =>
  ({
    error: products.newProduct.error,
    isLoading: products.newProduct.isLoading,
    item: items.activeItem,
    user
  })

const mapDispatchToProps = dispatch =>
  ({
    saveProduct: () => dispatch(submit('createProduct')),
    createProduct: (product, item, user) => dispatch(createProduct(product, item, user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
