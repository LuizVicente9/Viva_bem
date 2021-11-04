'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('receitas_ingredientes', { 
    receitas_id: {
      foreignKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ingredientes_id: {
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

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('receitas_ingredientes');
     }
};
