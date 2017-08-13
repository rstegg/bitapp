import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from 'themes'
import { NavigationActions } from 'react-navigation'
import styles from './Styles'

const LaunchScreen = ({ navigation }) =>
  <View style={styles.launchContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      <View style={styles.centered}>
        <Image source={Images.launch} style={styles.logo} />
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignupPhoneScreen')}>
          <Image source={Images.signupButton} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('LoginScreen')}>
          <Image source={Images.loginButton} style={styles.buttonImage}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'SignupSuccessScreen'})
          ]
        }))}>
          <Image source={Images.home} style={styles.buttonImage}  />
        </TouchableOpacity>
      </View>
  </View>

export default LaunchScreen
