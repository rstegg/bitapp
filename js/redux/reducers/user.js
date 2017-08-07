const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  isLoading: false,
  signupPage: 'signupPhone',
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SIGNUP_PHONE_SUBMIT':
  return Object.assign({}, state, {
    error: null,
    isLoading: false,
    signupPage: 'signupVerify'
  })
  case 'SIGNUP_VERIFY_SUBMIT':
  case 'LOGIN_SUBMIT':
  case 'SIGNUP_SUBMIT':
    return Object.assign({}, state, {
      error: null,
      isLoading: true,
      signupPage: 'signupCode'
    })
  case 'SIGNUP_VERIFY_SUCCESS':
    return Object.assign({}, state, {
      error: null,
      isLoading: false,
      signupPage: 'signupSuccess'
    })
  case 'SIGNUP_SUCCESS':
    return Object.assign({}, state, {
      ...action.payload.user,
      isAuthenticated: true,
      token: 'JWT ' + action.payload.token,
      isRegistered: true,
      error: null,
      isLoading: false,
      signupPage: 'signupComplete'
    })
  case 'SIGNUP_FAILURE':
    return Object.assign({}, state, {
      error: 'Something went wrong.',
      isLoading: false
    })
  case 'LOGIN_SUCCESS':
    return Object.assign({}, state, {
      ...action.payload.user,
      isAuthenticated: true,
      token: 'JWT ' + action.payload.token,
      error: null,
      isLoading: false
    })
  case 'LOGIN_FAILURE':
    return Object.assign({}, state, {
      error: 'Incorrect username or password',
      isLoading: false
    })
  case 'LOGOUT':
    return initialState
  default:
    return state
  }
}
