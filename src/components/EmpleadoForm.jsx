import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EmpleadoForm({ fetchEmpleados, empleadoSeleccionado, setEmpleadoSeleccionado }) {
  const [form, setForm] = useState({ nombre: '', telefono: '', fecha_de_nacimiento: '', sueldo: '' });

  useEffect(() => {
    if (empleadoSeleccionado) {
      setForm(empleadoSeleccionado);
    }
  }, [empleadoSeleccionado]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (empleadoSeleccionado) {
      await axios.put(`http://localhost:3000/empleados/${empleadoSeleccionado.id}`, form);
      setEmpleadoSeleccionado(null);
    } else {
      await axios.post('http://localhost:3000/empleados', form);
    }
    setForm({ nombre: '', telefono: '', fecha_de_nacimiento: '', sueldo: '' });
    fetchEmpleados();
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>{empleadoSeleccionado ? 'Editar empleado' : 'Agregar nuevo empleado'}</h2>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
      <input name="fecha_de_nacimiento" type="date" value={form.fecha_de_nacimiento} onChange={handleChange} required />
      <input name="sueldo" placeholder="Sueldo" type="number" value={form.sueldo} onChange={handleChange} required />
      <button type="submit">{empleadoSeleccionado ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}
