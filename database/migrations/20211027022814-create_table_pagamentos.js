'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pagamentos', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      pedidos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      metodos_pagamentos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parcelamentos: {
        type: Sequelize.STRING,
        allowNull: true
      },
      parcelas: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data: {
        type: Sequelize.STRING,
        allowNull: true
      },

      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('pagamentos');
  }
};