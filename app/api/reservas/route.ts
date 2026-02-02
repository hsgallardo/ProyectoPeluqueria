import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const reservasFile = path.join(dataDir, "reservas.json");

async function getReservas() {
  try {
    const data = await fs.readFile(reservasFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveReservas(reservas: any[]) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(reservasFile, JSON.stringify(reservas, null, 2));
}

export async function GET() {
  const reservas = await getReservas();
  return NextResponse.json(reservas);
}

export async function POST(req: Request) {
  const data = await req.json();

  const reserva = {
    id: Date.now(),
    nombre: data.nombre,
    fecha: data.fecha,
    hora: data.hora,
    fechaCreacion: new Date().toISOString(),
  };

  const reservas = await getReservas();
  reservas.push(reserva);
  await saveReservas(reservas);

  return NextResponse.json({
    message: "Reserva guardada correctamente",
    reserva,
  });
}
