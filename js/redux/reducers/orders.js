const initialState = {
  history: {
    isLoading: false,
    list: [],
    active: {}
  },
  activeOrder: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      return Object.assign({}, state, {
        history: {
          ...state.history,
          isLoading: true
        }
      })
    case 'FETCH_ORDERS_SUCCESS':
      return Object.assign({}, state, {
        history: {
          ...state.history,
          isLoading: false,
          list: action.payload.orders
        }
      })
    case 'FETCH_ORDERS_FAILURE':
      return Object.assign({}, state, {
        history: {
          ...state.history,
          isLoading: false
        }
      })
    case 'SET_ACTIVE_ORDER':
      return Object.assign({}, state, {
        activeOrder: action.payload.order
      })
    case 'LOGOUT':
      return initialState
  default:
    return state
  }
}
