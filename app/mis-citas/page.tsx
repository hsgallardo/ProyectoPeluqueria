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
    return <div className="text-center p-6 min-h-screen">Cargando citas...</div>;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded shadow">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Mis citas</h1>

        {citas.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No hay citas aún</p>
        ) : (
          <div className="overflow-x-auto -mx-6 sm:-mx-8 md:mx-0">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base">Nombre</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base">Fecha</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base">Hora</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-left text-xs sm:text-base">Creada</th>
                </tr>
              </thead>
              <tbody>
                {citas.map((cita) => {
                  // Parsear la fecha correctamente
                  const [year, month, day] = cita.fecha.split("-");
                  const fechaFormato = `${day}/${month}/${year}`;
                  
                  return (
                    <tr key={cita.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base">{cita.nombre}</td>
                      <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base">{fechaFormato}</td>
                      <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base">{cita.hora}</td>
                      <td className="border border-gray-300 p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                        {new Date(cita.fechaCreacion).toLocaleString("es-ES")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6">
          <a
            href="/reservas"
            className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 transition text-sm sm:text-base"
          >
            ← Volver a hacer cita
          </a>
        </div>
      </div>
    </div>
  );
}
