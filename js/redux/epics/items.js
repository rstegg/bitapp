import { combineEpics } from 'redux-observable'
import {
  fetchItemsSuccess,
  createItemSuccess,
  editItemSuccess,
  deleteItemSuccess,
  uploadItemImageSuccess,
  uploadActiveItemImageSuccess
} from 'actions/items'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  fetchItems: ({ user }) =>
    get('items', user.token),
  createItem: ({ item, user }) =>
    post('items', { item }, user.token),
  editItem: ({ item, user }) =>
    put(`items/${item.id}`, { item }, user.token),
  deleteItem: ({ itemId, user }) =>
    remove(`items/${itemId}`, user.token),
  uploadItemImage: ({ image, user }) =>
    imagePost('image/item', image, user.token),
  uploadActiveItemImage: ({ image, itemId, user }) =>
    imagePost(`image/item/${itemId}`, image, user.token),
}

const fetchItems = action$ =>
  action$.ofType('FETCH_ITEMS')
    .mergeMap(action =>
      api.fetchItems(action.payload)
        .map(fetchItemsSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_ITEMS_FAILURE',
          payload: { error }
        }))
      )

const createItem = action$ =>
  action$.ofType('CREATE_ITEM')
    .mergeMap(action =>
      api.createItem(action.payload)
        .map(createItemSuccess)
        .catch(error => Observable.of({
          type: 'CREATE_ITEM_FAILURE',
          payload: { error }
        }))
      )

const editItem = action$ =>
  action$.ofType('EDIT_ITEM')
    .mergeMap(action =>
      api.editItem(action.payload)
        .map(editItemSuccess)
        .catch(error => Observable.of({
          type: 'EDIT_ITEM_FAILURE',
          payload: { error }
        }))
      )

const deleteItem = action$ =>
  action$.ofType('DELETE_ITEM')
    .mergeMap(action =>
      api.deleteItem(action.payload)
        .map(deleteItemSuccess)
        .catch(error => Observable.of({
          type: 'DELETE_ITEM_FAILURE',
          payload: { error }
        }))
      )

const uploadItemImage = action$ =>
  action$.ofType('UPLOAD_ITEM_IMAGE')
    .mergeMap(action =>
      api.uploadItemImage(action.payload)
        .map(uploadItemImageSuccess)
        .catch(error => Observable.of({
          type: 'UPLOAD_ITEM_IMAGE_FAILURE',
          payload: { error }
        }))
      )

const uploadActiveItemImage = action$ =>
  action$.ofType('UPLOAD_EDIT_ITEM_IMAGE')
    .mergeMap(action =>
      api.uploadActiveItemImage(action.payload)
        .map(uploadActiveItemImageSuccess)
        .catch(error => Observable.of({
          type: 'UPLOAD_EDIT_ITEM_IMAGE_FAILURE',
          payload: { error }
        }))
      )

export default combineEpics(
  fetchItems,
  createItem,
  editItem,
  deleteItem,
  uploadItemImage,
  uploadActiveItemImage
)
