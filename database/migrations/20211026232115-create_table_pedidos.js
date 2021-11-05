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
        allowNull: false,
        references: {
          model: "produtos",
          key: "id"
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enderecos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "enderecos",
          key: "id"
        }
      },
      usuarios_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "id"
        }
      },
      pagamentos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pagamentos",
          key: "id"
        }
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('pedidos');
  }
};
