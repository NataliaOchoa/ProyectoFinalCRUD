const { Sequelize } = require('sequelize');

// Conexión a base de datos SQLite
const conexion = new Sequelize({
  dialect: 'sqlite',
  storage: './basedatos.sqlite'
});

module.exports = conexion;
