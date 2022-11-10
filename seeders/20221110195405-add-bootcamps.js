'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Java',
      description: 'Aprende Java en 3 dias',
      website: 'www.bootcampJava.com',
      phone: '3103233725',
      average_raiting: 8,
      average_cost: 10,
      user_id: 1
   },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
