import { NextRequest, NextResponse } from "next/server";
import { connect } from "mongoose";
import Books from "@/models/Books";

export async function GET(req: NextRequest) {
  await connect(process.env.DB_CONNECTION as string, {
    dbName: "ena",
  });

  let data;
  try {
    data = await Books.find(); // Usa el método find() para obtener los datos
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al obtener los datos" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
export async function POST(req: NextRequest) {
  await connect(process.env.DB_CONNECTION as string, {
    dbName: "ena",
  });

  const body = await req.json();
  if (!body) {
    return NextResponse.json(
      { message: "Error al obtener los datos del cuerpo de la solicitud" },
      { status: 400 }
    );
  }

  const { title, description, autor, price, image } = await body;

  let data;

  try {
    data = await Books.create({
      title,
      description,
      autor,
      price,
      image,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al crear el libro" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 201 });
}
