'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', [{
      produtos_id: 1, 
      status: "entregue",
      enderecos_id: 1,
      usuarios_id: 1,
      pagamentos_id: 1
     }], {});
    
   await queryInterface.bulkInsert('pedidos', [
     {
      produtos_id: 1,
      status: 'aprovado'
     }
   ])
  },
  //id, created_at, updated_at,

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
