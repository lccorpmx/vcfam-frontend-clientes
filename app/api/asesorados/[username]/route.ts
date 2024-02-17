import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {Prisma} from "@prisma/client"

export async function GET(request: Request, {params} : {params:{username:string}}){
    try {
        const asesoradoByid = await prisma.Asesorado.findFirst({
            where: {
                username: params.username
            }
        })
        if(!asesoradoByid) return NextResponse.json({ message: "no existe"}, {status:404})
        return NextResponse.json(asesoradoByid)     
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                message: error.message
            },
            {
                status: 500,
            })
        }
    }
}


export async function DELETE(request: Request, {params} : {params:{id:string}}){
    try {
        const deletedAsesorado = await prisma.Asesorado.delete({
            where: {
                id: parseInt(params.id)
            }
        });
        if (!deletedAsesorado){
            return NextResponse.json({ message: "no existe"}, {status:404})
        }
        return NextResponse.json(deletedAsesorado)
    } catch (error) { 
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code === "P2025"){
                return NextResponse.json({
                    message: "no existe ese asesorado"
                }, {
                    status:404
                })
            }
            return NextResponse.json({
                message: error.message
            },
            {
                status: 500,
            })
        }
    }
}

export async function PUT(request: Request, {params} : {params:{id:string}}){
    try {
        const { edad, pesoInicial, IMC, estatura, estado, createdAt} = await request.json();

        const updatedAsesorado = await prisma.Asesorado.update({
               where: {
                   id: Number(params.id)
               },
               data: {
                   edad,
                   pesoInicial,
                   IMC,
                   estatura,
                   estado,
                   createdAt: new Date(),
               }
           })
           return NextResponse.json(updatedAsesorado)
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                message: error.message
            },{
                status:500
            })
        }
    }
}