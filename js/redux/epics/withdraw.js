import { combineEpics } from 'redux-observable'
import {
  fetchBalanceSuccess,
  createWithdrawSuccess,
} from 'actions/withdraw'
import { Observable } from 'rxjs/Rx'
import { get, post, imagePost, put, remove } from './helpers/req'

const api = {
  balance: ({ user }) =>
    get('balance', user.token),
  withdraw: ({ user, bank, amount }) =>
    post('balance/withdraw', { bank, amount }, user.token),
}

const fetchBalance = action$ =>
  action$.ofType('FETCH_BALANCE')
    .mergeMap(action =>
      api.balance(action.payload)
        .map(fetchBalanceSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_WITHDRAW_FAILURE',
          payload: { error }
        }))
      )

const createWithdraw = action$ =>
  action$.ofType('CREATE_WITHDRAW')
    .mergeMap(action =>
      api.withdraw(action.payload)
        .map(createWithdrawSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_CHECKOUT_HISTORY_FAILURE',
          payload: { error }
        }))
      )

export default combineEpics(
  fetchBalance,
  createWithdraw
)
