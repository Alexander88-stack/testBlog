import { NextRequest, NextResponse } from "next/server";
import { connect } from "mongoose";
import Message from "@/models/Message";

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

  const { name, email, message } = await body;

  let data;

  try {
    data = await Message.create({
      name,
      email,
      message,
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
