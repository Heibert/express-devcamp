'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [{
        username: 'Ronal Castro',
        email: 'ronald@gmial.com',
        password: '123456'
     },
    {
      username: 'Ronald Castro',
      email: 'castro@gmial.com',
      password: '123456'
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
