const { NextResponse } = require("next/server")
import db from '@/lib/prisma'
import bcrypt from 'bcrypt'

export async function POST(request) {
    try {
        const data = await request.json();

        const userEmailFound = await db.Asesorado.findUnique({
             where: {
                 email: data.email  //duda, aca deberia ser un helper?
             }
         })
     
         if (userEmailFound){
             return NextResponse.json({
                 message: "Email Existente"
             },{
                 status:400
             })
         }
     
     
         const userNameFound = await db.Asesorado.findUnique({
             where: {
                 username: data.username  //duda, aca deberia ser un helper?
             }
         })
     
         if (userNameFound){
             return NextResponse.json({
                 message: "Nombre Existente"
             },{
                 status:400
             })
         }

         console.log(data)
         const hashPassword = await bcrypt.hash(data.password, 10)

         const newUser = await db.Asesorado.create({
             data:{
                 username: data.username,
                 email:data.email,
                 password: hashPassword,
                 numero: data.numero,
                 nombre: data.nombre,
                 pesoInicial: data.pesoInicial,
                 estatura: data.estatura,
                 edad: data.edad,
                 IMC: data.IMC,
                 alimentosAlergicos :data.alimentosAlergicos,
                 alimentosNoTolerados: data.alimentosNoTolerados,
                 tiempoEntrenando: data.tiempoEntrenando,
                 lifestyle: data.lifestyle,
                 alimentacionComun: data.alimentacionComun,
                 objetivo: data.objetivo,
                 lesiones: data.lesiones,
                 enfermedades: data.enfermedades,
                 tiempoEjercicioDisponible: data.tiempoEjercicioDisponible, 
             }
         })
     
         const {password: _, ...user} = newUser
         return NextResponse.json(user);
    } catch (error) {
       return NextResponse.json({
        message: error.message
       },{
        status:500
       }) 
    }
}

