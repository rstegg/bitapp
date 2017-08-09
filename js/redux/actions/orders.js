export const onCheckoutSubmit = (cart, user) =>
({
  type: 'ON_CHECKOUT_SUBMIT',
  payload: {
    cart,
    user
  }
})

export const onCheckoutSuccess = res =>
({
  type: 'ON_CHECKOUT_SUCCESS'
})

export const onCheckoutFailure = res =>
({
  type: 'ON_CHECKOUT_FAILURE'
})

export const productAddToCart = product =>
({
  type: 'PRODUCT_ADD_TO_CART',
  payload: {
    product
  }
})

export const productRemoveFromCart = product =>
({
  type: 'PRODUCT_REMOVE_FROM_CART',
  payload: {
    product
  }
})

export const productEditOnCart = (productId, product) =>
({
  type: 'PRODUCT_EDIT_ON_CART',
  payload: {
    productId,
    product
  }
})
