'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    currency: DataTypes.STRING,
    address: DataTypes.STRING,
    derivation: DataTypes.INTEGER,
    accountId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Accounts',
        key: 'id'
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        Address.belongsTo(models.Account)
      }
    }
  });
  return Address;
};
