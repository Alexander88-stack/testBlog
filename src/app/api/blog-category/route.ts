import slugify from "slugify";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "mongoose";
import BlogCategories from "@/models/BlogCategories";

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

  const { name, description } = await body;

  let data;

  try {
    data = await BlogCategories.create({
      name,
      description,
      slug: slugify(name, { lower: true }),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al crear la categoría" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 201 });
}
