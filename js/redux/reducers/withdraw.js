const initialState = {
  isLoading: false,
  errors: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_STRIPE_TOKEN':
      return {...state, isLoading: true}
    case 'REMOVE_WITHDRAWAL_BANK_ACCOUNT':
      return {...state, isLoading: action.payload.bankId }
    case 'LINK_WITHDRAWAL_BANK_ACCOUNT_SUCCESS':
    case 'LINK_WITHDRAWAL_BANK_ACCOUNT_FAILURE':
    case 'REMOVE_WITHDRAWAL_BANK_ACCOUNT_SUCCESS':
    case 'CREATE_STRIPE_TOKEN_FAILURE':
      return {...state, ...action.payload, isLoading: false}
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
