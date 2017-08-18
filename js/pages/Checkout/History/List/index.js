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

import { fetchCheckoutHistory, setActiveTransaction } from 'actions/checkout'

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
  componentWillMount() {
    this.props.fetchCheckoutHistory(this.props.user)
  }
  renderIntro() {
    return (
      <View style={styles.intro}>
        <View style={styles.introTextContainer}>
          <Text style={styles.introText}>
            You haven&rsquo;t made
          </Text>
          <Text style={styles.introText}>
            any transactions!
          </Text>
          <Image source={Images.faq} style={styles.introImage} resizeMode='contain' />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <View style={styles.introContent}>
            <Text style={styles.introDescription}>
              Sell a product
            </Text>
            <Image source={Images.close} style={styles.arrow} resizeMode='contain' />
          </View>
        </TouchableOpacity>
        <View style={{flexGrow: 1}} />
      </View>
    )
  }

  renderRow(transaction) {
    return <ListRow
            key={transaction.id}
            transaction={transaction}
            onSelect={() => this.props.setActiveTransaction(transaction)}
            onOptionsBtnPress={() => {}} />
  }

  renderList() {
    return <ListView key='items-list'
              style={styles.list}
              dataSource={this.props.history}
              renderRow={this.renderRow.bind(this)}
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false} />
  }

  render() {
    let content
    if(this.props.isLoading) {
      content = <Loader />
    } else if(this.props.history.getRowCount() > 0) {
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

const mapStateToProps = ({ checkout, user }) =>
({
  isLoading: checkout.history.isLoading,
  history: dataSource.cloneWithRows(checkout.history.list),
  user
})

const mapDispatchToProps = dispatch =>
({
  fetchCheckoutHistory: user => dispatch(fetchCheckoutHistory(user)),
  setActiveTransaction: transaction => dispatch(setActiveTransaction(transaction)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
