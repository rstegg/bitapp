import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from 'components/TextField'
import Text from 'components/BitKitText'

import ImagePicker from 'react-native-image-picker'

import { onCreateItemSubmit } from 'actions/items'

import styles from './Styles'

const AccountProfileField = ({ name, autoFocus, autoCapitalize, label, style, inputStyle, ...rest }) =>
  <View style={styles.inputGroup}>
    <Field
      component={TextField}
      {...rest}
      name={name}
      autoFocus={autoFocus}
      autoCapitalize={autoCapitalize}
      label={label}
      style={style}
      containerStyle={inputStyle} />
  </View>

const ResetPasswordButton = ({ onPress }) =>
  <Text style={styles.forgot} onPress={onPress}>Change</Text>

const AccountProfileForm = ({ handleSubmit, submitting }) =>
  <View onSubmit={handleSubmit} style={styles.createForm}>
    <AccountProfileField name='name' label='Name to appear on orders' autoFocus autoCapitalize='words' />
    <AccountProfileField name='phone' label='Phone' keyboardType='phone-pad' />
    <View style={styles.inputGroup}>
      <TextField label='Password' secureTextEntry={true} disabled={true} value='**********' meta={{touched: false, error: false}} />
      <ResetPasswordButton onPress={() => {}} />
    </View>
  </View>

const ConnectedAccountProfileForm = reduxForm({
  form: 'accountProfile'
})(AccountProfileForm)

const mapStateToProps = ({ user }) =>
({
  initialValues: user
})

export default connect(mapStateToProps)(ConnectedAccountProfileForm)
