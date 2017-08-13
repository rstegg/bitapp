'use strict';
const now = () => (new Date()).toISOString()
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Galileo Sanchez',
      phone: "+1213531958",
      password: "$2a$10$YPj2v10imyFhiLbAUEncQuLvUEweqSi4DmLLpAxuq2W2ezSwpIonK",
      registered: true,
      verified: true,
      verifyCode: "1234",
      createdAt: now(),
      updatedAt: now(),
    }, {
      id: 2,
      name: 'Ryan Stegmann',
      phone: "+19519922715",
      password: "$2a$10$egNaDMBMrRwiK42U47kGeuixGL27wdg2OHt9Z9uqoHr26wgSSgx2m",
      registered: true,
      verified: true,
      verifyCode: "1234",
      createdAt: now(),
      updatedAt: now(),
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
