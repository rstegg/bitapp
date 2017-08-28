import React, { Component } from 'react'
import {
  Linking,
  View,
  TouchableOpacity,
} from 'react-native'

import Text from 'components/BitKitText'
import Header from 'components/Header'

import styles from './Styles'

export default class Support extends Component {

  openFAQ() {
    Linking.openURL('https://rsteg.com/faqs')
      .catch(err => alert('An error occurred', err))
  }

  openEmail() {
    Linking.openURL('mailto:stegmannrd@gmail.com')
      .catch(err => alert('An error occurred', err))
  }

  openMessenger() {
    Linking.openURL('https://m.me/rstegg')
      .catch(err => alert('An error occurred', err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          left={<Header.BackButton text='Back' to={() => this.props.navigation.goBack()} />}
          center={<Header.Text>Support</Header.Text>} />

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.largeText}>Have Questions?</Text>
            <Text style={styles.smallText}>We&rsquo;d love to help. We&rsquo;re here</Text>
            <Text style={styles.smallText}>Monday-Friday, 9am-5pm (MT).</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.openFAQ()} style={styles.buttonFilled}>
              <Text style={{ color: 'white', textAlign: 'center', }}>Browse our FAQs</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.openEmail()} style={styles.buttonOutlined}>
              <Text style={{ color: '#2e8ba4', textAlign: 'center', }}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.openMessenger()} style={styles.buttonOutlined}>
              <Text style={{ color: '#2e8ba4', textAlign: 'center', }}>Facebook Messenger</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
}
