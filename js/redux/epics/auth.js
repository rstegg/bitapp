import { combineEpics } from 'redux-observable'
import { loginSuccess, loginFailure } from '../actions/login'
import {
  signupSuccess,
  signupPhoneSuccess,
  signupVerifySuccess,
  signupFailure,
  signupPhoneFailure,
  signupVerifyFailure, } from '../actions/signup'
import { path } from 'ramda'
import { Observable } from 'rxjs'

import { openPost, handleError } from './helpers/req'

const api = {
  login: ({ phone, password }) =>
    openPost('auth/login', { phone, password }),
  loginForgot: ({ phone }) =>
    openPost('auth/forgot', { phone }),
  signup: ({ user }) =>
    openPost('auth/signup', { user }),
  phone: ({ phone }) =>
    openPost('auth/phone', { phone }),
  verify: ({ code, phone }) =>
    openPost('auth/verify', { code, phone })
}

const loginSubmit = action$ =>
  action$.ofType('LOGIN_SUBMIT')
    .mergeMap(action =>
      api.login(action.payload)
        .map(loginSuccess)
        .catch(res => handleError(loginFailure, res))
    )

const loginForgotSubmit = action$ =>
  action$.ofType('LOGIN_FORGOT_SUBMIT')
    .mergeMap(action =>
      api.loginForgot(action.payload)
        .map(loginSuccess)
        .catch(res => handleError(loginFailure, res))
    )

const signupSubmit = action$ =>
  action$.ofType('SIGNUP_SUBMIT')
    .mergeMap(action =>
      api.signup(action.payload)
        .map(signupSuccess)
        .catch(res => handleError(signupFailure, res))
    )

const signupPhoneSubmit = action$ =>
  action$.ofType('SIGNUP_PHONE_SUBMIT')
    .mergeMap(action =>
      api.phone(action.payload)
        .map(signupPhoneSuccess)
        .catch(res => handleError(signupPhoneFailure, res))
    )

const signupVerifySubmit = action$ =>
  action$.ofType('SIGNUP_VERIFY_SUBMIT')
    .mergeMap(action =>
      api.verify(action.payload)
        .map(signupVerifySuccess)
        .catch(res => handleError(signupVerifyFailure, res))
    )

export default combineEpics(
  loginSubmit,
  loginForgotSubmit,
  signupSubmit,
  signupPhoneSubmit,
  signupVerifySubmit
)
