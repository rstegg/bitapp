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
    return { ...state, activeProduct: { ...action.payload.product, isLoading: true } }
  case 'CREATE_PRODUCT_SUCCESS':
    return { ...state, newProduct: { ...action.payload.product, isLoading: false, isCreated: true } }
  case 'UPDATE_PRODUCT_SUCCESS':
    return { ...state, activeProduct: { ...action.payload.product, isLoading: false, isCreated: false } }
  case 'CREATE_PRODUCT_FAILURE':
  case 'UPDATE_PRODUCT_FAILURE':
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
  case 'SET_ACTIVE_PRODUCT':
    return { ...state, activeProduct: action.payload.product }
  case 'UPDATE_ACTIVE_PRODUCT':
    return { ...state,
      activeProduct: { ...state.activeProduct, ...action.payload.product }
    }
  case 'ADD_TO_CART':
    return { ...state,
      activeProduct: { ...state.activeProduct, isAdded: true }
    }

  case 'DELETE_PRODUCT':
    const { id } = action.payload.product

    return { ...state, productsList: {
        isLoading: false,
        products: state.productsList[id].products.filter(product => product.id != id)
      }
    }

  default:
    return state
  }
}
