const initialState = {
  productsList: {
    products: [],
    isLoading: false,
    errors: {},
  },
  newProduct: {
    isLoading: false,
    errors: {},
  },
  activeProduct: {
    isLoading: false,
    errors: {},
  },
  duplicateProduct: {
    isLoading: false,
    errors: {},
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
  case 'CREATE_PRODUCT':
  case 'UPDATE_PRODUCT':
    return { ...state, currentProduct: { ...action.product, isLoading: true } }
  case 'CREATE_PRODUCT_SUCCESS':
  case 'UPDATE_PRODUCT_SUCCESS':
    return { ...state, currentProduct: { ...action.product, isLoading: false, isNew: false } }
  case 'CREATE_PRODUCT_ERROR':
  case 'UPDATE_PRODUCT_ERROR':
    return { ...state, currentProduct: { ...action.product, isLoading: false } }

  case 'FETCH_PRODUCTS':
    return {...state, productsList: {
        isLoading: true,
        products: []
      }
    }

  case 'FETCH_PRODUCTS_SUCCESS':
    return {...state, productsList: {
        isLoading: false,
        products: action.products,
      }
    }


  case 'FETCH_PRODUCTS_ERROR':
    return { ...state, productsList: { isLoading: false, products: state.productsList.products } }
  case 'RESET_CURRENT_PRODUCT':
    return { ...state, currentProduct: initialState.currentProduct }
  case 'SET_CURRENT_PRODUCT':
    return { ...state, currentProduct: action.product }
  case 'UPDATE_CURRENT_PRODUCT':
    return { ...state,
      currentProduct: { ...state.currentProduct, ...action.product }
    }

  case 'DELETE_PRODUCT':
    const { tabId, id } = action.product

    return { ...state, productsList: {
        isLoading: false,
        products: state.productsList[tabId].products.filter((product) => product.id != id)
      }
    }

  case 'CREATE_PRODUCT_IMAGE':
    return { ...state, currentProduct: { ...state.currentProduct, image: { isLoading: true } } }
  case 'CREATE_PRODUCT_IMAGE_SUCCESS':
    return { ...state, currentProduct: { ...state.currentProduct, image: { isLoading: false, ...action.image }, image_id: action.image.id } }
  case 'CREATE_PRODUCT_IMAGE_ERROR':
    return { ...state, currentProduct: { ...state.currentProduct, image: null } }
  case 'DELETE_PRODUCT_IMAGE':
    return { ...state, currentProduct: { ...state.currentProduct, image: null, image_id: null } }

  default:
    return state
  }
}
