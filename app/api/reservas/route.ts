import { NextResponse } from "next/server";
import conexion from "@/lib/mysql";

export async function GET() {
  try {
    const conexionActiva = await conexion.getConnection();
    const [filas] = await conexionActiva.query(
      "SELECT id, nombre, DATE_FORMAT(fecha, '%Y-%m-%d') as fecha, TIME_FORMAT(hora, '%H:%i') as hora, fechaCreacion FROM reservas ORDER BY fecha DESC"
    );
    conexionActiva.release();
    
    return NextResponse.json(filas);
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
    const datos = await req.json();

    const conexionActiva = await conexion.getConnection();
    const [resultado] = await conexionActiva.query(
      "INSERT INTO reservas (nombre, fecha, hora) VALUES (?, ?, ?)",
      [datos.nombre, datos.fecha, datos.hora]
    );
    conexionActiva.release();

    return NextResponse.json({
      message: "Reserva guardada correctamente",
      reserva: {
        id: (resultado as any).insertId,
        nombre: datos.nombre,
        fecha: datos.fecha,
        hora: datos.hora,
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
