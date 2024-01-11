import { NextRequest, NextResponse } from "next/server";
import { connect } from "mongoose";
import Robots from "@/models/Robots";

export async function GET(req: NextRequest) {
  await connect(process.env.DB_CONNECTION as string, {
    dbName: "ena",
  });

  let data;
  try {
    data = await Robots.find(); // Usa el método find() para obtener los datos
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al obtener los datos" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
