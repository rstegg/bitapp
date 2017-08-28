import React, { Component } from 'react'
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import ImagePicker from 'react-native-image-picker'
import DropdownAlert from 'components/DropdownAlert'

import { editProfile, editProfileImage, resetUserUpdate } from 'actions/user'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Colors, Metrics, Images } from 'themes'

import Text from 'components/BitKitText'
import Header from 'components/Header'
import ScrollView from 'components/ScrollView'

import AccountProfileForm from './Form'
import styles from './Styles'

class Edit extends Component {

  componentWillUpdate(nextProps) {
    if (nextProps.user.isUpdated) {
      this.props.resetUserUpdate()
      this.dropdownSuccess.alertWithType('info', 'Success', 'Profile editd.')
    }
  }

  _handleImageClick() {
    const { user } = this.props
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        let source
        if (Platform.OS === 'ios') {
          source = response.uri.replace('file://', '')
        } else {
          source = response.uri
        }
        this.props.editProfileImage(source, user)
      }
    })
  }

  _renderImageIfExists(image) {
    let renderedImage
    if (image && image.url) {
      renderedImage = <Image
        key={image.url}
        style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', }}
        resizeMode='cover'
        source={{ uri: image.url }} />
    } else {
      renderedImage =  <Image
        style={{ width: 100, height: 100, alignSelf: 'center', }}
        resizeMode='contain'
        source={Images.profilePlaceholder} />
    }
    return renderedImage
  }

  render() {
    const { user, navigation, isLoading, editProfile, saveUser } = this.props
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => navigation.goBack()} />}
          center={<Header.Text>Profile</Header.Text>}
          right={<Header.TextButton text='Save' isLoading={isLoading} onPress={() => isLoading ? null : saveUser()}/>}
        />

        <ScrollView style={{ flexGrow: 1, }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 25 }}>
            <TouchableOpacity onPress={() => this._handleImageClick()}>
              {this._renderImageIfExists(user.image)}
            </TouchableOpacity>
            <View style={{ position: 'absolute', left: Metrics.screenWidth / 2 + 25, bottom: 35, }}>
              <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.teal, borderRadius: 12, }}>
                <FontAwesome name='camera' size={15} style={{ color: 'white', backgroundColor: 'transparent' }} />
              </View>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text>ACCOUNT DETAILS</Text>
          </View>

          <AccountProfileForm onSubmit={values => editProfile({ ...values, image: user.image || '' })} />

        </ScrollView>
        <DropdownAlert ref={ref => this.dropdownSuccess = ref} />
      </View>
    )
  }
}

const mapStateToProps = ({ user }) =>
  ({
    user
  })

const mapDispatchToProps = dispatch =>
  ({
    saveUser: () => dispatch(submit('accountProfile')),
    editProfile: user => dispatch(editProfile(user)),
    editProfileImage: (source, user) => dispatch(editProfileImage(source, user)),
    resetUserUpdate: () => dispatch(resetUserUpdate()),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
