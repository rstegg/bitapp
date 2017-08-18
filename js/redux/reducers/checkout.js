const initialState = {
  cart: {
    isLoading: false,
    isEditing: false,
    products: [],
    active: {},
    editing: {},
  },
  history: {
    isLoading: false,
    list: [],
    active: {},
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_TO_CART':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        products: [ ...state.cart.products, action.payload.product ]
      }
    })
  case 'SET_ACTIVE_TRANSACTION':
    return Object.assign({}, state, {
      history: {
        ...state.history,
        active: action.payload.transaction
      }
    })
  case 'FETCH_CHECKOUT_HISTORY':
    return Object.assign({}, state, {
      history: {
        ...state.history,
        isLoading: true
      }
    })
  case 'FETCH_CHECKOUT_HISTORY_SUCCESS':
    return Object.assign({}, state, {
      history: {
        ...state.history,
        isLoading: false,
        list: action.payload.history
      }
    })
  case 'FETCH_CHECKOUT_HISTORY_FAILURE':
    return Object.assign({}, state, {
      history: {
        ...state.history,
        isLoading: false
      }
    })
  case 'CHECKOUT_SUBMIT':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: true
      }
    })
  case 'CHECKOUT_SUCCESS':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: false,
        active: {
          orderId: action.payload.order.id
        }
      },
    })
  case 'CHECKOUT_FAILURE':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: false
      }
    })
  case 'CURRENCY_SUBMIT':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        active: {
          ...state.cart.active,
          isLoading: true
        }
      }
    })
  case 'CURRENCY_SUCCESS':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        active: {
          ...action.payload.transaction,
          isLoading: false,
        }
      }
    })
  case 'CURRENCY_FAILURE':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: false
      }
    })
  case 'REMOVE_PRODUCT_FROM_CART':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        products: [
          ...state.cart.products.slice(0, state.cart.products.indexOf(action.payload.product)),
          ...state.cart.products.slice(state.cart.products.indexOf(action.payload.product) + 1)
        ]
      }
    })

  case 'OPEN_EDIT_PRODUCT_MODAL':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        editing: action.payload.product,
        isEditing: true
      }
    })
  case 'CLOSE_EDIT_PRODUCT_MODAL':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        editing: initialState.cart.editing,
        isEditing: false
      }
    })
  case 'EDIT_CART_PRODUCT':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        editing: initialState.cart.editing,
        isEditing: false,
        products: [
          ...state.cart.products.slice(0, state.cart.products.indexOf(action.payload.product)),
          { ...action.payload.product, quantity: action.payload.quantity },
          ...state.cart.products.slice(state.cart.products.indexOf(action.payload.product) + 1)
        ]
      }
    })
  default:
    return state
  }
}
