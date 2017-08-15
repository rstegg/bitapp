'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('orderDetails', 'pricePerUnit', 'unitPrice');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn('orderDetails', 'unitPrice', 'pricePerUnit');
  }
};
