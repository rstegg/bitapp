const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { Withdrawal } = Models
/**
 * products {orderId, currency}
 */

module.exports = (req, res) =>
  bitapi.withdraw(req.user.accountId, req.body.amount)
    .then(({ total, message, status }) =>
      status === 'error' ? Promise.reject('invalid withdraw request')
      : { total, message }
    )
    .then(({ total, message }) => Withdrawal.create({ total, bank: req.body.bank, userId: req.user.id }))
    .then(withdrawal => {

      res.json({ withdrawal })
      console.log(withdrawal);
      //TODO: email withdrawal
    })
  .catch(error => res.status(400).json({ error }))
