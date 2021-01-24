'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pempeks', [
      { name: 'pempek kapal selam', price: 25000, stock: 100, image_url: 'https://cf.shopee.co.id/file/83f9d63eb999e50427c74c20080985e4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pempek lenjer', price: 10000, stock: 100, image_url: 'https://cf.shopee.co.id/file/4d270f5c13217122be0a6124359245dd', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pempek kulit', price: 10000, stock: 100, image_url: 'https://s3.bukalapak.com/img/8096149523/large/0_f65be5b1_1ae9_45c3_b258_791f2ee7602e_540_476_scaled.jpg', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pempeks', null);
  }
};