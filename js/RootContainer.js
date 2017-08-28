import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'
import ReduxNav from 'navigation/ReduxNav'

// Styles
import styles from './RootStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
    //   this.props.startup()
    // }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNav />
      </View>
    )
  }
}

const mapStateToProps = ({ user }) =>
  ({
    user
  })

export default connect(mapStateToProps)(RootContainer)
