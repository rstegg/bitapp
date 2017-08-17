export const linkBankAccount = data =>
({
  type: 'LINK_WITHDRAWAL_BANK_ACCOUNT',
  payload: {
    data
  }
})

export const linkBankAccountSuccess = res =>
({
  type: 'LINK_WITHDRAWAL_BANK_ACCOUNT_SUCCESS',
  payload: {

  }
})

export const linkBankAccountFailure = error =>
({
  type: 'LINK_WITHDRAWAL_BANK_ACCOUNT_FAILURE',
  payload: {
    error
  }
})

export const removeBankAccount = bankId =>
({
  type: 'REMOVE_WITHDRAWAL_BANK_ACCOUNT',
  payload: {
    bankId
  }
})

export const removeBankAccountSuccess = res =>
({
  type: 'REMOVE_WITHDRAWAL_BANK_ACCOUNT_SUCCESS',
  payload: {
    bankId: res.body.bankId
  }
})

export const removeBankAccountFailure = res =>
({
  type: 'REMOVE_WITHDRAWAL_BANK_ACCOUNT_FAILURE',
  payload: {
    bankId: res.body.bankId
  }
})
