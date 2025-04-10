import { useState } from 'react';

const tiendas = ['Tienda 01', 'Tienda 02', 'Tienda 03'];

export default function DashboardProppi() {
  const [fecha, setFecha] = useState('2025-04-09');
  const [tiendaSeleccionada, setTiendaSeleccionada] = useState(tiendas[0]);
  const [asistencia, setAsistencia] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [foto, setFoto] = useState('');
  const [tareas, setTareas] = useState([
    { nombre: 'Limpieza de pisos', completada: false },
    { nombre: 'Pulido de vitrinas', completada: false },
    { nombre: 'Limpieza de baños', completada: false }
  ]);

  const toggleTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: 20 }}>📋 Dashboard Diario - Proppi</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
        <div>
          <label><strong>📅 Fecha:</strong></label><br />
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        <div>
          <label><strong>🏪 Tienda:</strong></label><br />
          <select value={tiendaSeleccionada} onChange={(e) => setTiendaSeleccionada(e.target.value)}>
            {tiendas.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: 20, backgroundColor: '#f9f9f9' }}>
        <h2 style={{ fontSize: '20px', marginBottom: 10 }}>{tiendaSeleccionada} - {fecha}</h2>

        <div style={{ marginBottom: 10 }}>
          <label><strong>👥 Asistencia:</strong></label><br />
          <textarea rows={2} value={asistencia} onChange={(e) => setAsistencia(e.target.value)} placeholder="Escribe los nombres aquí..." style={{ width: '100%' }} />
        </div>

        <div>
          <label><strong>✅ Tareas:</strong></label>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tareas.map((tarea, index) => (
              <li key={index} style={{ margin: '6px 0' }}>
                <input type="checkbox" checked={tarea.completada} onChange={() => toggleTarea(index)} />{' '}
                <span style={{ color: tarea.completada ? 'green' : 'red', fontWeight: 'bold' }}>
                  {tarea.completada ? '✔️' : '❌'} {tarea.nombre}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 10 }}>
          <label><strong>📝 Comentarios:</strong></label><br />
          <textarea rows={3} value={comentarios} onChange={(e) => setComentarios(e.target.value)} placeholder="Observaciones del día..." style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 10 }}>
          <label><strong>📷 Foto del trabajo:</strong></label><br />
          <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="Pega aquí el enlace a la foto (Drive, etc.)" style={{ width: '100%' }} />
          {foto && <p><a href={foto} target="_blank" rel="noreferrer" style={{ color: '#1a73e8' }}>🔗 Ver imagen</a></p>}
        </div>
      </div>
    </div>
  );
}
