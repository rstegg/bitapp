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

import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { fetchProducts, setActiveProduct, duplicateProduct, deleteProduct } from 'actions/products'

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
    this.props.navigation.navigate('ViewProduct')
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
          this.props.duplicateProduct(product)
          break
        case DELETE_INDEX:
          this.props.deleteProduct(product)
          break
        case EDIT_INDEX:
          this.props.setActiveProduct(product)
          this.props.navigation.navigate('EditProduct')
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
              keyboardShouldPersistTaps={true}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false} />
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

const mapStateToProps = ({ products, user }) =>
({
  isLoading: products.productsList.isLoading,
  isDuplicateLoading: products.duplicateProduct.isLoading,
  products: dataSource.cloneWithRows(products.productsList.products),
  user
})

const mapDispatchToProps = dispatch =>
({
  fetchProducts: user => dispatch(fetchProducts(user)),
  setActiveProduct: product => dispatch(setActiveProduct(product)),
  deleteProduct: product => {
    Alert.alert(product.name, 'Are you sure you want to delete this product?', [
      { text: 'Yes', onPress: () => dispatch(deleteProduct(product)) },
      { text: 'No' },
    ])
  },
  duplicateProduct: product => dispatch(duplicateProduct(product))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
