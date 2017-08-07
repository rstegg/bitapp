const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  isLoading: false,
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN_SUBMIT':
  case 'SIGNUP_SUBMIT':
    return Object.assign({}, state, {
      error: null,
      isLoading: true
    })
  case 'LOGIN_SUCCESS':
    return Object.assign({}, state, {
      ...action.payload.user,
      isAuthenticated: true,
      token: 'JWT ' + action.payload.token,
      error: null,
      isLoading: false
    })
  case 'SIGNUP_SUCCESS':
    return Object.assign({}, state, {
      ...action.payload.user,
      isAuthenticated: true,
      token: 'JWT ' + action.payload.token,
      isRegistered: true,
      error: null,
      isLoading: false
    })
  case 'LOGIN_FAILURE':
    return Object.assign({}, state, {
      error: 'Incorrect username or password',
      isLoading: false
    })
  case 'SIGNUP_FAILURE':
    return Object.assign({}, state, {
      error: 'Something went wrong.',
      isLoading: false
    })
  case 'LOGOUT':
    return initialState
  default:
    return state
  }
}
