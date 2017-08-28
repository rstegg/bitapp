import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { Colors, Metrics } from 'themes'

export default class Loader extends Component {
  render() {
    return <Animatable.View
      ref='loader'
      animation='rotate'
      iterationCount='infinite'
      style={[ this.props.style || styles.fullScreenLoader, styles.spinner ]} color={this.props.color || Colors.cloud} />
  }
}

const styles = StyleSheet.create({
  spinner: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderTopWidth: 2,
    borderTopColor: Colors.bloodOrange,
    borderRightWidth: 2,
    borderRightColor: Colors.bloodOrange,
    backgroundColor: 'transparent',
  },
  fullScreenLoader: {
    position: 'absolute',
    bottom: Metrics.screenHeight / 2,
    left: Metrics.screenWidth / 2 - 25
  }
})
