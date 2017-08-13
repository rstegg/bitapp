'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    paymentId: DataTypes.INTEGER,
    totalUSD: DataTypes.DECIMAL,
    date: DataTypes.DATETIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};