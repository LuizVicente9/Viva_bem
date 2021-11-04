'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categorias_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pedidos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');

}};
