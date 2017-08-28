export const resetNewProduct = () =>
  ({
    type: 'RESET_NEW_PRODUCT'
  })

export const viewItems = () =>
  ({
    type: 'VIEW_ITEMS'
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

export const searchProducts = (keyword, user) =>
  ({
    type: 'SEARCH_PRODUCTS',
    payload: {
      keyword,
      user
    }
  })

export const searchProductsSuccess = res =>
  ({
    type: 'SEARCH_PRODUCTS_SUCCESS',
    payload: {
      products: res.body.products
    }
  })

export const searchProductsFailure = errors =>
  ({
    type: 'SEARCH_PRODUCTS_FAILURE',
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

export const openEditProduct = product =>
  ({
    type: 'OPEN_EDIT_PRODUCT',
    payload: {
      product
    }
  })

export const editProduct = product =>
  ({
    type: 'EDIT_PRODUCT',
    payload: { product }
  })

export const editProductSuccess = product =>
  ({
    type: 'EDIT_PRODUCT_SUCCESS',
    payload: { product }
  })

export const editProductFailure = errors =>
  ({
    type: 'EDIT_PRODUCT_FAILURE',
    payload: { errors }
  })

export const deleteProduct = (product, user) =>
  ({
    type: 'DELETE_PRODUCT',
    payload: { product, user }
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

export const duplicateProduct = (product, item, user) =>
  ({
    type: 'DUPLICATE_PRODUCT',
    payload: {
      product,
      item,
      user
    }
  })

export const duplicateProductSuccess = res =>
  ({
    type: 'DUPLICATE_PRODUCT_SUCCESS',
    payload: {
      product: res.body.product
    }
  })

export const duplicateProductFailure = errors =>
  ({
    type: 'DUPLICATE_PRODUCT_FAILURE',
    payload: { errors }
  })
