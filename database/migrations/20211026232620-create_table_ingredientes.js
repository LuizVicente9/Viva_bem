'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ingredientes', { 
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
      pagamentos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
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
