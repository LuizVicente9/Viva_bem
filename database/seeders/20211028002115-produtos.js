'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Produtos', [{
      nome_produto: 'Vitamina C',
      preco: '49,90', 
      descricao: 'Antioxidante Natural com 60 capsulas', 
      imagem: 'https://ibb.co/YLDK5fT', 
      }], {});
   },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Produtos', null, {});
    }
};
