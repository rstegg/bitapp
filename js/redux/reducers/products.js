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
    return { ...state, currentProduct: { ...action.payload.product, isLoading: true } }
  case 'CREATE_PRODUCT_SUCCESS':
  case 'UPDATE_PRODUCT_SUCCESS':
    return { ...state, currentProduct: { ...action.payload.product, isLoading: false, isNew: false } }
  case 'CREATE_PRODUCT_FAILURE':
  case 'UPDATE_PRODUCT_FAILURE':
    return { ...state, currentProduct: { ...action.payload.product, isLoading: false } }

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
  case 'RESET_CURRENT_PRODUCT':
    return { ...state, currentProduct: initialState.currentProduct }
  case 'SET_CURRENT_PRODUCT':
    return { ...state, currentProduct: action.payload.product }
  case 'UPDATE_CURRENT_PRODUCT':
    return { ...state,
      currentProduct: { ...state.currentProduct, ...action.payload.product }
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
