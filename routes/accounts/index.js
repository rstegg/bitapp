const create = require('./create')
const newAddress = require('./requestPayment')
module.exports = {
  newAccount : (req, res, next) => {
    create()
    .then(x => res.json(x))
    .catch(next)
  },
  requestPayment: (req, res, next) =>{
    const {accountId, currency, amountUSD} = req.params
    newAddress(accountId, currency, amountUSD)
    .then(x => res.json(x))
    .catch(next)
  }
}
