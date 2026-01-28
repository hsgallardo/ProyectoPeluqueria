import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Reserva:", data);

  return NextResponse.json({
    message: "Reserva enviada correctamente",
  });
}
