import React, { Component } from 'react'
import {
  Alert,
  ActionSheetIOS,
  Image,
  ListView,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'

import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { removeProductFromCart, openEditProductModal, closeEditProductModal } from 'actions/checkout'

import { Images } from 'themes'

import EditProductModal from './EditProductModal'
import ListRow from './ListRow'
import styles from './Styles'

const OPTIONS = [
  'Edit',
  'Delete',
  'Cancel',
]
const EDIT_INDEX = 0
const DELETE_INDEX = 1
const CANCEL_INDEX = 2

class List extends Component {
  renderIntro() {
    const { navigation } = this.props
    return (
      <View style={styles.intro}>
        <View style={styles.introTextContainer}>
          <Text style={styles.introText}>
            Your cart
          </Text>
          <Text style={styles.introText}>
            is empty!
          </Text>
          <Image source={Images.faq} style={styles.introImage} resizeMode='contain' />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View style={styles.introContent}>
            <Text style={styles.introDescription}>
              View Products
            </Text>
            <Image source={Images.close} style={styles.arrow} resizeMode='contain' />
          </View>
        </TouchableOpacity>
        <View style={{ flexGrow: 1 }} />
      </View>
    )
  }

  selectOptions(product) {
    ActionSheetIOS.showActionSheetWithOptions({
      options: OPTIONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DELETE_INDEX,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
      case DELETE_INDEX:
        this.props.removeProductFromCart(product)
        break
      case EDIT_INDEX:
        this.props.openEditProductModal(product)
        break
      }
    })
  }

  renderRow(product) {
    return <ListRow
      key={product.id}
      product={product}
      onOptionsBtnPress={() => this.selectOptions(product)} />
  }

  renderList() {
    return <ListView key='items-list'
      style={styles.list}
      dataSource={this.props.products}
      renderRow={this.renderRow.bind(this)}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='always'
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false} />
  }

  render() {
    let content
    if (this.props.isLoading) {
      content = <Loader />
    } else if (this.props.products.getRowCount() > 0) {
      content = this.renderList()
    } else {
      content = this.renderIntro()
    }

    return (
      <View style={styles.container}>
        {content}
        <EditProductModal closeModal={() => this.props.closeEditProductModal()} />
      </View>
    )
  }
}

const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ checkout }) =>
  ({
    isLoading: checkout.cart.isLoading,
    editProductOpen: checkout.cart.editProductOpen,
    products: dataSource.cloneWithRows(checkout.cart.products),
  })

const mapDispatchToProps = dispatch =>
  ({
    removeProductFromCart: product => {
      Alert.alert(product.name, 'Are you sure you want to remove this product?', [
        { text: 'Yes', onPress: () => dispatch(removeProductFromCart(product)) },
        { text: 'No' },
      ])
    },
    openEditProductModal: product => dispatch(openEditProductModal(product)),
    closeEditProductModal: () => dispatch(closeEditProductModal()),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
