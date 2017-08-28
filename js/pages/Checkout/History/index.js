import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Header from 'components/Header'
import Loader from 'components/Loader'
import Text from 'components/BitKitText'

import { Images } from 'themes'

import HistoryList from './List'
import styles from './Styles'

const navigateToHome = navigation => navigation.dispatch(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen' })
  ]
}))

class CheckoutHistory extends Component {
  static navigationOptions = {
    tabBarLabel: 'History',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.historyIcon}
        style={[ styles.icon, { tintColor } ]}
      />
    ),
  }

  render() {
    const { isLoading, navigation } = this.props
    if (isLoading) {
      return <Loader />
    }
    return (
      <View>
        <Header
          left={<Header.BackButton text='Back' to={() => navigateToHome(navigation)} />}
          center={<Header.Logo />} />
        <View style={styles.centered}>
          <Text style={styles.headerText}>Checkout History</Text>
        </View>
        <HistoryList navigation={navigation} />
      </View>
    )
  }
}


const mapStateToProps = ({ checkout }) =>
  ({
    isLoading: checkout.cart.isLoading
  })

export default connect(mapStateToProps)(CheckoutHistory)
