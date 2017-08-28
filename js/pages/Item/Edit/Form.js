import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import TextField from 'components/TextField'

import styles from './Styles'

const EditItemField = ({ name, autoFocus, label, multiline, lines, style, inputStyle, ...rest }) =>
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

const EditItemForm = ({ handleSubmit }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <EditItemField name='name' label='Name' autoFocus lines={1} autoCapitalize='words' />
    <EditItemField name='description' label='Description' multiline lines={4} style={{ height: 200, borderBottomWidth: 0 }} inputStyle={{ borderBottomWidth: 0 }} autoCapitalize='sentences' borderBottomWidth={0} />
  </View>

const ConnectedEditItemForm = reduxForm({
  form: 'editItem'
})(EditItemForm)

const mapStateToProps = ({ items }) =>
  ({
    initialValues: items.activeItem
  })

export default connect(mapStateToProps)(ConnectedEditItemForm)
