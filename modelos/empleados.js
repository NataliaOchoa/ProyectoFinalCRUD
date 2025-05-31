const { DataTypes } = require('sequelize');
const sequelize = require('../conexion');

const empleados = sequelize.define('empleados', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    fecha_de_nacimiento: { type: DataTypes.DATEONLY },
    sueldo: { type: DataTypes.FLOAT }
}, {
    timestamps: false
});

module.exports = empleados;
