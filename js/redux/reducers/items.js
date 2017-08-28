const initialState = {
  itemsList: {
    items: [],
    isLoading: false,
    errors: {},
  },
  newItem: {
    isLoading: false,
    errors: {},
  },
  activeItem: {
    isLoading: false,
    errors: {},
  },
  duplicateItem: {
    isLoading: false,
    errors: {},
  },
  keyword: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'RESET_NEW_ITEM':
    return { ...state, newItem: initialState.newItem }

  case 'FETCH_ITEMS':
    return { ...state, itemsList: { isLoading: true, items: [] } }
  case 'FETCH_ITEMS_SUCCESS':
    return { ...state, itemsList: { isLoading: false, items: action.payload.items } }
  case 'FETCH_ITEMS_FAILURE':
    return { ...state, itemsList: { isLoading: false, items: [], errors: action.payload.errors } }

  case 'SEARCH_ITEMS':
    return { ...state, keyword: action.payload.keyword }
  case 'SEARCH_ITEMS_SUCCESS':
    return { ...state, itemsList: { isLoading: false, items: action.payload.items } }
  case 'SEARCH_ITEMS_FAILURE':
    return { ...state, itemsList: { ...state.itemsList, isLoading: false, errors: action.payload.errors } }

  case 'CLEAR_SEARCH_ITEMS':
    return { ...state, keyword: '' }

  case 'CREATE_ITEM':
    return { ...state, newItem: { ...state.item, isLoading: true, errors: { } } }
  case 'CREATE_ITEM_SUCCESS':
    return { ...state, newItem: { ...state.item, isLoading: false }, activeItem: action.payload.item }
  case 'CREATE_ITEM_FAILURE':
    return { ...state, newItem: { ...state.item, isLoading: false } }

  case 'DUPLICATE_ITEM':
    return { ...state, duplicateItem: {  isLoading: true } }

  case 'DUPLICATE_ITEM_SUCCESS':
    return { ...state, duplicateItem: {  isLoading: false, errors: { } } }
  case 'DUPLICATE_ITEM_FAILURE':
    return { ...state, duplicateItem: {  isLoading: false } }

  case 'OPEN_EDIT_ITEM':
  case 'SET_ACTIVE_ITEM':
    return { ...state, activeItem: action.payload.item }

  case 'EDIT_ITEM':
    return { ...state, activeItem: { ...state.item, isLoading: true, errors: { } } }
  case 'EDIT_ITEM_SUCCESS':
  case 'EDIT_ITEM_FAILURE':
    return { ...state, activeItem: { ...action.payload.item, isLoading: false } }

    /* new item image */
  case 'UPLOAD_NEW_ITEM_IMAGE':
    return { ...state, newItem: { ...state.newItem, isImageLoading: true } }
  case 'UPLOAD_NEW_ITEM_IMAGE_SUCCESS':
    return { ...state, newItem: { ...state.newItem, image: action.payload.image, isImageLoading: false } }
  case 'UPLOAD_NEW_ITEM_IMAGE_FAILURE':
    return { ...state, newItem: { ...state.newItem, isImageLoading: false } }
  case 'REMOVE_NEW_ITEM_IMAGE':
    return { ...state, newItem: { ...state.newItem, isImageLoading: true } }
  case 'REMOVE_NEW_ITEM_IMAGE_SUCCESS':
    return { ...state, newItem: { ...state.newItem, image: null, isImageLoading: false } }
  case 'REMOVE_NEW_ITEM_IMAGE_FAILURE':
    return { ...state, newItem: { ...state.newItem, isImageLoading: false } }
    /* edit item image */
  case 'UPLOAD_ACTIVE_ITEM_IMAGE':
    return { ...state, activeItem: { ...state.activeItem, isImageLoading: true } }
  case 'UPLOAD_ACTIVE_ITEM_IMAGE_SUCCESS':
    return { ...state, activeItem: { ...state.activeItem, image: action.payload.image, isImageLoading: false } }
  case 'UPLOAD_ACTIVE_ITEM_IMAGE_FAILURE':
    return { ...state, activeItem: { ...state.activeItem, isImageLoading: false } }
  case 'REMOVE_ACTIVE_ITEM_IMAGE':
    return { ...state, activeItem: { ...state.activeItem, isImageLoading: true } }
  case 'REMOVE_ACTIVE_ITEM_IMAGE_SUCCESS':
    return { ...state, activeItem: { ...state.activeItem, image: null, isImageLoading: false } }
  case 'REMOVE_ACTIVE_ITEM_IMAGE_FAILURE':
    return { ...state, activeItem: { ...state.activeItem, isImageLoading: false } }

  case 'DELETE_ITEM':
    return { ...state, itemsList: { isLoading: false, items: state.itemsList.items.filter(item => item.id !== action.payload.item.id) } }

  case 'LOGOUT':
    return initialState

  default:
    return state
  }
}
