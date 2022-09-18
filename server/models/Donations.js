'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Donations.init({
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    town: DataTypes.STRING,
    street: DataTypes.STRING,
    locInPlus: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donations;
};