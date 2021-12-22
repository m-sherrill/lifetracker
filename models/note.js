const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class note extends Model {}

note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
      
    },
  
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'note',
  }
);

module.exports = note;