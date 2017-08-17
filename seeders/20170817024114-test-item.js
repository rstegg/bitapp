'use strict';
const now = () => (new Date()).toISOString()

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [{
      id: 1,
      name: 'Item 1',
      description: 'Test Item 1',
      userId: 1,
      createdAt: now(),
      updatedAt: now(),

    },{
      id: 2,
      name: 'Item 2',
      description: 'Test Item 2',
      userId: 2,
      createdAt: now(),
      updatedAt: now(),
    },], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {});
  }
};
