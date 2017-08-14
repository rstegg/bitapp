import { combineEpics } from 'redux-observable'
import {
  checkoutSuccess,
} from 'actions/orders'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  checkout: ({ cart, user }) =>
    post('payment/request', { cart }, user.token),
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

export default combineEpics(
  checkoutSubmit
)
