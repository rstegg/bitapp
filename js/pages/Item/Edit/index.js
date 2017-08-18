import React, { Component } from 'react'
import { InteractionManager, TouchableWithoutFeedback, Platform, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import ImagePicker from 'react-native-image-picker'

import Header from 'components/Header'
import ErrorMessage from 'components/ErrorMessage'
import TextField from 'components/TextField'
import Text from 'components/BitKitText'
import SearchBar from 'components/SearchBar'
import Loader from 'components/Loader'

import { Images, Metrics } from 'themes'
import IonIcon from 'react-native-vector-icons/Ionicons'

import CreateItemForm from './Form'
import styles from './Styles'

import { uploadActiveItemImage, removeActiveItemImage, editItem } from 'actions/items'

class CreateItem extends Component {
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

  _handleImageBtnPress() {
    const { item, user, removeActiveItemImage, uploadActiveItemImage } = this.props
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      customButtons: item.image ? {
        'Remove': 'remove'
      } : null,
    }

    ImagePicker.showImagePicker(options, response => {
      if(response.customButton === 'remove') {
        removeActiveItemImage(item, user)
      } else if(!response.didCancel && !response.error) {
        let source
        if (Platform.OS === 'ios') {
          source = response.uri.replace('file://', '')
        } else {
          source = response.uri
        }
        uploadActiveItemImage(source, this.props.user)
      }
    })
  }

  focusNextField(nextField) {
    this.refs[nextField].focus()
  }
  render() {
    const { user, item, editItem, saveItem, isLoading, navigation } = this.props
    if(this.state.renderPlaceholderOnly) {
      return <Loader />
    }
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack(null)} />}
          center={<Header.Logo />}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveItem()} />} />

        <CreateItemForm onSubmit={values => editItem({...values, id: item.id, image: item.image}, user)} />

        <View style={{flexGrow: 1, alignItems: 'center', justifyContent: 'flex-start'}}>

          <TouchableWithoutFeedback onPress={() => this._handleImageBtnPress()}>
            {
              item.image ?
                <Image style={styles.image} source={item.image} resizeMode='contain' />
                :
                <View style={styles.addImage}>
                  <IonIcon name='md-image' style={{color: '#AAA', fontSize: 160}} />
                  <Text style={{textAlign: 'center', color: '#AAA', fontSize: 24, marginTop: -30,}}>Add a Photo</Text>
                </View>
            }
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ user, items }) =>
({
  errors: items.activeItem.errors,
  isLoading: items.activeItem.isLoading,
  isImageLoading: items.activeItem.isImageLoading,
  item: items.activeItem,
  user
})

const mapDispatchToProps = dispatch =>
({
  saveItem: () => dispatch(submit('editItem')),
  editItem: (item, user) => dispatch(editItem(item, user)),
  uploadActiveItemImage: (image, user) => dispatch(uploadActiveItemImage(image, user)),
  removeActiveItemImage: (item, user) => dispatch(removeActiveItemImage(item, user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)
