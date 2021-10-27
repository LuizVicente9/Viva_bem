'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED, 
        allowNull: false,
        autoIncrement: true
     },
     nome: {
      type: Sequelize.STRING,
      allowNull: false
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false
     },
     senha: {
      type: Sequelize.STRING,
      allowNull: false
     },
     data_nascimento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    foto: {
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
