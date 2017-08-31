const initialState = {
  isAuthenticated: false,
  isRegistered: false,
  isLoading: false,
  phone: '',
  banks: [],
  balance: [],
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'REFRESH_USER':
    return Object.assign({}, state, {
      error: null,
      isLoading: false
    })
  case 'SIGNUP_PHONE_SUBMIT':
  case 'SIGNUP_VERIFY_SUBMIT':
  case 'SIGNUP_SUBMIT':
  case 'LOGIN_SUBMIT':
    return Object.assign({}, state, {
      error: null,
      isLoading: true
    })
  case 'SIGNUP_PHONE_SUCCESS':
    return Object.assign({}, state, {
      isLoading: false,
      phone: action.payload.phone
    })
  case 'SIGNUP_VERIFY_SUCCESS':
    return Object.assign({}, state, {
      error: null,
      isLoading: false
    })
  case 'SIGNUP_SUCCESS':
    return Object.assign({}, state, {
      isAuthenticated: true,
      token: 'JWT ' + action.payload.token,
      isRegistered: true,
      error: null,
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
  case 'SIGNUP_PHONE_FAILURE':
  case 'SIGNUP_VERIFY_FAILURE':
    return Object.assign({}, state, {
      error: action.payload.error || 'Something went wrong.',
      isLoading: false
    })
  case 'SIGNUP_FAILURE':
    return Object.assign({}, state, {
      error: 'Something went wrong.',
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
