import React from 'react'
import { Platform, View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import ImagePicker from 'react-native-image-picker'

import { onCreateItemSubmit } from 'actions/items'

import styles from './Styles'

const CreateItemField = ({ name, autoFocus, label, multiline }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      name={name}
      autoFocus={autoFocus}
      numberofLines={1}
      autoCapitalize='none'
      label={label}
      multiline={multiline}
      style={styles.textInput} />
  </View>

const CreateItemForm = ({ handleSubmit, submitting }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <CreateItemField name='name' label='Name' autoFocus />
    <CreateItemField name='description' label='Description' multiline />
  </View>

export default reduxForm({
  form: 'createItem'
})(CreateItemForm)
