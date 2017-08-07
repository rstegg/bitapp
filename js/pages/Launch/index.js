import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from 'themes'

const signup = () => {}
const login = () => {}

// Styles
import styles from './Styles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.launchContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignupScreen')}>
              <Image source={Images.signupButton} style={styles.buttonImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Image source={Images.loginButton} style={styles.buttonImage}  />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
