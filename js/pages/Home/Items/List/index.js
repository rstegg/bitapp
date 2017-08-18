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

import { fetchItems, setActiveItem, duplicateItem, deleteItem } from 'actions/items'

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
    this.props.fetchItems(this.props.user)
  }

  selectItem(item) {
    this.props.setActiveItem(item)
    this.props.navigation.navigate('CreateProductScreen')
  }

  selectOptions(item) {
    ActionSheetIOS.showActionSheetWithOptions({
      options: OPTIONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DELETE_INDEX,
    },
    (buttonIndex) => {
      switch(buttonIndex) {
        case DUPLICATE_INDEX:
          this.props.duplicateItem(item)
          break
        case DELETE_INDEX:
          this.props.deleteItem(item)
          break
        case EDIT_INDEX:
          this.props.setActiveItem(item)
          this.props.navigation.navigate('EditItem')
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
              any items
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

  renderRow(item) {
    return <ListRow
            key={item.id}
            item={item}
            onSelect={() => this.selectItem(item)}
            onOptionsBtnPress={() => this.selectOptions(item)} />
  }

  renderList() {
    return <ListView key='items-list'
              style={styles.list}
              dataSource={this.props.items}
              renderRow={this.renderRow.bind(this)}
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={false} />
  }

  render() {
    console.log(this.props.items);
    let content
    if(this.props.isLoading) {
      content = <Loader />
    } else if(this.props.isDuplicateLoading) {
      content = <View style={{flexGrow: 1,}}>
                  <Text style={styles.duplicateLoading}>Duplicating item...</Text>
                  <Loader />
                </View>
    } else if(this.props.items.getRowCount() > 0) {
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

const filterWithKeyword = (items, keyword) => !!keyword ? items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase())) : items

const mapStateToProps = ({ items, user }) =>
({
  isLoading: items.itemsList.isLoading,
  isDuplicateLoading: items.duplicateItem.isLoading,
  keyword: items.keyword,
  items: dataSource.cloneWithRows(filterWithKeyword(items.itemsList.items, items.keyword)),
  user
})

const mapDispatchToProps = dispatch =>
({
  fetchItems: user => dispatch(fetchItems(user)),
  setActiveItem: item => dispatch(setActiveItem(item)),
  deleteItem: item => {
    Alert.alert(item.name, 'Are you sure you want to delete this item?', [
      {text: 'Yes', onPress: () =>dispatch(deleteItem(item)) },
      {text: 'No'},
    ])
  },
  duplicateItem: item => dispatch(duplicateItem(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
