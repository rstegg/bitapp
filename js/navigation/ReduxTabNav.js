import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import TabNav from './TabNav'

// here is our redux-aware our smart component
const ReduxTabNavigation = props => {
  const { dispatch, tab } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: tab
  })

  return <TabNav navigation={navigation} />
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(ReduxTabNavigation)
