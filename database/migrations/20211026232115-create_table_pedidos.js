'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED, 
        allowNull: false,
        autoIncrement: true
      },
      produtos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enderecos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      usuarios_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
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
