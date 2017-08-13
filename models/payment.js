'use strict';
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define('Payment', {
    date: DataTypes.DATETIME,
    currency: DataTypes.STRING,
    amountUSD: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    txid: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Payment;
};