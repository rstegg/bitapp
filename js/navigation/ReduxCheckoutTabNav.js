import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import CheckoutTabNav from './CheckoutTabNav'

// here is our redux-aware our smart component
const ReduxCheckoutTabNavigation = props => {
  const { dispatch, tab } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: tab
  })

  return <CheckoutTabNav navigation={navigation} />
}

const mapStateToProps = state => ({ tab: state.checkoutTab })

export default connect(mapStateToProps)(ReduxCheckoutTabNavigation)
