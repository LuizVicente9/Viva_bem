'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categorias', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categorias');
     
  }
};
