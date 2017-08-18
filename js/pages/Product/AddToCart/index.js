import React, { Component } from 'react'
import { InteractionManager, TouchableWithoutFeedback, Platform, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit, formValueSelector } from 'redux-form'
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
     this.setState({renderPlaceholderOnly: false})
    })
  }

  selectOptions(product) {
    ActionSheetIOS.showActionSheetWithOptions({
      options: OPTIONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DELETE_INDEX,
    },
    (buttonIndex) => {
      switch(buttonIndex) {
        case DUPLICATE_INDEX:
          this.props.duplicateItem(product)
          break
        case DELETE_INDEX:
          this.props.deleteItem(product)
          break
        case EDIT_INDEX:
          this.props.setActiveItem(product)
          this.props.navigation.navigate('EditItem')
          break
      }
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { user, product, quantity, addToCart, saveToCart, isLoading, navigation } = this.props
    if(!product) {
      navigation.navigate('HomeScreen')
    }
    if(this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveToCart()} />} />
          <ItemView item={product.item} onOptionsBtnPress={() => this.selectOptions(product.item)} />
          <View style={styles.unitPriceContainer}>
            <Text style={styles.unitPrice}>${product.unitPrice} per {product.unit}</Text>
          </View>
          <AddToCartForm onSubmit={values => addToCart({...product, ...values})} />
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceLabel}>Total: </Text><Text style={styles.totalPrice}>${quantity * product.unitPrice || 0}</Text>
          </View>
      </View>
    )
  }
}

const selector = formValueSelector('addToCart')

const mapStateToProps = ({ user, products, checkout, ...state }) =>
({
  product: products.activeProduct,
  user,
  quantity: selector(state, 'quantity')
})

const mapDispatchToProps = dispatch =>
({
  saveToCart: () => dispatch(submit('addToCart')),
  addToCart: product => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
