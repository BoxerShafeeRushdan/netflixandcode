const {sequelize, DataTypes, Model} = require('./db');

class User extends Model {}
class Show extends Model {}

User.init({
    emailAdress: DataTypes.STRING, 
    password: DataTypes.STRING,

}, {
    sequelize,
    timestamps: false,
});

Show.init({
    title: DataTypes.STRING, 
    genre: DataTypes.STRING,
    rating: DataTypes.STRING,
    status: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = { User, Show }