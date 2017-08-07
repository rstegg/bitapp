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
      style={this.props.style || styles.spinner} color={this.props.color || Colors.cloud}/>
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    bottom: Metrics.ScreenHeight / 2,
    left: Metrics.ScreenWidth / 2 - 10,
  },
})
