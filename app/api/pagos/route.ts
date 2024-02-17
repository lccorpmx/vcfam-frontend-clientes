import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(){
   const  pagos = await prisma.Pagos.findMany()
    return NextResponse.json(pagos)
}
