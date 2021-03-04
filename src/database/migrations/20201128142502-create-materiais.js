'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('materiais', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },

      url_imagem: {
          type: Sequelize.TEXT,
      },

      video_id: {
        type: Sequelize.TEXT,
      },

      txt_motivacional: {
        type: Sequelize.TEXT,
      },

      profissional_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'profissionais',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('materiais');
  }
};