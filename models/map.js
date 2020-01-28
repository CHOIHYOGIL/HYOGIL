'use strict';
module.exports = (sequelize, DataTypes) => {
  const map = sequelize.define('map', {
     num: {
       type:DataTypes.INTEGER,
       primaryKey:true,
       allowNull:false
      },
    fish_info: DataTypes.STRING,
    weather: DataTypes.STRING
  }, {});
  map.associate = function(models) {
    // associations can be defined here
  };
  return map;
};