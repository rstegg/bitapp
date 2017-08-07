import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StatusBar } from 'react-native'
import ReduxNav from 'navigation/ReduxNav'
import ReduxPersist from 'config/ReduxPersist'

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

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch =>
({
  startup: () => dispatch({ type: 'STARTUP' })
})

export default connect(null, mapDispatchToProps)(RootContainer)
