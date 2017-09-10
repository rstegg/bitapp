'use strict';
const R = require('ramda')
const btc = require('../coins')

const nextDerivation =
  R.pipe(
    R.propOr(0, 'derivation'),
    R.inc
  )

const derive = R.curry(
  (xpriv, derivation) =>
    btc.deriveAddress(xpriv, derivation)
  )

const selector = {
  BTC: "btcPrivKey",
  LTC: "ltcPrivKey"
}

module.exports = function(sequelize, DataTypes) {
  const Account = sequelize.define('Account', {
    privKey: DataTypes.STRING
  })

  Account.associate = ({ Address }) => {
    Account.hasMany(Address)
  }

  /**
  * Gets a new address that has not been used before
  * @return {String} A new address to request a payment
  */

  Account.prototype.nextAddress = function() {
    const { Address } = require('./')

    const lastDerivation = accountId =>
      Address.findAll({
        limit: 1,
        where: { accountId },
        order: [ [ 'createdAt', 'DESC' ]],
        raw: true,
      })
      .then(R.head)

    const xpriv = this.getXpriv()
    const accountId = this.id
    return lastDerivation(accountId)
    .then(nextDerivation)
    .then(derivation => {
      const address = derive(xpriv, derivation).toString()
      return Address.create({ address, derivation, accountId })
    })
  }

  Account.prototype.getXpriv = function() {
    return this.privKey
  }

  return Account
}
