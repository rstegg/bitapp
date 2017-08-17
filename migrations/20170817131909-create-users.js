'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.createTable('users',
            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "phone": {
                    "type": "VARCHAR(255)",
                    "unique": true
                },
                "password": {
                    "type": "VARCHAR(255)",
                    "allowNull": true
                },
                "salt": {
                    "type": "VARCHAR(255)",
                    "allowNull": true
                },
                "verified": {
                    "type": "BOOLEAN",
                    "defaultValue": false
                },
                "registered": {
                    "type": "BOOLEAN",
                    "defaultValue": false
                },
                "verifyCode": {
                    "type": "VARCHAR(255)"
                },
                "name": {
                    "type": "VARCHAR(255)",
                    "allowNull": true
                },
                "createdAt": {
                    "type": "TIMESTAMP WITH TIME ZONE",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": "TIMESTAMP WITH TIME ZONE",
                    "allowNull": false
                }
            })
        })

        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
        .then(() => {
            return queryInterface.dropTable('users');
        })
        .then(() => {
            return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
};