
const {jsonHandler, validateArguments} = require('../helpers')
const create = require('./create')
const newAddress = require('./requestPayment')
const checkAddressBalance = require('./checkAddressBalance')
const checkWalletBalance = require('./checkWalletBalance')
const getAccountAddresses = require('./getAccountAddresses')
const spend = require('./spend')
const withdraw = require('./withdraw')
const router = module.exports = require('express').Router()

router
.get('/new',
  validateArguments(create.spec),
  jsonHandler(create.fn)
)
.get('/:accountId/request/:currency/:amountUSD',
  validateArguments(newAddress.spec),
  jsonHandler(newAddress.fn)
)
.get('/:accountId/balance/:currency/:address',
  validateArguments(checkAddressBalance.spec),
  jsonHandler(checkAddressBalance.fn)
)
.get('/:accountId/addresses/:currency/',
  validateArguments(getAccountAddresses.spec),
  jsonHandler(getAccountAddresses.fn)
)
.get('/:accountId/balance/:currency/',
  validateArguments(checkWalletBalance.spec),
  jsonHandler(checkWalletBalance.fn)
)
.get('/:accountId/send/:currency/:address/:amountUSD',
  validateArguments(spend.spec),
  jsonHandler(spend.fn)
)
.get('/:accountId/withdraw/:amountUSD',
  validateArguments(spend.spec),
  jsonHandler(withdraw.fn)
)
