import React, { Component } from 'react'
import {
  ActionSheetIOS,
  Alert,
  Image,
  ListView,
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'

import Text from 'components/BitKitText'
import Header from 'components/Header'
import Loader from 'components/Loader'

import { fetchItems, setActiveItem, duplicateItem, deleteItem } from 'actions/items'

import { Images, Colors, Metrics } from 'themes'

import ListRow from './ListRow'

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
    this.props.fetchItems()
  }

  selectItem(item) {
    this.props.setActiveItem(item)
    this.props.navigation.navigate('ViewItem')
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
      <View style={styles.intro}>
        <View style={styles.introTextContainer}>
          <Text style={styles.introText}>
            You don&rsquo;t have
          </Text>
          <Text style={styles.introText}>
            any collections
          </Text>
          <Image source={Images.faq} style={{width: 100, height: 100, marginTop: 20,}} resizeMode='contain' />
        </View>
        <View style={styles.introContent}>
          <Text style={styles.introDescription}>
            Click here to start a collection
          </Text>
          <Image source={Images.close} style={styles.arrow} resizeMode='contain' />
        </View>
        <View style={{flexGrow: 1}} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  list: {
    flexGrow: 1,
    paddingTop: 10,
    marginHorizontal: 10,
  },
  duplicateLoading: {
    position: 'absolute',
    left: Metrics.screenWidth/4,
    marginTop: 40,
    fontSize: 24,
  },
  intro: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },
  introTextContainer: {
    marginBottom: Metrics.screenHeight / 5,
    alignItems: 'center',
  },
  introText: {
    color: Colors.darkGrey,
    fontSize: 24,
  },
  introContent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  introDescription: {
    fontSize: 18,
    color: Colors.orange,
    textAlign: 'center',
  },
  arrow: {
    height: 25,
  }

})

const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})

const mapStateToProps = ({ items }) =>
({
  isLoading: items.itemsList.isLoading,
  isDuplicateLoading: items.duplicateItem.isLoading,
  items: dataSource.cloneWithRows(items.itemsList.items),
})

const mapDispatchToProps = dispatch =>
({
  fetchItems: () => dispatch(fetchItems()),
  setActiveItem: (item) => dispatch(setActiveItem(item)),
  deleteItem: (item) => {
    Alert.alert(item.name, 'Are you sure you want to delete this item?', [
      {text: 'Yes', onPress: () => { dispatch(deleteItem(item)) } },
      {text: 'No'},
    ])
  },
  duplicateItem: (item) => dispatch(duplicateItem(item))
})

List = connect(mapStateToProps, mapDispatchToProps)(List)

export default List
