const initialState = {
  cart: {
    isLoading: false,
    products: [],
  },
  history: {
    isLoading: false,
    list: [],
    active: {},
  },
  orderId: '',
  address: '',
  totalPrice: '',
  checkoutStatus: '',
  url: ''
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
      },
      orderId: action.payload.order.id
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
      isLoading: true
    })
  case 'CURRENCY_SUCCESS':
    return Object.assign({}, state, {
      isLoading: false,
      currency: action.payload.payment.currency,
      amountUSD: action.payload.payment.amountUSD,
      amount: action.payload.payment.amount,
      url: action.payload.payment.url,
      status: action.payload.payment.status,
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
      cart: [ ...state.cart.slice(0, state.cart.indexOf(action.payload.product)), ...state.cart.slice(state.cart.indexOf(action.payload.product) + 1) ]
    })
  default:
    return state
  }
}
