export const onSignupPhoneSubmit = phone =>
({
  type: 'SIGNUP_PHONE_SUBMIT',
  payload: {
    phone
  }
})

export const onSignupPhoneSuccess = phone =>
({
  type: 'SIGNUP_PHONE_SUCCESS',
  payload: {
    phone
  }
})

export const onSignupVerifySubmit = code =>
({
  type: 'SIGNUP_VERIFY_SUBMIT',
  payload: {
    code
  }
})

export const onSignupVerifySuccess = code =>
({
  type: 'SIGNUP_VERIFY_SUCCESS',
  payload: {
    code
  }
})

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
