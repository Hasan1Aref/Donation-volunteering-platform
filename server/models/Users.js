'use strict';
const {
  Model,ENUM,STRING,TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  };
 
  Users.init({ 
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email:DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: {
      type:DataTypes.ENUM('default','volunteer','admin'),
      defaultValue:'default'
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  Users.associate=(models)=>{
    Users.hasMany(models.Posts,{
      onDelete:"cascade",
    });
  }
  return Users;
};