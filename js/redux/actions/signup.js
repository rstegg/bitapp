export const onSignupPhoneSubmit = phone =>
({
  type: 'SIGNUP_PHONE_SUBMIT',
  payload: {
    phone
  }
})

export const onSignupPhoneSuccess = res =>
({
  type: 'SIGNUP_PHONE_SUCCESS',
  payload: {
    phone: res.body.phone
  }
})

export const onSignupVerifySubmit = code =>
({
  type: 'SIGNUP_VERIFY_SUBMIT',
  payload: {
    code
  }
})

export const onSignupVerifySuccess = () =>
({
  type: 'SIGNUP_VERIFY_SUCCESS'
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
  type: 'SIGNUP_SUCCESS',
  payload: {
    user: res.body.user
  }
})

export const onSignupFailure = res =>
({
  type: 'SIGNUP_FAILURE'
})
