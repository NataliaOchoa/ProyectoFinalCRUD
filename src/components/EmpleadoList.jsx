import axios from 'axios';

export default function EmpleadoList({ empleados, fetchEmpleados, setEmpleadoSeleccionado }) {
  const eliminarEmpleado = async (id) => {
    if (confirm("¿Estás seguro que deseas eliminar este empleado?")) {
      await axios.delete(`http://localhost:3000/empleados/${id}`);
      fetchEmpleados();
    }
  };

  return (
    <div className="lista">
      <h2>Lista de empleados</h2>
      <ul>
        {empleados.map(emp => (
          <li key={emp.id}>
            <strong>{emp.nombre}</strong> - {emp.telefono} - {emp.fecha_de_nacimiento} - ${emp.sueldo}
            <br />
            <button onClick={() => setEmpleadoSeleccionado(emp)}>Editar</button>
            <button onClick={() => eliminarEmpleado(emp.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
