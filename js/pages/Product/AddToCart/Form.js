import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'

const CreateProductField = ({ name, autoFocus, label, ...rest }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      label={label}
      {...rest}
      style={styles.textInput} />
  </View>

const AddToCartForm = ({ handleSubmit, product }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <CreateProductField name='quantity' label='Quantity' suffix={`× $${product.unitPrice}`} />
  </View>

export default reduxForm({
  form: 'addToCart'
})(AddToCartForm)
