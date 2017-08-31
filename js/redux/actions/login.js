export const loginSubmit = user =>
  ({
    type: 'LOGIN_SUBMIT',
    payload: {
      phone: user.phone,
      password: user.password
    }
  })

export const loginSuccess = res =>
  ({
    type: 'LOGIN_SUCCESS',
    payload: {
      user: res.body.user,
      token: res.body.token
    }
  })

export const loginFailure = error =>
  ({
    type: 'LOGIN_FAILURE',
    payload: {
      error
    }
  })

export const loginForgotSubmit = phone =>
  ({
    type: 'LOGIN_FORGOT_SUBMIT',
    payload: {
      phone
    }
  })

export const loginForgotSuccess = res =>
  ({
    type: 'LOGIN_FORGOT_SUCCESS',
    payload: {
      phone: res.body.phone
    }
  })

export const loginForgotFailure = error =>
  ({
    type: 'LOGIN_FORGOT_FAILURE',
    payload: {
      error
    }
  })

export const logout = () =>
  ({
    type: 'LOGOUT'
  })
