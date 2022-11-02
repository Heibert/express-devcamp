'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //1. Nombre de tabla para la nueva columna
    await queryInterface.addColumn('bootcamps','user_id',{
      type:Sequelize.INTEGER,
      references:{
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete:'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps','user_id')
  }
};
