"use client";

import { useState } from "react";


export default function Reservas() {
  const [mensaje, setMensaje] = useState("");
  const [focusField, setFocusField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      nombre: form.nombre.value,
      fecha: form.fecha.value,
      hora: form.hora.value,
    };

    const res = await fetch("/api/reservas", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMensaje(data.message);
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <style>{`
        @keyframes form-slide-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes input-focus-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(107, 114, 128, 0.2);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(107, 114, 128, 0);
          }
        }
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-form-slide-in {
          animation: form-slide-in 0.6s ease-out;
        }
        
        .animate-success-pop {
          animation: success-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 animate-form-slide-in">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
          Reserva tu cita
        </h1>

        {!mensaje ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NOMBRE */}
            <div 
              className="flex flex-col sm:flex-row sm:items-center border-2 p-3 gap-2 rounded transition-all duration-300"
              style={{
                borderColor: focusField === 'nombre' ? '#6b7280' : '#e5e7eb',
                backgroundColor: focusField === 'nombre' ? '#f9fafb' : 'white'
              }}
            >
              <span className="text-xl">👤</span>
              <input
                name="nombre"
                placeholder="Nombre"
                className="flex-1 outline-none text-base bg-transparent"
                required
                onFocus={() => setFocusField('nombre')}
                onBlur={() => setFocusField(null)}
                style={{
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            {/* FECHA */}
            <div 
              className="flex flex-col sm:flex-row sm:items-center border-2 p-3 gap-2 rounded transition-all duration-300"
              style={{
                borderColor: focusField === 'fecha' ? '#6b7280' : '#e5e7eb',
                backgroundColor: focusField === 'fecha' ? '#f9fafb' : 'white'
              }}
            >
              <span className="text-xl">📅</span>
              <input
                name="fecha"
                type="date"
                className="flex-1 outline-none text-base bg-transparent"
                required
                onFocus={() => setFocusField('fecha')}
                onBlur={() => setFocusField(null)}
                style={{
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            {/* HORA */}
            <div 
              className="flex flex-col sm:flex-row sm:items-center border-2 p-3 gap-2 rounded transition-all duration-300"
              style={{
                borderColor: focusField === 'hora' ? '#6b7280' : '#e5e7eb',
                backgroundColor: focusField === 'hora' ? '#f9fafb' : 'white'
              }}
            >
              <span className="text-xl">⏰</span>
              <input
                name="hora"
                type="time"
                className="flex-1 outline-none text-base bg-transparent"
                required
                onFocus={() => setFocusField('hora')}
                onBlur={() => setFocusField(null)}
                style={{
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            <button 
              className="bg-black text-white p-3 rounded hover:bg-gray-800 transition font-semibold text-base group relative overflow-hidden mt-4"
              style={{
                transition: 'all 0.3s ease'
              }}
            >
              <span className="relative z-10">Reservar</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </button>
          </form>
        ) : (
          <div className="animate-success-pop">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-bounce">✅</div>
              <p className="text-green-600 text-lg mb-4 font-semibold">
                {mensaje}
              </p>
            </div>
            <a 
              href="/mis-citas" 
              className="w-full block text-center bg-green-600 text-white p-3 rounded hover:bg-green-700 transition font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Ver mis citas →</span>
              <div className="absolute inset-0 bg-green-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
