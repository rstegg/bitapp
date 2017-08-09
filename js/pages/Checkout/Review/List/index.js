import React, { Component } from 'react'
import {
  Alert,
  Image,
  ListView,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'

import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { productAddToCart, productRemoveFromCart } from 'actions/orders'

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
  renderIntro() {
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
        <View style={{flexGrow: 1}} />
      </View>
    )
  }

  renderRow(product) {
    return <ListRow
            key={product.id}
            product={product}
            onSelect={() => {}}
            onOptionsBtnPress={() => {}} />
  }

  renderList() {
    return <ListView key='items-list'
              style={styles.list}
              dataSource={this.props.items}
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
    } else if(this.props.cart.getRowCount() > 0) {
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

const mapStateToProps = ({ orders }) =>
({
  isLoading: orders.cart.isLoading,
  cart: dataSource.cloneWithRows(orders.cart.products),
})

const mapDispatchToProps = dispatch =>
({
  productRemoveFromCart: product => {
    Alert.alert(product.name, 'Are you sure you want to remove this product?', [
      { text: 'Yes', onPress: () => dispatch(productRemoveFromCart(product)) },
      { text: 'No' },
    ])
  }
})

export default connect(mapStateToProps)(List)
