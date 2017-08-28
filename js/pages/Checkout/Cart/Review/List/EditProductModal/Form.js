import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from 'components/TextField'

import styles from './Styles'

const EditProductField = ({ name, autoFocus, keyboardType, label }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      autoComplete={false}
      keyboardType={keyboardType}
      label={label}
      style={styles.textInput} />
  </View>

const EditProductForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.editProductForm}>
    <EditProductField name='quantity' keyboardType='numeric' label='Quantity' autoFocus />
  </View>

const ConnectedEditProductForm = reduxForm({
  form: 'editCartProduct'
})(EditProductForm)

const mapStateToProps = ({ checkout }) =>
  ({
    initialValues: {
      quantity: checkout.cart.editing.quantity
    }
  })

export default connect(mapStateToProps)(ConnectedEditProductForm)
