import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Header from 'components/Header'
import Loader from 'components/Loader'

import EditProductForm from './Form'
import ItemView from './ItemView'
import styles from './Styles'

import { editProduct } from 'actions/products'

class EditProduct extends Component {
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
    const { user, product, editProduct, saveProduct, isLoading, navigation } = this.props
    if (this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveProduct()} />} />
        <ItemView item={product.item} />
        <EditProductForm onSubmit={values => editProduct({ ...values, id: product.id, unit: product.unit || 'unit' }, user)} />
      </View>
    )
  }
}

const mapStateToProps = ({ user, products }) =>
  ({
    error: products.activeProduct.error,
    isLoading: products.activeProduct.isLoading,
    product: products.activeProduct,
    user
  })

const mapDispatchToProps = dispatch =>
  ({
    saveProduct: () => dispatch(submit('editProduct')),
    editProduct: (product, user) => dispatch(editProduct(product, user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
