'use strict';

const { hashPassword } = require("../helpers/hash");

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { email: 'admin@mail.com', password: hashPassword('asdf'), role: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { email: 'user@mail.com', password: hashPassword('asdf'), role: 'customer', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', [
      { email: 'admin@mail.com', password: hashPassword('asdf'), role: 'admin' },
      { email: 'user@mail.com', password: hashPassword('asdf'), role: 'customer' }
    ])
  }
};