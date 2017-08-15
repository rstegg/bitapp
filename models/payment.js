'use strict'
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define('payment', {
    url: DataTypes.STRING,
    currency: DataTypes.STRING,
    amountUSD: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    txid: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  })

  Payment.associate = function(models) {
    Payment.belongsTo(models.user)
    Payment.belongsTo(models.order)
  }

  return Payment
}
