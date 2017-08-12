
const {
  compose, contains, not, or, __
} = require('ramda')

const bitcore = require('bitcore-lib')
const litecoin = require('../../coins/litecoin-net')
const bitcoin = bitcore.Networks.livenet
const Address = bitcore.Address

const isInteger =
  compose(
    Number.isInteger,
    Number
  )

const isNumber = compose(
  not,
  Number.isNaN,
  Number )

const isValidCurrency = contains(__, ['BTC', 'LTC'])

const isAddress =
  (address) =>
    or(Address.isValid(address, litecoin), Address.isValid(address, bitcoin))

module.exports = {
  amountUSD: isNumber,
  amount: isNumber,
  currency: isValidCurrency,
  address: isAddress,
  accountId: isInteger
}
