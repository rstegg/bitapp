export const onLoginSubmit = user =>
({
  type: 'LOGIN_SUBMIT',
  payload: {
    user
  }
})

export const onLoginSuccess = res =>
({
  type: 'LOGIN_SUCCESS',
  payload: {
    user: res.body.user
  }
})

export const onLoginFailure = res =>
({
  type: 'LOGIN_FAILURE'
})
