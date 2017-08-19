const initialState = {
  isLoading: false,
  errors: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_STRIPE_TOKEN':
      return {...state, isLoading: true}
    case 'CREATE_STRIPE_TOKEN_FAILURE':
      return {...state, ...action.payload, isLoading: false}
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}
