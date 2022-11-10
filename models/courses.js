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
    require: true,
    validate:{
      isAlpha:{
        args: true,
        msg: "Error solo letras pls"
      },
      notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      }
    }},
    description:{
      allowNull:false,
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      }, 
      }},
    weeks:{
      allowNull:false,
      type: DataTypes.DOUBLE,
      validate:{
        notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      },
        isInt:{
          args:true,
          msg: "Solo numeros por favor",
        },
        len:{
          args: [1,1],
          msg: "Solo 1 digito por favor"
        },
      }},
    enroll_cost:{
      allowNull:false,
      type: DataTypes.DOUBLE,
      validate:{
        notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      },
        isFloat:{
          args: true,
          msg: "El enroll cost debe ser float"
        }
      }},
    minium_skill:{
      allowNull:false,
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
        args:true,msg:"No puede estar vacio el campo"
      },
      notNull: {
        args:true,msg:"No debe ser null"
      },
        isAlpha:{
          args: true,
          msg: "Solo letras por favor"
        }
      }
}  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};