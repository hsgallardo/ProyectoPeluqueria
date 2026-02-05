import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT id, nombre, DATE_FORMAT(fecha, '%Y-%m-%d') as fecha, TIME_FORMAT(hora, '%H:%i') as hora, fechaCreacion FROM reservas ORDER BY fecha DESC"
    );
    connection.release();
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    return NextResponse.json(
      { message: "Error al obtener reservas" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO reservas (nombre, fecha, hora) VALUES (?, ?, ?)",
      [data.nombre, data.fecha, data.hora]
    );
    connection.release();

    return NextResponse.json({
      message: "Reserva guardada correctamente",
      reserva: {
        id: (result as any).insertId,
        nombre: data.nombre,
        fecha: data.fecha,
        hora: data.hora,
      },
    });
  } catch (error) {
    console.error("Error al guardar reserva:", error);
    return NextResponse.json(
      { message: "Error al guardar la reserva" },
      { status: 500 }
    );
  }
}
