import { combineEpics } from 'redux-observable'
import {
  fetchCheckoutHistorySuccess,
  checkoutSuccess,
  currencySuccess,
} from 'actions/checkout'
import { Observable } from 'rxjs/Rx'
import { get, post } from './helpers/req'

const api = {
  checkout: ({ products, user }) =>
    post('orders', { products }, user.token),
  currency: ({ currency, orderId, user }) =>
    post('transactions', { currency, orderId }, user.token),
  history: ({ user }) =>
    get('transactions', user.token),
}

const fetchCheckoutHistory = action$ =>
  action$.ofType('FETCH_CHECKOUT_HISTORY')
    .mergeMap(action =>
      api.history(action.payload)
        .map(fetchCheckoutHistorySuccess)
        .catch(error => Observable.of({
          type: 'FETCH_CHECKOUT_HISTORY_FAILURE',
          payload: { error }
        }))
    )

const checkoutSubmit = action$ =>
  action$.ofType('CHECKOUT_SUBMIT')
    .mergeMap(action =>
      api.checkout(action.payload)
        .map(checkoutSuccess)
        .catch(error => Observable.of({
          type: 'CHECKOUT_FAILURE',
          payload: { error }
        }))
    )

const currencySubmit = action$ =>
  action$.ofType('CURRENCY_SUBMIT')
    .mergeMap(action =>
      api.currency(action.payload)
        .map(currencySuccess)
        .catch(error => Observable.of({
          type: 'CURRENCY_FAILURE',
          payload: { error }
        }))
    )

export default combineEpics(
  fetchCheckoutHistory,
  checkoutSubmit,
  currencySubmit,
)
