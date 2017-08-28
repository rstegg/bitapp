import React, { Component } from 'react'
import {
  Modal,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

import Text from 'components/BitKitText'

import EditProductForm from './Form'
import styles from './Styles'

import { editCartProduct } from 'actions/checkout'

class EditProductModal extends Component {
  render() {
    const { saveProduct, editCartProduct, closeModal, isOpen, product } = this.props
    return (
      <Modal visible={isOpen} transparent={true} animationType='slide' style={styles.container}>
        <TouchableOpacity onPress={() => closeModal()}>
          <View style={styles.overlay}></View>
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.modalControlBar}>
            <TouchableOpacity onPress={() => closeModal()}>
              <View style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => saveProduct()}>
              <View style={styles.saveButton}>
                <Text style={styles.saveText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
          <EditProductForm onSubmit={({ quantity }) => editCartProduct(product, quantity)} />
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = ({ checkout }) =>
  ({
    isOpen: checkout.cart.isEditing,
    product: checkout.cart.editing
  })

const mapDispatchToProps = dispatch =>
  ({
    saveProduct: () => dispatch(submit('editCartProduct')),
    editCartProduct: (product, quantity) => dispatch(editCartProduct(product, quantity)),
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal)
