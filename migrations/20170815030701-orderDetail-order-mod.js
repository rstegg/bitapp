'use strict';
const P = require('bluebird')
module.exports = {
  up: function (queryInterface, Sequelize) {
    return P.all([
      queryInterface.removeColumn('orderDetails', 'date'),
      queryInterface.removeColumn('orders', 'date')
    ])
  },

  down: function (queryInterface, Sequelize) {
    return P.all([
      queryInterface.addColumn('orderDetails', 'date', {type: Sequelize.DATE}),
      queryInterface.addColumn('orders', 'date', {type: Sequelize.DATE})
    ])
  }
};
