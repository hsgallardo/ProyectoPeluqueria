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
    return (
      <div className="text-center p-6 min-h-screen flex items-center justify-center">
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin 1s linear infinite;
          }
        `}</style>
        <div className="text-center">
          <div className="text-5xl mb-4 animate-spin-slow" style={{animation: 'spin 1s linear infinite'}}>⚙️</div>
          <p className="text-gray-600 text-lg">Cargando citas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes row-appear {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        table tbody tr {
          animation: row-appear 0.5s ease-out;
        }
        
        table tbody tr:hover {
          background-color: #f3f4f6;
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 animate-slide-up">Mis citas</h1>

        {citas.length === 0 ? (
          <div className="text-center py-12 animate-slide-up">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-500 text-center py-8 text-lg">No hay citas aún</p>
            <a 
              href="/reservas"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Crear primera cita</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </a>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto -mx-6 sm:-mx-8 md:mx-0 animate-slide-up">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base font-semibold text-gray-900">Nombre</th>
                    <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base font-semibold text-gray-900">Fecha</th>
                    <th className="border border-gray-300 p-2 sm:p-3 text-left text-sm sm:text-base font-semibold text-gray-900">Hora</th>
                    <th className="border border-gray-300 p-2 sm:p-3 text-left text-xs sm:text-base font-semibold text-gray-900">Creada</th>
                  </tr>
                </thead>
                <tbody>
                  {citas.map((cita, idx) => {
                    const fechaDate = new Date(cita.fecha);
                    const fechaFormato = Number.isNaN(fechaDate.getTime())
                      ? String(cita.fecha)
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")
                      : fechaDate.toLocaleDateString("es-ES");

                    const horaFormato = String(cita.hora ?? "").slice(0, 5);

                    return (
                      <tr 
                        key={cita.id} 
                        className="hover:bg-gray-50 transition-colors duration-200 group cursor-pointer"
                        style={{animationDelay: `${idx * 0.1}s`}}
                      >
                        <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base font-medium text-gray-900 group-hover:font-semibold">
                          {cita.nombre}
                        </td>
                        <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base text-gray-700">
                          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded group-hover:bg-blue-100 transition">
                            {fechaFormato}
                          </span>
                        </td>
                        <td className="border border-gray-300 p-2 sm:p-3 text-sm sm:text-base text-gray-700">
                          <span className="inline-block px-2 py-1 bg-green-50 text-green-700 rounded group-hover:bg-green-100 transition">
                            {horaFormato}
                          </span>
                        </td>
                        <td className="border border-gray-300 p-2 sm:p-3 text-xs sm:text-sm text-gray-600">
                          {new Date(cita.fechaCreacion).toLocaleString("es-ES")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 animate-slide-up">
              <a
                href="/reservas"
                className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10">← Volver a hacer cita</span>
                <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
