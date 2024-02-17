import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request, {params} : {params:{id:string}}){
    const {userId, urlImage} = await request.json();

 const newPago =  await prisma.Pagos.create({
        data:{
            userId,
            urlImage
        }
    })

    return NextResponse.json(newPago)
}