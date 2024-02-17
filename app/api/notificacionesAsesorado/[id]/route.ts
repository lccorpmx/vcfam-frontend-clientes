import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // Obtén el ID directamente de los parámetros de la ruta
    const userId = Number(params.id);

    // Busca la notificación por el ID del usuario proporcionado en la ruta
    const notifAsesoradoById = await prisma.NotificacionesAsesorado.findMany({
      where: {
        userId,
      },
    });

    if (!notifAsesoradoById) {
      return NextResponse.json({ message: "No existe la notificación para el usuario proporcionado" }, { status: 404 });
    }

    return NextResponse.json(notifAsesoradoById);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
