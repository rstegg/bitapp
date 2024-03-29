import React, { PureComponent } from 'react'
import { View } from 'react-native'

import styles from './styles'

export default class Line extends PureComponent {
  // static propTypes = {
  //   type: PropTypes.oneOf(['solid', 'dotted', 'dashed']).isRequired,
  //   color: PropTypes.string.isRequired,
  // }

  render() {
    let { color: borderColor, type: borderStyle } = this.props

    let lineStyle = {
      borderColor,
      borderStyle,
    }

    return (
      <View style={[ styles.line, lineStyle ]} pointerEvents='none' />
    )
  }
}
