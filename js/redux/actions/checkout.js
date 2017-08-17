export const fetchCheckoutHistory = user =>
({
  type: 'FETCH_CHECKOUT_HISTORY',
  payload: {
    user
  }
})

export const fetchCheckoutHistorySuccess = res =>
({
  type: 'FETCH_CHECKOUT_HISTORY_SUCCESS',
  payload: {
    history: res.body.payments
  }
})

export const fetchCheckoutHistoryFailure = res =>
({
  type: 'FETCH_CHECKOUT_HISTORY_FAILURE',
  payload: {
    error: res.body.error || res
  }
})

export const addToCart = product =>
({
  type: 'ADD_TO_CART',
  payload: {
    product
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

export const checkoutSubmit = (products, user) =>
({
  type: 'CHECKOUT_SUBMIT',
  payload: {
    products,
    user
  }
})

export const checkoutSuccess = res =>
({
  type: 'CHECKOUT_SUCCESS',
  payload: {
    order: res.body.order
  }
})

export const checkoutFailure = res =>
({
  type: 'CHECKOUT_FAILURE',
  payload: {
    error: res.body.error
  }
})

export const currencySubmit = (currency, orderId, user) =>
({
  type: 'CURRENCY_SUBMIT',
  payload: {
    currency,
    orderId,
    user
  }
})

export const currencySuccess = res =>
({
  type: 'CURRENCY_SUCCESS',
  payload: {
    payment: res.body.payment
  }
})

export const currencyFailure = res =>
({
  type: 'CURRENCY_FAILURE',
  payload: {
    error: res.body.error
  }
})
