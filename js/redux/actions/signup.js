export const onSignupSubmit = user =>
({
  type: 'SIGNUP_SUBMIT',
  payload: {
    user
  }
})

export const onSignupSuccess = res =>
({
  type: 'SIGNUP_SUCCESS'
})

export const onSignupFailure = res =>
({
  type: 'SIGNUP_FAILURE'
})
