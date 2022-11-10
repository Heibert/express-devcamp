'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title:{
    allowNull: false,
    type: DataTypes.STRING,
    validate:{
      notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      }
    }},
    description:{
      allowNull:false,
       type: DataTypes.STRING,},
    weeks:{
      allowNull:false,
       type: DataTypes.DOUBLE,},
    enroll_cost:{
      allowNull:false,
       type: DataTypes.DOUBLE,},
    minium_skill:{
      allowNull:false,
       type: DataTypes.STRING
}  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};