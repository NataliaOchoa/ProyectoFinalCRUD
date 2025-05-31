import { useState, useEffect } from 'react';
import axios from 'axios';
import EmpleadoForm from './components/EmpleadoForm';
import EmpleadoList from './components/EmpleadoList';
import './App.css';

function App() {
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  const fetchEmpleados = async () => {
    const res = await axios.get('http://localhost:3000/empleados');
    setEmpleados(res.data);
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  return (
    <div className="container">
      <h1>CRUD de Empleados</h1>
      <EmpleadoForm
        fetchEmpleados={fetchEmpleados}
        empleadoSeleccionado={empleadoSeleccionado}
        setEmpleadoSeleccionado={setEmpleadoSeleccionado}
      />
      <EmpleadoList
        empleados={empleados}
        fetchEmpleados={fetchEmpleados}
        setEmpleadoSeleccionado={setEmpleadoSeleccionado}
      />
    </div>
  );
}

export default App;
