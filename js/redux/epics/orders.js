import { combineEpics } from 'redux-observable'
import {
  checkoutSuccess,
  currencySuccess,
} from 'actions/orders'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  checkout: ({ products, user }) =>
    post('orders', { products }, user.token),
  currency: ({ currency, orderId, user }) =>
    post('payments', { currency, orderId }, user.token),
}

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
  checkoutSubmit,
  currencySubmit,
)
