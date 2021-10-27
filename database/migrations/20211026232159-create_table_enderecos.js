'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', { 
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED, 
        allowNull: false,
        autoIncrement: true
     },
     cep: {
      type: Sequelize.STRING,
      allowNull: false
     }, 
     rua: {
      type: Sequelize.STRING,
      allowNull: false
     },
     numero: {
      type: Sequelize.STRING,
      allowNull: false
     },
     complemento: {
      type: Sequelize.STRING,
      allowNull: false
     },
     bairro: {
      type: Sequelize.STRING,
      allowNull: false
     },
     cidade: {
      type: Sequelize.STRING,
      allowNull: false
     },
     estado: {
      type: Sequelize.STRING,
      allowNull: false
     },
     pais: {
      type: Sequelize.STRING,
      allowNull: false
     },
     usuarios_id: {
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
