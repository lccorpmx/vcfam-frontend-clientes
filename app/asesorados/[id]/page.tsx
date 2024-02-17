"use client"
import Header from "@/components/Header"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Editor from '@/components/TextEditor'
import React, { useState, useEffect } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import router from "next/router";
 

 // async function updated(id: String){
 //  const res = await fetch("http://localhost:3000/api/asesorados/" + id, {
 //       method : 'PUT',
  //      body: JSON.stringify({
  ////          username : nombre,
  //      }),
   //     headers:{
  //          'Content-Type': 'application/json'
   //     }
  //  })
 //   if (res.ok){
 //       console.log("se edito wes")
 ///   }
//}



export default function page({ params }: { params: { id: string } }) {
  const [asesorado, setAsesorado] = useState(null);
  const fetchAsesorados = async (id: string) => {
    const res = await fetch("http://localhost:3000/api/asesorados/" + id);
    const data = await res.json();
    setAsesorado(data);
    
  }
    const [editorValue, setEditorValue] = useState('');
    const handleEditorChange = (value:any) => {
      setEditorValue(value);
    };

    useEffect(() => {
      if (typeof document !== 'undefined') {
        // Código que depende del DOM
        // Puedes agregar aquí cualquier lógica que necesite acceder al DOM
      }
      fetchAsesorados(params.id);
    }, [params.id]);

  return (
    <div>
        <div className='min-h-screen'>
        <div className='text-center pt-20'>
            <div className='flex items-center flex-col'>
            <p className='mx-auto text-4xl pt-6'>{asesorado?.username}</p>
            {asesorado && asesorado?.estado === 'inactivo' &&(
                         <div>
                         <p>Cuenta en Pausa</p>
                         <Dialog>
               <DialogTrigger className="text-red-600 text-xl">-Activar-</DialogTrigger>
               <DialogContent>
                 <DialogHeader>
                   <DialogTitle>¿Deseas reanudar la cuenta de {asesorado?.username}?</DialogTitle>
                   <DialogDescription>
                     <Button className="text-red-600 text-lg" variant="outline" onClick={() => updated(asesorado.id)}>Si</Button>
                   </DialogDescription>
                 </DialogHeader>
               </DialogContent>
             </Dialog>
             
                         </div>
            )}
            <div className='pt-4 w-10/12'>
  <Accordion  className="mt-10" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-4xl'>Informacion</AccordionTrigger>
    <AccordionContent className='text-2xl w-8/12 text-left'>
      <p>Nombre: {asesorado?.username}</p>
      <p>Edad: {asesorado?.edad}</p>
      <p>Correo: {asesorado?.email}</p>
      <p>Numero: {asesorado?.numero}</p>
      <p>Peso Inicial: {asesorado?.pesoInicial}</p>
      <p>Estatura: {asesorado?.estatura}</p>
      <p>IMC: {asesorado?.IMC}</p>
      <p>Alimentos Alergicos: {asesorado?.alimentosAlergicos}</p>
      <p>Alimentos no Tolerados: {asesorado?.alimentosNoTolerados}</p>
      <p>Alimentacion Comun: {asesorado?.alimentacionComun}</p>
      <p>Dia a Dia: {asesorado?.lifestyle}</p>
      <p>Objetivo: {asesorado?.Objetivo}</p>
      <p>Lesiones: {asesorado?.lesiones}</p>
      <p>Enfermedades: {asesorado?.enfermedades}</p>
      <p>Tiempo Disponible: {asesorado?.tiempoEjercicioDisponible}</p>
      <p>Tiempo Entrenando: {asesorado?.tiempoEntrenando}</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion className="mt-8" type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger className='text-4xl'>Plan Actual</AccordionTrigger>
    <AccordionContent>
      <div>
      PROGRAMA PARA LA MODIFICACIÓN DE LA COMPOSICIÓN CORPORAL by VCFAM noviembre 25 de 2023*

Arturo Zilli Ríos 
Edad: 21 años
Peso: 98,3 kg
Seguimiento presencial 

Primera comida
-240 g de yogur griego Chobani, endulzar con 1 cucharada de miel natural.
-100 g avena cocida con canela 
-20 g almendras 
-1 manzana 
-1 taza de té de tu preferencia.

Segunda comida 
-200 g de pechuga de pollo o filete de pescado tilapia cocido con aceite en aerosol o a la plancha.
-250 g de arroz o 350 g de papa
-1/2 aguacate grande  
-1 taza de nopales 

Tercera comida 
-200 g de carne de res sin grasa 
-250 g de arroz o pasta
-50 g de queso panela 
-1 taza de espinacas o mezcla de lechugas y pepino sin semilla.

Comida post entrenamiento 
-200 g de claras en pan cake con 120 g avena, endulzar con 2 cucharadas de miel natural, y canela.
-1 plátano grande

Cena 
-1 lata de atún en agua  “Dolores Jumbo”
-1/2 aguacate
-1 taza de piña 
-3 paquetes de galletas “Salmas” 


________
PROGRAMA DE ENTRENAMIENTO

Lunes: Pecho 
Martes: Cuádriceps y pantorrilla 
Miércoles: Espalda 
Jueves: Deltoides 
Viernes: Isquiosurales, glúteo y pantorrilla  
Sábado: Bíceps y tríceps 

8,000 pasos al día DIARIO como mínimo. 20 minutos de cardio después de entrenar

Toda la rutina se va a trabajar en un sistema de 3 a 4 series entre 10 y 15 repeticiones, excepto donde indique algo diferente.

Pecho.- 
-Press inclinado con mancuernas 
-Press horizontal con barra
-Press declinado en máquina hammer
-Pec Dec 
-Cross over
-Lagartijas

Cuádriceps y pantorrilla.-
-Extensión de cuádriceps
-Press de pierna
-Sentadilla profunda en Smith 
-Desplantes búlgaros
-Sentadilla zizzy
-Elevación de talones en máquina 6x15-20

Espalda.-
-Dominadas 
-Pull over con cuerda en polea alta 
-Jalón al pecho agarre supino 
-Remo en polea baja agarre “v amplio”
-Remo agarre prono en máquina 
-Remo alto en máquina hammer 
-Hiperextensiones 

Deltoides.-
-Press militar con mancuernas 
-Elevaciones laterales con mancuernas 
-Press en máquina agarre neutro 
-Elevaciones frontales con cuerda
-Pec fly en máquina 
-Encogimiento de hombros 7x12

Isquiosurales, glúteo y pantorrilla.- 
-Curl femoral boca abajo en máquina hoist 
-Curl femoral sentado en máquina 
-Peso muerto rumano con barra 
-Desplantes búlgaros
-Hip thrust
-Abducciones en máquina
-Elevación de talones en máquina 6x15-20

Abdomen 3 veces por semana; 200 abdominales por sesión. Se pueden variar los ejercicios 

________
Recomendaciones generales.-
-Las proteínas se miden o pesan en crudo (claras, pescado, pollo, res, huevos, etc.)
-Nada frito, puedes utilizar aceite en aerosol PAM para evitar que tus alimentos se peguen en la sartén 
-La avena se mide en crudo y una vez medido, se coce con agua, canela 
-Los carbohidratos como arroz, pasta, papa y camote se pesan o miden en cocido.
-Comer cada 3 o 4 horas como máximo 
-Ingerir 4.5 a 5 litros de agua al día.
**2 comidas por convivencia a la semana como sushi no frito o algún corte de carne.
________
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion className="mt-8" type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger className='text-4xl'>Retroalimentacion</AccordionTrigger>
    <AccordionContent>
                      <div className='p-4 w-full'>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-2xl'>2/02/2023</AccordionTrigger>
                        <AccordionContent>
                           <div>
                              Me gustaria mas atencion presencial
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

<div className='p-8'>
        <p>Escriba el plan del Asesorado:</p>
        <Editor value={editorValue} onChange={handleEditorChange} asesorados={params.id}/>
        <div className='mt-4'>
        </div>
      </div>


      <div className='p-9 w-full'>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-4xl'>Historial de Planes</AccordionTrigger>
                <AccordionContent>
                <div className='p-4 w-full'>
                    <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-2xl'>2/01/2023</AccordionTrigger>
                        <AccordionContent>
                           <div>
                            PROGRAMA PARA LA MODIFICACIÓN DE LA COMPOSICIÓN CORPORAL by VCFAM noviembre 25 de 2023*
                                Arturo Zilli Ríos 
                                Edad: 21 años
                                Peso: 98,3 kg
                                Seguimiento presencial 

                                Primera comida
                                -240 g de yogur griego Chobani, endulzar con 1 cucharada de miel natural.
                                -100 g avena cocida con canela 
                                -20 g almendras 
                                -1 manzana 
                                -1 taza de té de tu preferencia.

                                Segunda comida 
                                -200 g de pechuga de pollo o filete de pescado tilapia cocido con aceite en aerosol o a la plancha.
                                -250 g de arroz o 350 g de papa
                                -1/2 aguacate grande  
                                -1 taza de nopales 

                                Tercera comida 
                                -200 g de carne de res sin grasa 
                                -250 g de arroz o pasta
                                -50 g de queso panela 
                                -1 taza de espinacas o mezcla de lechugas y pepino sin semilla.

                                Comida post entrenamiento 
                                -200 g de claras en pan cake con 120 g avena, endulzar con 2 cucharadas de miel natural, y canela.
                                -1 plátano grande

                                Cena 
                                -1 lata de atún en agua  “Dolores Jumbo”
                                -1/2 aguacate
                                -1 taza de piña 
                                -3 paquetes de galletas “Salmas” 


                                ________
                                PROGRAMA DE ENTRENAMIENTO

                                Lunes: Pecho 
                                Martes: Cuádriceps y pantorrilla 
                                Miércoles: Espalda 
                                Jueves: Deltoides 
                                Viernes: Isquiosurales, glúteo y pantorrilla  
                                Sábado: Bíceps y tríceps 

                                8,000 pasos al día DIARIO como mínimo. 20 minutos de cardio después de entrenar

                                Toda la rutina se va a trabajar en un sistema de 3 a 4 series entre 10 y 15 repeticiones, excepto donde indique algo diferente.

                                Pecho.- 
                                -Press inclinado con mancuernas 
                                -Press horizontal con barra
                                -Press declinado en máquina hammer
                                -Pec Dec 
                                -Cross over
                                -Lagartijas

                                Cuádriceps y pantorrilla.-
                                -Extensión de cuádriceps
                                -Press de pierna
                                -Sentadilla profunda en Smith 
                                -Desplantes búlgaros
                                -Sentadilla zizzy
                                -Elevación de talones en máquina 6x15-20

                                Espalda.-
                                -Dominadas 
                                -Pull over con cuerda en polea alta 
                                -Jalón al pecho agarre supino 
                                -Remo en polea baja agarre “v amplio”
                                -Remo agarre prono en máquina 
                                -Remo alto en máquina hammer 
                                -Hiperextensiones 

                                Deltoides.-
                                -Press militar con mancuernas 
                                -Elevaciones laterales con mancuernas 
                                -Press en máquina agarre neutro 
                                -Elevaciones frontales con cuerda
                                -Pec fly en máquina 
                                -Encogimiento de hombros 7x12

                                Isquiosurales, glúteo y pantorrilla.- 
                                -Curl femoral boca abajo en máquina hoist 
                                -Curl femoral sentado en máquina 
                                -Peso muerto rumano con barra 
                                -Desplantes búlgaros
                                -Hip thrust
                                -Abducciones en máquina
                                -Elevación de talones en máquina 6x15-20

                                Abdomen 3 veces por semana; 200 abdominales por sesión. Se pueden variar los ejercicios 

                                ________
                                Recomendaciones generales.-
                                -Las proteínas se miden o pesan en crudo (claras, pescado, pollo, res, huevos, etc.)
                                -Nada frito, puedes utilizar aceite en aerosol PAM para evitar que tus alimentos se peguen en la sartén 
                                -La avena se mide en crudo y una vez medido, se coce con agua, canela 
                                -Los carbohidratos como arroz, pasta, papa y camote se pesan o miden en cocido.
                                -Comer cada 3 o 4 horas como máximo 
                                -Ingerir 4.5 a 5 litros de agua al día.
                                **2 comidas por convivencia a la semana como sushi no frito o algún corte de carne.
                                ________
                           </div>
                           <Button  variant="outline" className='mt-6 text-red-700'>Seleccionar Plan</Button>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>


        </div>
  </div>
            </div>
        </div>
        </div>
    </div>
  )
}
