import React, { Component } from 'react'
import {
  ActionSheetIOS,
  Alert,
  Image,
  ListView,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { length } from 'ramda'

import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { fetchProducts, setActiveProduct, openEditProduct, duplicateProduct, deleteProduct, viewItems } from 'actions/products'

import { Images } from 'themes'

import ListRow from './ListRow'
import styles from './Styles'

const OPTIONS = [
  'Edit',
  'Duplicate',
  'Delete',
  'Cancel',
]
const EDIT_INDEX = 0
const DUPLICATE_INDEX = 1
const DELETE_INDEX = 2
const CANCEL_INDEX = 3

class List extends Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.user)
  }

  selectProduct(product) {
    this.props.setActiveProduct(product)
    this.props.navigation.navigate('AddToCartScreen')
  }

  selectOptions(product) {
    const { user, duplicateProduct, deleteProduct, openEditProduct } = this.props
    ActionSheetIOS.showActionSheetWithOptions({
      options: OPTIONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DELETE_INDEX,
    },
    (buttonIndex) => {
      switch(buttonIndex) {
        case DUPLICATE_INDEX:
          this.props.duplicateProduct(product, product.item, user)
          break
        case DELETE_INDEX:
          this.props.deleteProduct(product, user)
          break
        case EDIT_INDEX:
          this.props.openEditProduct(product)
          break
      }
    })
  }

  renderIntro() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateItemScreen')} style={styles.intro}>
        <View>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
              You don&rsquo;t have
            </Text>
            <Text style={styles.introText}>
              any products
            </Text>
            <Image source={Images.faq} style={styles.introImage} resizeMode='contain' />
          </View>
          <View style={styles.introContent}>
            <Text style={styles.introDescription}>
              Click here to start an item
            </Text>
            <Image source={Images.chevronRight} style={styles.arrow} resizeMode='contain' />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderIntroWithItems() {
    return (
      <TouchableOpacity onPress={() => this.props.viewItems()} style={styles.intro}>
        <View>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
              You don&rsquo;t have
            </Text>
            <Text style={styles.introText}>
              any products
            </Text>
            <Image source={Images.faq} style={styles.introImage} resizeMode='contain' />
          </View>
          <View style={styles.introContent}>
            <Text style={styles.introDescription}>
              View your items
            </Text>
            <Image source={Images.chevronRight} style={styles.arrow} resizeMode='contain' />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderRow(product) {
    return <ListRow
            key={product.id}
            product={product}
            onSelect={() => this.selectProduct(product)}
            onOptionsBtnPress={() => this.selectOptions(product)} />
  }

  renderList() {
    return <ListView key='products-list'
              style={styles.list}
              dataSource={this.props.products}
              renderRow={this.renderRow.bind(this)}
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false}
              renderSeparator={() => <View style={styles.divider}></View>} />
  }

  render() {
    let content
    if(this.props.isLoading) {
      content = <Loader />
    } else if(this.props.isDuplicateLoading) {
      content = <View style={{flexGrow: 1,}}>
                  <Text style={styles.duplicateLoading}>Duplicating product...</Text>
                  <Loader />
                </View>
    } else if(this.props.products.getRowCount() > 0) {
      content = this.renderList()
    } else if(length(this.props.items)) {
      content = this.renderIntroWithItems()
    } else {
      content = this.renderIntro()
    }

    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ products, items, user }) =>
({
  isLoading: products.productsList.isLoading,
  isDuplicateLoading: products.duplicateProduct.isLoading,
  products: dataSource.cloneWithRows(products.productsList.products),
  items: items.itemsList.items,
  user
})

const mapDispatchToProps = dispatch =>
({
  fetchProducts: user => dispatch(fetchProducts(user)),
  setActiveProduct: product => dispatch(setActiveProduct(product)),
  openEditProduct: product => dispatch(openEditProduct(product)),
  deleteProduct: (product, user) => {
    Alert.alert(product.name, 'Are you sure you want to delete this product?', [
      { text: 'Yes', onPress: () => dispatch(deleteProduct(product, user)) },
      { text: 'No' },
    ])
  },
  duplicateProduct: (product, item, user) => dispatch(duplicateProduct(product, item, user)),
  viewItems: () => dispatch(viewItems()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
