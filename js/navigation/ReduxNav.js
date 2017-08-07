import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PrimaryNav from './PrimaryNav'

// here is our redux-aware our smart component
const ReduxNavigation = props => {
  const { dispatch, nav } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <PrimaryNav navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })

export default connect(mapStateToProps)(ReduxNavigation)
