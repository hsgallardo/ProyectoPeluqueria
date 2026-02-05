"use client";

import { useState } from "react";


export default function Reservas() {
  const [mensaje, setMensaje] = useState("");

  async function manejarEnvio(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formulario = e.currentTarget;

    const datoFormulario = {
      nombre: formulario.nombre.value,
      fecha: formulario.fecha.value,
      hora: formulario.hora.value,
    };

    const respuesta = await fetch("/api/reservas", {
      method: "POST",
      body: JSON.stringify(datoFormulario),
    });

    const datos = await respuesta.json();
    setMensaje(datos.message);
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded shadow">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Reserva tu cita
        </h1>

        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center border p-3 gap-2 rounded">
            <input
              name="nombre"
              placeholder="Nombre"
              className="flex-1 outline-none text-base"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center border p-3 gap-2 rounded">
            <input
              name="fecha"
              type="date"
              className="flex-1 outline-none text-base"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center border p-3 gap-2 rounded">
            <input
              name="hora"
              type="time"
              className="flex-1 outline-none text-base"
              required
            />
          </div>

          <button className="bg-black text-white p-3 rounded hover:bg-gray-800 transition font-semibold">
            Reservar
          </button>
        </form>

        {mensaje && (
          <div className="mt-4">
            <p className="text-green-600 text-center mb-4">
              {mensaje}
            </p>
            <a 
              href="/mis-citas" 
              className="w-full block text-center bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
            >
              Ver mis citas →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
