const initialState = {
  cart: {
    isLoading: false,
    products: [],

  },
  address: null,
  totalPrice: null,
  checkoutStatus: null,
  url: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'ON_CHECKOUT_SUBMIT':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: true
      }
    })
  case 'ON_CHECKOUT_SUCCESS':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: false
      }
    })
  case 'ON_CHECKOUT_FAILURE':
    return Object.assign({}, state, {
      cart: {
        ...state.cart,
        isLoading: false
      }
    })
  case 'PRODUCT_BUY_NOW':
  case 'PRODUCT_ADD_TO_CART':
    return Object.assign({}, state, {
      cart: [ ...state.cart, action.payload.product ]
    })
  case 'PRODUCT_REMOVE_FROM_CART':
    return Object.assign({}, state, {
      cart: [ ...state.cart.slice(0, state.cart.indexOf(action.payload.product)), ...state.cart.slice(state.cart.indexOf(action.payload.product) + 1) ]
    })
  default:
    return state
  }
}
