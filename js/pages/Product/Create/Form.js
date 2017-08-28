import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import DropdownPicker from 'components/Dropdown'

import styles from './Styles'

const unitTypes = [
  { value: 'unit',   label: 'Unit'   },
  { value: 'grams',  label: 'Grams'  },
  { value: 'oz',     label: 'Ounces' }
]

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

const UnitPicker = ({ name, defaultValue, label }) =>
  <View style={styles.inputGroup}>
    <Field
      component={DropdownPicker}
      name={name}
      label={label}
      defaultValue={defaultValue}
      options={unitTypes}
      textStyle={{ fontSize: 18, color: '#666' }}
      labelStyle={{ fontSize: 12, color: '#ccc' }} />
  </View>

const CreateProductForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <UnitPicker name='unit' label='Unit Type' defaultValue='unit' />
    <CreateProductField name='unitPrice' label='Price per unit' prefix='$' />
  </View>

export default reduxForm({
  form: 'createProduct'
})(CreateProductForm)
