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
<<<<<<< HEAD
      produtos_id: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "produtos",
          key: "id"
        }
      },
=======
    
>>>>>>> 4de0b8c28d196cac3bcae976cfe28bf100049bbc
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
