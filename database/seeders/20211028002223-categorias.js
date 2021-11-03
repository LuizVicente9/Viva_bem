'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categorias', [{
      tipo: 'vitamina'
     }], {});    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categorias', null, {});
  }
};
