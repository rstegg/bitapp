import { StyleSheet } from 'react-native'

import { BaseStyles, Colors, Metrics } from 'themes'

export default StyleSheet.create({
  ...BaseStyles.screen,
  container: {
    flexGrow: 1,
  },
  list: {
    flexGrow: 1
  },
  duplicateLoading: {
    position: 'absolute',
    left: Metrics.screenWidth/4,
    marginTop: 40,
    fontSize: 24,
  },
  intro: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },
  introImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  introTextContainer: {
    marginBottom: Metrics.screenHeight / 5,
    alignItems: 'center',
  },
  introText: {
    color: Colors.darkGrey,
    fontSize: 24,
  },
  introContent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  introDescription: {
    fontSize: 18,
    color: Colors.orange,
    textAlign: 'center',
  },
  arrow: {
    height: 25,
  }

})
