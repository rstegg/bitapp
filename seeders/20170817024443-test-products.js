'use strict';
const now = () => (new Date()).toISOString()

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      id: 1,
      unit: 'units',
      unitPrice: 10,
      userId: 1,
      itemId: 1,
      createdAt: now(),
      updatedAt: now(),
    }, {
      id: 2,
      unit: 'units',
      unitPrice: 20,
      userId: 2,
      itemId: 2,
      createdAt: now(),
      updatedAt: now(),
    }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('products', null, {});
  }
};
