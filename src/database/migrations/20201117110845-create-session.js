'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('session', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            sid: {
              type: Sequelize.TEXT,
              allowNull: false,
          },

            data: {
                type: Sequelize.TEXT,
                allowNull: false,
            },

            expires: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
              },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('session');
    }
};