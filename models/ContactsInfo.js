const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ContactsInfo extends Model { }

ContactsInfo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isEmail: true,
            },
        contacts_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'contacts',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'contactsInfo',
    }
);

module.exports = ContactsInfo;