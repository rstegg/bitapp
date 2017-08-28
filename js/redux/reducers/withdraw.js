const initialState = {
  banks: {
    isLoading: false,
    list: []
  },
  balance: {
    isLoading: false,
    BTC: {},
    LTC: {},
  },
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'REMOVE_BANK_ACCOUNT':
    return { ...state,
      banks: {
        ...state.banks,
        isLoading: action.payload.bankId
      }
    }
  case 'LINK_BANK_ACCOUNT':
    return { ...state,
      banks: {
        ...state.banks,
        isLoading: true
      }
    }
  case 'LINK_BANK_ACCOUNT_SUCCESS':
    return { ...state,
      banks: {
        list: action.payload.banks,
        isLoading: false
      }
    }
  case 'REMOVE_BANK_ACCOUNT_SUCCESS':
    return { ...state,
      banks: {
        ...action.payload.banks,
        isLoading: action.payload.bankId
      }
    }
  case 'LINK_BANK_ACCOUNT_FAILURE':
    return { ...state,
      banks: {
        ...action.payload.banks,
        isLoading: action.payload.bankId
      }
    }
  case 'FETCH_BALANCE':
    return { ...state, balance: { ...state.balance, isLoading: true } }
  case 'FETCH_BALANCE_SUCCESS':
    return { ...state, balance: { BTC: action.payload.BTC, LTC: action.payload.LTC, isLoading: false } }
  case 'FETCH_BALANCE_FAILURE':
    return { ...state, balance: { ...state.balance, isLoading: false } }
  case 'LOGOUT':
    return initialState
  default:
    return state
  }
}
