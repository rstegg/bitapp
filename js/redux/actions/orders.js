export const addToCart = product =>
({
  type: 'ADD_TO_CART',
  payload: {
    product
  }
})

export const checkoutSubmit = (cart, user) =>
({
  type: 'CHECKOUT_SUBMIT',
  payload: {
    cart,
    user
  }
})

export const checkoutSuccess = res =>
({
  type: 'CHECKOUT_SUCCESS',
  payload: {
    transaction: res.body.transaction
  }
})

export const checkoutFailure = res =>
({
  type: 'CHECKOUT_FAILURE',
  payload: {
    error: res.body.error
  }
})

export const addProductToCart = product =>
({
  type: 'ADD_PRODUCT_TO_CART',
  payload: {
    product
  }
})

export const removeProductFromCart = product =>
({
  type: 'REMOVE_PRODUCT_FROM_CART',
  payload: {
    product
  }
})

export const editCartProduct = (productId, product) =>
({
  type: 'EDIT_CART_PRODUCT',
  payload: {
    productId,
    product
  }
})
