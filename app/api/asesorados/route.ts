import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(){
   const  asesorados = await prisma.Asesorado.findMany()
    return NextResponse.json(asesorados)
}
