"use client";

import { useState } from "react";


export default function Reservas() {
  const [mensaje, setMensaje] = useState("");

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
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">
        Reserva tu cita
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* NOMBRE */}
        <div className="flex items-center border p-2 gap-2 rounded">

          <input
            name="nombre"
            placeholder="Nombre"
            className="flex-1 outline-none"
            required
          />
        </div>

        {/* FECHA */}
        <div className="flex items-center border p-2 gap-2 rounded">

          <input
            name="fecha"
            type="date"
            className="flex-1 outline-none"
            required
          />
        </div>

        {/* HORA */}
        <div className="flex items-center border p-2 gap-2 rounded">

          <input
            name="hora"
            type="time"
            className="flex-1 outline-none"
            required
          />
        </div>

        <button className="bg-black text-white p-2 rounded hover:bg-gray-800 transition">
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
            className="w-full block text-center bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Ver mis citas →
          </a>
        </div>
      )}
    </div>
  );
}
