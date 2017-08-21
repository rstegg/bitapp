const P = require('bluebird')
const Models = require('../../models')
const bitapi = require('../../services/bitapi')
const { user } = Models
/**
 * products {orderId, currency}
 */


module.exports = (req, res) => {
  console.log(req.user.banks);
  const { routing, account, } = req.body.bank
  const oldBanks = req.user.banks || []
  const updatedBanks = oldBanks.concat([{ routing, account }])
  return user.update({ banks: updatedBanks }, { where: { id: req.user.id }, returning: true, raw: true })
    .then(([ n, [ user ] ] ) => !user ? Promise.reject('Bad bank') : user)
    .then(user => res.json({ user }))
    .catch(error => res.status(400).json({ error }))
}
