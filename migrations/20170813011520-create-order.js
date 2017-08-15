'use strict'
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalUSD: Sequelize.DECIMAL,
      products: Sequelize.ARRAY(Sequelize.JSONB),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Orders')
  }
}
