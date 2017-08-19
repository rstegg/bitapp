'use strict';
const now = () => (new Date()).toISOString()

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('orders', [{
      id: 99,
      userId: 1,
      totalUSD: 100,
      createdAt: now(),
      updatedAt: now()
    },{
      id:100,
      userId: 2,
      totalUSD:200,
      createdAt: now(),
      updatedAt: now(),
      products: JSON.stringify({
        product: 2,
        total: 200,
        quantity: 10,
        unitPrice: 20
      })
    }], {}).catch(console.log);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
