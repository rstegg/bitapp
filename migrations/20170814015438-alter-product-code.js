const P = require('bluebird')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return P.
     queryInterface.addColumn('products', 'code', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'code')
  }
};