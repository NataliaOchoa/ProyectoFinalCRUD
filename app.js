const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;

const conexion = require('./conexion');
const empleados = require('./modelos/empleados');

app.use(cors());  
app.use(express.json());

// CONECTAR
conexion.sync()
  .then(() => {
    console.log('Base de datos conectada y tabla empleados creada');
  })
  .catch((error) => {
    console.error('Error al conectar la base de datos:', error);
  });

//CRUD

// CREATE
app.post('/empleados', async (req, res) => {
    const { nombre, telefono, fecha_de_nacimiento, sueldo } = req.body;
    const data = await empleados.create({ nombre, telefono, fecha_de_nacimiento, sueldo });
    res.send(data);
});

// READ
app.get('/empleados', async (req, res) => {
    const data = await empleados.findAll();
    res.send(data);
});

// UPDATE
app.put('/empleados/:id', async (req, res) => {
    const { nombre, telefono, fecha_de_nacimiento, sueldo } = req.body;
    const { id } = req.params;
    const data = await empleados.update({ nombre, telefono, fecha_de_nacimiento, sueldo }, { where: { id } });
    res.send(data);
});

//DELETE
app.delete('/empleados/:id', async (req, res) => {
    const { id } = req.params;
    const data = await empleados.destroy({ where: { id } });
    res.send({ eliminado: data });
});


// Iniciar servidor
app.listen(puerto, () => {
  console.log(`http://localhost:${puerto}`);
});
