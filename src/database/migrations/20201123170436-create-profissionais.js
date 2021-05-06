'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('profissionais', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
      },

      nome: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      email: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      crp: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      senha: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      telefone: {
          type: Sequelize.STRING,
          allowNull: false,
      },

      endereco: {
          type: Sequelize.TEXT,
          allowNull: false,
      },

      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

      url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      reset_token: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      reset_token_expires: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    return queryInterface.dropTable('profissionais');
  }
};