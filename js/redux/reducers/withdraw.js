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
  switch(action.type) {
    case 'REMOVE_WITHDRAWAL_BANK_ACCOUNT':
      return {...state,
        banks: {
          ...state.banks,
          isLoading: action.payload.bankId
        }
      }
    case 'LINK_WITHDRAWAL_BANK_ACCOUNT_SUCCESS':
    case 'REMOVE_WITHDRAWAL_BANK_ACCOUNT_SUCCESS':
      return {...state,
        banks: {
          ...action.payload.banks,
          isLoading: action.payload.bankId
        }
      }
    case 'LINK_WITHDRAWAL_BANK_ACCOUNT_FAILURE':
      return {...state,
        banks: {
          ...action.payload.banks,
          isLoading: action.payload.bankId
        }
      }
    case 'FETCH_BALANCE_SUCCESS':
      return {...state, balance: { BTC: action.payload.BTC, LTC: action.payload.LTC, isLoading: false } }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
