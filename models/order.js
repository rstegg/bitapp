'use strict'

module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('order', {
    totalUSD: DataTypes.DECIMAL,
    products: DataTypes.ARRAY(DataTypes.JSONB)
  })

  Order.associate = (models) => {
    Order.belongsTo(models.user)
  }

  return Order
}
