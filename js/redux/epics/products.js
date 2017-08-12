import { combineEpics } from 'redux-observable'
import {
  fetchProductsSuccess,
  createProductSuccess,
  editProductSuccess,
  deleteProductSuccess,
  uploadProductImageSuccess,
  uploadActiveProductImageSuccess
} from 'actions/products'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  fetchProducts: ({ user }) =>
    get('products', user.token),
  createProduct: ({ product, user }) =>
    post('products', { product }, user.token),
  editProduct: ({ product, user }) =>
    put(`products/${product.id}`, { product }, user.token),
  deleteProduct: ({ productId, user }) =>
    remove(`products/${productId}`, user.token)
}

const fetchProducts = action$ =>
  action$.ofType('FETCH_PRODUCTS')
    .mergeMap(action =>
      api.fetchProducts(action.payload)
        .map(fetchProductsSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_PRODUCTS_FAILURE',
          payload: { error }
        }))
      )

const createProduct = action$ =>
  action$.ofType('CREATE_PRODUCT')
    .mergeMap(action =>
      api.createProduct(action.payload)
        .map(createProductSuccess)
        .catch(error => Observable.of({
          type: 'CREATE_PRODUCT_FAILURE',
          payload: { error }
        }))
      )

const editProduct = action$ =>
  action$.ofType('EDIT_PRODUCT')
    .mergeMap(action =>
      api.editProduct(action.payload)
        .map(editProductSuccess)
        .catch(error => Observable.of({
          type: 'EDIT_PRODUCT_FAILURE',
          payload: { error }
        }))
      )

const deleteProduct = action$ =>
  action$.ofType('DELETE_PRODUCT')
    .mergeMap(action =>
      api.deleteProduct(action.payload)
        .map(deleteProductSuccess)
        .catch(error => Observable.of({
          type: 'DELETE_PRODUCT_FAILURE',
          payload: { error }
        }))
      )

export default combineEpics(
  fetchProducts,
  createProduct,
  editProduct,
  deleteProduct
)
