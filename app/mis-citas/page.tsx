"use client";

import { useEffect, useState } from "react";

interface Cita {
  id: number;
  nombre: string;
  fecha: string;
  hora: string;
  fechaCreacion: string;
}

export default function MisCitas() {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarCitas() {
      try {
        const res = await fetch("/api/reservas");
        const data = await res.json();
        setCitas(data);
      } catch (error) {
        console.error("Error al cargar citas:", error);
      } finally {
        setCargando(false);
      }
    }

    cargarCitas();
    // Recargar cada 5 segundos
    const intervalo = setInterval(cargarCitas, 5000);
    return () => clearInterval(intervalo);
  }, []);

  if (cargando) {
    return <div className="text-center p-6">Cargando citas...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Mis citas</h1>

      {citas.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No hay citas aún</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Nombre</th>
                <th className="border border-gray-300 p-3 text-left">Fecha</th>
                <th className="border border-gray-300 p-3 text-left">Hora</th>
                <th className="border border-gray-300 p-3 text-left">Creada</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{cita.nombre}</td>
                  <td className="border border-gray-300 p-3">{cita.fecha}</td>
                  <td className="border border-gray-300 p-3">{cita.hora}</td>
                  <td className="border border-gray-300 p-3 text-sm text-gray-600">
                    {new Date(cita.fechaCreacion).toLocaleString("es-ES")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6">
        <a
          href="/reservas"
          className="inline-block bg-black text-white p-2 rounded hover:bg-gray-800 transition"
        >
          ← Volver a hacer cita
        </a>
      </div>
    </div>
  );
}
