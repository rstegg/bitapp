import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'

const CreateItemField = ({ name, autoFocus, label, multiline, lines, style, inputStyle, ...rest }) =>
  <View style={[ styles.inputGroup, style ]}>
    <Field
      component={TextField}
      name={name}
      {...rest}
      autoFocus={autoFocus}
      numberofLines={lines}
      label={label}
      style={style}
      multiline={multiline}
      containerStyle={inputStyle}
      underlineColor='red' />
  </View>

const CreateItemForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <CreateItemField name='name' label='Name' autoFocus lines={1} autoCapitalize='words' />
    <CreateItemField name='description' label='Description' multiline lines={4} style={{ height: 200, borderBottomWidth: 0 }} inputStyle={{ borderBottomWidth: 0 }} autoCapitalize='sentences' borderBottomWidth={0} />
  </View>

export default reduxForm({
  form: 'createItem'
})(CreateItemForm)
