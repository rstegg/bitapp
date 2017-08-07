'use strict';
const R = require('ramda')
const coins = require('../coins')

const lastDerivation = (currency, accountId) => {
  const {Address} = require('./index')
  return Address.findAll({
    limit: 1,
    where: { currency, accountId },
    order: [ [ 'createdAt', 'DESC' ]],
    raw: true,
  })
  .then(R.head)

}

const nextDerivation =
  R.pipe(
    R.propOr(0, 'derivation'),
    R.inc
  )

const derive = R.curry(
  (xpriv, currency,  derivation) =>
    coins[currency].deriveAddress(xpriv, derivation))

const selector = {
  BTC: "btcPrivKey",
  LTC: "ltcPrivKey"
}

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    ltcPrivKey: DataTypes.STRING,
    btcPrivKey: DataTypes.STRING
    }, {
    classMethods: {
      associate: function(models) {
        Account.hasMany(models.Address)
    }
  }});
  /**
  * Gets a new address that has not been used before
  * @return {String} A new address to request a payment
  */
  Account.prototype.nextAddress =
    function (currency) {
      const {Address} = require('./index')
      const xpriv = this[selector[currency]]
      const accountId = this.id
      return lastDerivation(currency, accountId)
      .then(nextDerivation)
      .then((derivation) => {
        const address = derive(xpriv, currency, derivation).toString()
        console.log(address)
        return Address.create({address, currency, derivation, accountId})
      })
    }

  return Account;
};
