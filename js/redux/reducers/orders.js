const initialState = {
  cart: {
    isLoading: false,
    products: [],
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
