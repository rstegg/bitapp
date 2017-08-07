export const resetNewItem = () =>
({
  type: 'RESET_NEW_ITEM'
})

export const fetchItems = user =>
({
  type: 'FETCH_ITEMS',
  payload: {
    user
  }
})

export const fetchItemsSuccess = res =>
({
  type: 'FETCH_ITEMS_SUCCESS',
  payload: {
    items: res.body.items
  }
})

export const fetchItemsFailure = errors =>
({
  type: 'FETCH_ITEMS_FAILURE',
  payload: {
    errors
  }
})

export const createItem = (item, user) =>
({
  type: 'CREATE_ITEM',
  payload: {
    item,
    user
  }
})

export const createItemSuccess = res =>
({
  type: 'CREATE_ITEM_SUCCESS',
  payload: {
    item: res.body.item
  }
})

export const createItemFailure = errors =>
({
  type: 'CREATE_ITEM_FAILURE',
  payload: {
    errors
  }
})

export const setActiveItem = (item, user) =>
({
  type: 'SET_ACTIVE_ITEM',
  payload: {
    item
  }
})

export const updateItem = (item, user) =>
({
   type: 'UPDATE_ITEM',
   payload: { item, user }
})

export const updateItemSuccess = res =>
({
   type: 'UPDATE_ITEM_SUCCESS',
   payload: { item: res.body.item }
})

export const updateItemFailure = errors =>
({
   type: 'UPDATE_ITEM_FAILURE',
   payload: { errors }
})

export const deleteItem = (item, user) =>
({
  type: 'DELETE_ITEM',
  payload: { item, user }
})

export const deleteItemSuccess = res =>
({
  type: 'DELETE_ITEM_SUCCESS',
  payload: { item: res.body.item }
})

export const deleteItemFailure = errors =>
({
  type: 'DELETE_ITEM_FAILURE',
  payload: { errors }
})

export const duplicateItem = (item, user) =>
({
  type: 'DUPLICATE_ITEM',
  payload: { item, user }
})

export const duplicateItemSuccess = res =>
({
  type: 'DUPLICATE_ITEM_SUCCESS',
  payload: { item: res.body.item }
})

export const duplicateItemFailure = errors =>
({
  type: 'DUPLICATE_ITEM_FAILURE',
  payload: { errors }
})

export const uploadNewItemImage = (image, user) =>
({
  type: 'UPLOAD_NEW_ITEM_IMAGE',
  payload: { image, user }
})

export const onUploadNewItemImageSuccess = res =>
({
  type: 'UPLOAD_NEW_ITEM_IMAGE_SUCCESS',
  payload: { image: res.body.image }
})

export const onUploadNewItemImageFailure = res =>
({
  type: 'UPLOAD_NEW_ITEM_IMAGE_FAILURE',
  payload: { errors: res.body.errors }
})

export const removeNewItemImage = (image, user) =>
({
  type: 'REMOVE_NEW_ITEM_IMAGE',
  payload: { image, user }
})

export const removeNewItemImageSuccess = () =>
({
  type: 'REMOVE_NEW_ITEM_IMAGE_SUCCESS'
})

export const removeNewItemImageFailure = () =>
({
  type: 'REMOVE_NEW_ITEM_IMAGE_FAILURE'
})

export const uploadActiveItemImage = (image, user) =>
({
  type: 'UPLOAD_ACTIVE_ITEM_IMAGE',
  payload: { image, user }
})

export const onUploadActiveItemImageSuccess = res =>
({
  type: 'UPLOAD_ACTIVE_ITEM_IMAGE_SUCCESS',
  payload: { image: res.body.image }
})

export const onUploadActiveItemImageFailure = res =>
({
  type: 'UPLOAD_ACTIVE_ITEM_IMAGE_FAILURE',
  payload: { errors: res.body.errors }
})

export const removeActiveItemImage = (image, user) =>
({
  type: 'REMOVE_ACTIVE_ITEM_IMAGE',
  payload: { image, user }
})

export const removeActiveItemImageSuccess = () =>
({
  type: 'REMOVE_ACTIVE_ITEM_IMAGE_SUCCESS'
})

export const removeActiveItemImageFailure = () =>
({
  type: 'REMOVE_ACTIVE_ITEM_IMAGE_FAILURE'
})
