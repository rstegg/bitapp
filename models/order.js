'use strict'
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('order', {
    totalUSD: DataTypes.DECIMAL,
    date: DataTypes.DATE
  })

  Order.associate = (models) => {
    Order.belongsTo(models.user)
  }
  return Order
}
