import { combineEpics } from 'redux-observable'
import {
  fetchOrdersSuccess,
} from 'actions/orders'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  orders: ({ user }) =>
    get('orders', user.token),
}

const fetchOrders = action$ =>
  action$.ofType('FETCH_ORDERS')
    .mergeMap(action =>
      api.orders(action.payload)
        .map(fetchOrdersSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_ORDERS_FAILURE',
          payload: { error }
        }))
      )

export default combineEpics(
  fetchOrders,
)
