import React from 'react'
import Text from 'components/BitKitText'
import styles from './Styles'

const ErrorMessage = ({ error }) =>
  error ? <Text style={styles.errorMessage}>{error}</Text>
    : null

export default ErrorMessage
