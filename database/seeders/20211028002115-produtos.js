'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('produtos', [{
      nome_produto: 'Vitamina C',
      preco: '49,90', 
      descricao: 'Antioxidante Natural com 60 capsulas', 
      imagem: 'https://ibb.co/YLDK5fT', 
       },
       {
        nome_produto: 'Vitamina D',
        preco: '59,90', 
        descricao: 'Produto om 60 capsulas', 
        imagem: 'https://ibb.co/0KDcv4X', 
       },
       {
        nome_produto: 'Vitaminas A a Z',
        preco: '89,90', 
        descricao: 'Produto cgit aom 60 capsulas', 
        imagem: 'https://ibb.co/cQLXMTV', 
        }
    ], {});
   },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Produtos', null, {});
    }
};
