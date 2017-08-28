import React, { Component } from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { submit, formValueSelector } from 'redux-form'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import AddToCartForm from './Form'
import ItemView from './ItemView'
import styles from './Styles'

import { addToCart } from 'actions/checkout'

class AddToCart extends Component {
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

  render() {
    const { product, quantity, addToCart, saveToCart, isLoading, navigation } = this.props
    if (!product) {
      navigation.navigate('HomeScreen')
    }
    if (this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveToCart()} />} />
        <ItemView product={product} />
        <AddToCartForm product={product} onSubmit={values => addToCart({ ...product, ...values })} />
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceLabel}>Total: </Text>
          <Text style={styles.totalPrice}>${quantity * product.unitPrice || 0}</Text>
        </View>
      </View>
    )
  }
}

const selector = formValueSelector('addToCart')

const mapStateToProps = ({ products, ...state }) =>
  ({
    product: products.activeProduct,
    quantity: selector(state, 'quantity')
  })

const mapDispatchToProps = dispatch =>
  ({
    saveToCart: () => dispatch(submit('addToCart')),
    addToCart: product => dispatch(addToCart(product))
  })

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
