import { combineEpics } from 'redux-observable'
import {
  fetchBalanceSuccess,
  createWithdrawSuccess,
  linkBankAccountSuccess,
} from 'actions/withdraw'
import { Observable } from 'rxjs/Rx'
import { get, post } from './helpers/req'

const api = {
  balance: ({ user }) =>
    get('balance', user.token),
  linkBank: ({ user, bank }) =>
    post('balance/bank', { bank }, user.token),
  withdraw: ({ user, bank, amount }) =>
    post('balance/withdraw', { bank, amount }, user.token),
}

const fetchBalance = action$ =>
  action$.ofType('FETCH_BALANCE')
    .mergeMap(action =>
      api.balance(action.payload)
        .map(fetchBalanceSuccess)
        .catch(error => Observable.of({
          type: 'FETCH_BALANCE_FAILURE',
          payload: { error }
        }))
    )

const linkBankAccount = action$ =>
  action$.ofType('LINK_BANK_ACCOUNT')
    .mergeMap(action =>
      api.linkBank(action.payload)
        .map(linkBankAccountSuccess)
        .catch(error => Observable.of({
          type: 'LINK_BANK_ACCOUNT_FAILURE',
          payload: { error }
        }))
    )

const createWithdraw = action$ =>
  action$.ofType('CREATE_WITHDRAW')
    .mergeMap(action =>
      api.withdraw(action.payload)
        .map(createWithdrawSuccess)
        .catch(error => Observable.of({
          type: 'CREATE_WITHDRAW_FAILURE',
          payload: { error }
        }))
    )

export default combineEpics(
  fetchBalance,
  linkBankAccount,
  createWithdraw,
)
