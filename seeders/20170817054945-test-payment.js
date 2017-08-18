'use strict';
const now = () => (new Date()).toISOString()

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('payments', [{
      id: 1,
      orderId: 1,
      userId: 1,
      currency: "BTC",
      amountUSD: 100,
      status: "not published",
      amount: 0.023809523,
      url: "bitcoin:1VgRpNqXLyGw3Aa2pUiFnGmHZu3K9HLPGp?amount=0.02380952",
      createdAt: now(),
      updatedAt: now(),
    },{
      id: 2,
      orderId: 2,
      userId: 2,
      currency: "BTC",
      amountUSD: 200,
      status: "not published",
      amount: 0.04761905,
      url: "bitcoin:1VgRpNqXLyGw3Aa2pUiFnGmHZu3K9HLPGp?amount=0.02380952",
      createdAt: now(),
      updatedAt: now(),
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('payments', null, {});
  }
};
