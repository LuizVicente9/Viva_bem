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
        type: Sequelize.NUMBER,
        allowNull: false
      },
      parcelamento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parcelas: {
        type: Sequelize.NUMBER,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
    
  },

  //down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  //}
};
