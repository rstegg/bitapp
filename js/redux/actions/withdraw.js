export const fetchBalance = user =>
  ({
    type: 'FETCH_BALANCE',
    payload: {
      user
    }
  })

export const fetchBalanceSuccess = res =>
  ({
    type: 'FETCH_BALANCE_SUCCESS',
    payload: {
      BTC: res.body.BTC,
      LTC: res.body.LTC,
    }
  })

export const fetchBalanceFailure = res =>
  ({
    type: 'FETCH_WITHDRAW_FAILURE',
    payload: {
      error: res.body.error
    }
  })

export const linkBankAccount = (bank, user) =>
  ({
    type: 'LINK_BANK_ACCOUNT',
    payload: {
      bank,
      user
    }
  })

export const linkBankAccountSuccess = res =>
  ({
    type: 'LINK_BANK_ACCOUNT_SUCCESS',
    payload: {
      banks: res.body.user.banks,
    }
  })

export const linkBankAccountFailure = error =>
  ({
    type: 'LINK_BANK_ACCOUNT_FAILURE',
    payload: {
      error
    }
  })

export const removeBankAccount = bankId =>
  ({
    type: 'REMOVE_BANK_ACCOUNT',
    payload: {
      bankId
    }
  })

export const removeBankAccountSuccess = res =>
  ({
    type: 'REMOVE_BANK_ACCOUNT_SUCCESS',
    payload: {
      bankId: res.body.bankId
    }
  })

export const removeBankAccountFailure = res =>
  ({
    type: 'REMOVE_BANK_ACCOUNT_FAILURE',
    payload: {
      bankId: res.body.bankId
    }
  })
