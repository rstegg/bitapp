'use strict';
module.exports = function(sequelize, DataTypes) {
  var OrderDetail = sequelize.define('OrderDetail', {
    orderId: DataTypes.INTEGER,
    pricePerUnit: DataTypes.DECIMAL,
    date: DataTypes.DATETIME,
    quantity: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    productId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OrderDetail;
};