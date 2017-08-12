import { combineEpics } from 'redux-observable'
import { onLoginSuccess, onLoginFailure } from '../actions/login'
import { onSignupSuccess, onSignupPhoneSuccess, onSignupVerifySuccess, onSignupFailure } from '../actions/signup'
import { path } from 'ramda'
import { Observable } from 'rxjs'

import { openPost } from './helpers/req'

const getError = path([ 'response', 'text', 'error' ])

const api = {
  login: ({ username, password }) =>
    openPost('auth/login', { username, password }),
  signup: ({ user }) =>
    openPost('auth/signup', { user }),
  phone: ({ phone }) =>
    openPost('auth/phone', { phone }),
  verify: ({ code }) =>
    openPost('auth/verify', { code })
}

const onLoginSubmit = action$ =>
  action$.ofType('LOGIN_SUBMIT')
    .mergeMap(action =>
      api.login(action.payload)
        .map(onLoginSuccess)
        .catch(res => Observable.of(
          onLoginFailure(getError(res))
        ))
    )

const onSignupSubmit = action$ =>
  action$.ofType('SIGNUP_SUBMIT')
    .mergeMap(action =>
      api.signup(action.payload)
        .map(onSignupSuccess)
        .catch(res => Observable.of(
          onSignupFailure(getError(res))
        ))
      )

const onSignupPhoneSubmit = action$ =>
  action$.ofType('SIGNUP_PHONE_SUBMIT')
    .mergeMap(action =>
      api.phone(action.payload)
        .map(onSignupPhoneSuccess)
        .catch(res => Observable.of(
          onSignupFailure(getError(res))
        ))
      )

const onSignupVerifySubmit = action$ =>
  action$.ofType('SIGNUP_VERIFY_SUBMIT')
    .mergeMap(action =>
      api.verify(action.payload)
        .map(onSignupVerifySuccess)
        .catch(res => Observable.of(
          onSignupFailure(getError(res))
        ))
      )

export default combineEpics(
  onLoginSubmit,
  onSignupSubmit,
  onSignupPhoneSubmit,
  onSignupVerifySubmit
)
