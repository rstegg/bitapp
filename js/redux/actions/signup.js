export const signupPhoneSubmit = phone =>
({
  type: 'SIGNUP_PHONE_SUBMIT',
  payload: {
    phone
  }
})

export const signupPhoneSuccess = res =>
({
  type: 'SIGNUP_PHONE_SUCCESS',
  payload: {
    phone: res.body.phone
  }
})

export const signupVerifySubmit = (code, phone) =>
({
  type: 'SIGNUP_VERIFY_SUBMIT',
  payload: {
    code,
    phone
  }
})

export const signupVerifySuccess = () =>
({
  type: 'SIGNUP_VERIFY_SUCCESS'
})

export const signupSubmit = user =>
({
  type: 'SIGNUP_SUBMIT',
  payload: {
    user
  }
})

export const signupSuccess = res =>
({
  type: 'SIGNUP_SUCCESS',
  payload: {
    user: res.body.user,
    token: res.body.token
  }
})

export const signupFailure = error =>
({
  type: 'SIGNUP_FAILURE',
  payload: {
    error
  }
})
