export const resetNewProduct = () =>
({
  type: 'RESET_NEW_PRODUCT'
})

export const fetchProducts = user =>
({
  type: 'FETCH_PRODUCTS',
  payload: {
    user
  }
})

export const fetchProductsSuccess = res =>
({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: {
    products: res.body.products
  }
})

export const fetchProductsFailure = errors =>
({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: {
    errors
  }
})

export const createProduct = (product, item, user) =>
({
  type: 'CREATE_PRODUCT',
  payload: {
    product,
    item,
    user
  }
})

export const createProductSuccess = res =>
({
  type: 'CREATE_PRODUCT_SUCCESS',
  payload: {
    product: res.body.product
  }
})

export const createProductFailure = errors =>
({
  type: 'CREATE_PRODUCT_FAILURE',
  payload: {
    errors
  }
})

export const setActiveProduct = product =>
({
  type: 'SET_ACTIVE_PRODUCT',
  payload: {
    product
  }
})

export const updateProduct = product =>
({
   type: 'UPDATE_PRODUCT',
   payload: { product }
})

export const updateProductSuccess = product =>
({
   type: 'UPDATE_PRODUCT_SUCCESS',
   payload: { product }
})

export const updateProductFailure = errors =>
({
   type: 'UPDATE_PRODUCT_FAILURE',
   payload: { errors }
})

export const deleteProduct = product =>
({
  type: 'DELETE_PRODUCT',
  payload: { product }
})

export const deleteProductSuccess = product =>
({
  type: 'DELETE_PRODUCT_SUCCESS',
  payload: { product }
})

export const deleteProductFailure = errors =>
({
  type: 'DELETE_PRODUCT_FAILURE',
  payload: { errors }
})

export const duplicateProduct = product =>
({
  type: 'DUPLICATE_PRODUCT',
  payload: { product }
})

export const duplicateProductSuccess = product =>
({
  type: 'DUPLICATE_PRODUCT_SUCCESS',
  payload: { product }
})

export const duplicateProductFailure = errors =>
({
  type: 'DUPLICATE_PRODUCT_FAILURE',
  payload: { errors }
})
