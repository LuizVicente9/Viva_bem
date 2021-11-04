'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('receitas', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modo_preparo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nutricional: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receitas');
     
  }
};
