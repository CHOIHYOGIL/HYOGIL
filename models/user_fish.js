'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_fish = sequelize.define('user_fish', {
    num:{
       type: DataTypes.INTEGER,
       primaryKey:true,
       allowNull:false
    },
    id: {
type:DataTypes.STRING,
unique:true
    },
    fish: DataTypes.STRING,
    length: DataTypes.INTEGER,
    spot: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  user_fish.associate = function(models) {
    // associations can be defined here
  };
  return user_fish;
};