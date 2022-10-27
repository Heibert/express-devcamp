'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bootcamps.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    website: DataTypes.STRING,
    phone: DataTypes.STRING,
    average_raiting: DataTypes.DOUBLE,
    average_cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'bootcamps',
  });
  return bootcamps;
};