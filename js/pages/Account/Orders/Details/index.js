import React, { Component } from 'react'
import {
  InteractionManager,
  TouchableWithoutFeedback,
  Platform,
  Image,
  ListView,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { length } from 'ramda'
import QRCode from 'react-native-qrcode-svg'

import Header from 'components/Header'
import Text from 'components/BitKitText'
import Loader from 'components/Loader'

import { Images, Metrics } from 'themes'

import OrderDetailsList from './List'
import styles from './Styles'

class OrderDetails extends Component {
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
    const { user, navigation, order, products } = this.props
    if(this.state.renderPlaceholderOnly || order.isLoading) {
      return <Loader />
    }
    if(products.getRowCount() <= 0) {
      return <Text>Woops! Try again</Text>
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
          center={<Header.Text>Order Details</Header.Text>} />
          <OrderDetailsList products={products} />
      </View>
    )
  }
}

const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })

const mapStateToProps = ({ user, orders }) =>
({
  user,
  order: orders.activeOrder,
  products: dataSource.cloneWithRows(orders.activeOrder.products),
})

export default connect(mapStateToProps)(OrderDetails)
