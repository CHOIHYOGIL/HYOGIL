'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_info = sequelize.define('user_info', {
    num: 
    {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement: true

    },
    user_name: DataTypes.STRING,
    identification: DataTypes.STRING,
    id: {
     type:DataTypes.STRING,
     unique:true
    },
    passwd: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    fishing: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      tableName:"user_info"
  });
  user_info.associate = function(models) {
    // associations can be defined here
  };
  return user_info;
};