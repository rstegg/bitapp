import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from 'themes'
import { NavigationActions } from 'react-navigation'
import styles from './Styles'

const navigateToHome = navigation =>
  navigation.dispatch(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen' })
      ]
    })
  )

class LaunchScreen extends Component {
  componentWillMount() {
    const { user, navigation } = this.props
    if(user.isAuthenticated) {
      navigateToHome(navigation)
    }
  }
  componentWillUpdate(nextProps) {
    const { user, navigation } = nextProps
    if(user.isAuthenticated) {
      navigateToHome(navigation)
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.launchContainer}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginScreen')}>
              <Image source={Images.loginButton} style={styles.buttonImage}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignupPhoneScreen')}>
              <Image source={Images.signupButton} style={styles.buttonImage} />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const mapStateToProps = ({ user }) =>
({
  user
})

export default connect(mapStateToProps)(LaunchScreen)
