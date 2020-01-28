'use strict';
module.exports = (sequelize, DataTypes) => {
  const board = sequelize.define('board', {
    num: {
type:DataTypes.INTEGER,
primaryKey:true,
alloNull:false
    },
    id: DataTypes.STRING,
    comment_id: DataTypes.STRING,
    date: DataTypes.STRING,
    board_writing: DataTypes.STRING,
    comment: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {

    tableName:"board"
  });
  board.associate = function(models) {
    // associations can be defined here
  };
  return board;
};