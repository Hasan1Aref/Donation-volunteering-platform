'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  
  };

  Posts.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    // userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  // Posts.associate=(models)=>{
  // Posts.hasOne(models.Users);
  // }
  return Posts;
};