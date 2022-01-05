const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TodoItems extends Model {}

TodoItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    todo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'todo',
            key: 'id',
        },
   user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
  },
},
  {

    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'todoItems',
  }
);

module.exports = TodoItems;
