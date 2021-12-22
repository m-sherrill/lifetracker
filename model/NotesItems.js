const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class NotesItems extends Model {}

NotesItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    noteContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    notesId: {
        type: DataTypes.INTEGER,
        references: {
          model: "notes",
          key: "id",
        },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "notesItems",
  }
);

module.exports = NotesItems;
