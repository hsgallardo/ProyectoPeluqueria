import { NextResponse } from "next/server";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, nombre, fecha, hora, fechaCreacion FROM reservas ORDER BY fecha DESC, hora DESC"
    );
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json(
      { message: "Error al obtener las reservas" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const nombre = String(data?.nombre ?? "").trim();
    const fecha = String(data?.fecha ?? "").trim();
    const hora = String(data?.hora ?? "").trim();

    if (!nombre || !fecha || !hora) {
      return NextResponse.json(
        { message: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    const [result] = await pool.execute<ResultSetHeader>(
      "INSERT INTO reservas (nombre, fecha, hora) VALUES (?, ?, ?)",
      [nombre, fecha, hora]
    );

    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT id, nombre, fecha, hora, fechaCreacion FROM reservas WHERE id = ?",
      [result.insertId]
    );

    return NextResponse.json({
      message: "Reserva guardada correctamente",
      reserva: rows[0] ?? null,
    });
  } catch {
    return NextResponse.json(
      { message: "Error al guardar la reserva" },
      { status: 500 }
    );
  }
}
