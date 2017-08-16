import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import HomeTabNav from './HomeTabNav'

// here is our redux-aware our smart component
const ReduxHomeTabNavigation = props => {
  const { dispatch, tab } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: tab
  })

  return <HomeTabNav navigation={navigation} />
}

const mapStateToProps = state => ({ tab: state.homeTab })

export default connect(mapStateToProps)(ReduxHomeTabNavigation)
