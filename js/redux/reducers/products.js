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
  case 'SEARCH_PRODUCTS':
    return { ...state, productsList: { ...state.productsList, products: state.productsList.products.filter(product => product.item.name.contains(action.payload.keyword) ) } }
  case 'CREATE_PRODUCT':
  case 'EDIT_PRODUCT':
    return { ...state, activeProduct: { ...action.payload.product, isLoading: true } }
  case 'CREATE_PRODUCT_SUCCESS':
    return { ...state, newProduct: { ...action.payload.product, isLoading: false } }
  case 'DUPLICATE_PRODUCT_SUCCESS':
    return { ...state, duplicateProduct: { ...state.duplicateProduct, isLoading: false } }
  case 'EDIT_PRODUCT_SUCCESS':
    return { ...state, activeProduct: { ...action.payload.product, isLoading: false } }
  case 'CREATE_PRODUCT_FAILURE':
  case 'EDIT_PRODUCT_FAILURE':
    return { ...state, activeProduct: { ...action.payload.product, isLoading: false } }

  case 'FETCH_PRODUCTS':
    return {...state, productsList: {
        isLoading: true,
        products: []
      }
    }

  case 'FETCH_PRODUCTS_SUCCESS':
    return {...state, productsList: {
        isLoading: false,
        products: action.payload.products,
      }
    }


  case 'FETCH_PRODUCTS_FAILURE':
    return { ...state, productsList: { isLoading: false, products: state.productsList.products } }
  case 'RESET_ACTIVE_PRODUCT':
    return { ...state, activeProduct: initialState.activeProduct }
  case 'RESET_NEW_PRODUCT':
    return { ...state, newProduct: initialState.newProduct }
  case 'OPEN_EDIT_PRODUCT':
  case 'SET_ACTIVE_PRODUCT':
    return { ...state, activeProduct: action.payload.product }
  case 'EDIT_ACTIVE_PRODUCT':
    return { ...state,
      activeProduct: { ...state.activeProduct, ...action.payload.product }
    }
  case 'ADD_TO_CART':
    return { ...state,
      activeProduct: { ...state.activeProduct }
    }

  case 'DELETE_PRODUCT':
    return { ...state, productsList: {
        isLoading: false,
        products: state.productsList.products.filter(product => product.id != action.payload.product.id)
      }
    }

  case 'LOGOUT':
    return initialState

  default:
    return state
  }
}
