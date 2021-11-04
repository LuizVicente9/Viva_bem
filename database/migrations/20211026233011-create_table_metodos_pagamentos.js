'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dicas', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      metodo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('metodos_pagamentos');
     
  }
};
