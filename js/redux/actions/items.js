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

export const searchItems = (keyword, user) =>
  ({
    type: 'SEARCH_ITEMS',
    payload: {
      keyword,
      user
    }
  })

export const searchItemsSuccess = res =>
  ({
    type: 'SEARCH_ITEMS_SUCCESS',
    payload: {
      items: res.body.items
    }
  })

export const searchItemsFailure = errors =>
  ({
    type: 'SEARCH_ITEMS_FAILURE',
    payload: {
      errors
    }
  })

export const clearSearchItems = () =>
  ({
    type: 'CLEAR_SEARCH_ITEMS'
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

export const setActiveItem = item =>
  ({
    type: 'SET_ACTIVE_ITEM',
    payload: {
      item
    }
  })

export const openEditItem = item =>
  ({
    type: 'OPEN_EDIT_ITEM',
    payload: {
      item
    }
  })

export const editItem = (item, user) =>
  ({
    type: 'EDIT_ITEM',
    payload: {
      item,
      user
    }
  })

export const editItemSuccess = res =>
  ({
    type: 'EDIT_ITEM_SUCCESS',
    payload: { item: res.body.item }
  })

export const editItemFailure = errors =>
  ({
    type: 'EDIT_ITEM_FAILURE',
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
    payload: {
      item,
      user
    }
  })

export const duplicateItemSuccess = res =>
  ({
    type: 'DUPLICATE_ITEM_SUCCESS',
    payload: {
      item: res.body.item
    }
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

export const uploadNewItemImageSuccess = res =>
  ({
    type: 'UPLOAD_NEW_ITEM_IMAGE_SUCCESS',
    payload: { image: res.body.image }
  })

export const uploadNewItemImageFailure = res =>
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

export const uploadActiveItemImageSuccess = res =>
  ({
    type: 'UPLOAD_ACTIVE_ITEM_IMAGE_SUCCESS',
    payload: { image: res.body.image }
  })

export const uploadActiveItemImageFailure = res =>
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
