'use strict'
module.exports = function(sequelize, DataTypes) {
  var OrderDetail = sequelize.define('orderDetail', {
    unitPrice: DataTypes.DECIMAL,
    quantity: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
  })

  OrderDetail.associate = function(models) {
    OrderDetail.belongsTo(models.order)
    OrderDetail.belongsTo(models.user)
    OrderDetail.belongsTo(models.product)
  }
  return OrderDetail
}