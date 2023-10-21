import React from 'react'
import Image from 'next/image'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function page() {
  return (
    <div className='min-h-screen bg-bg pt-20'>
      <div className="relative">
        <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/samurai.png" alt="Logo" width={120} height={120} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
        </div>
      </div>

      <div className='bg-white m-8 mt-24 p-6 rounded-xl'>
        <Accordion type="single" collapsible className='pb-4'>
          <AccordionItem value="item-1">
            <AccordionTrigger>-Indicaciones-</AccordionTrigger>
            <AccordionContent>
                  Proporciona por favor toda la información requerida; trata de ser lo mas detallado (a) y especifico (a) posible, de ese modo podré contemplar una mayor cantidad de variables que serán de mucha ayuda para la elaboración de tus programas, considerando tus necesidades, características y objetivos.
                  <br></br>AL FINAL, ADJUNTA 4 FOTOS; DE FRENTE, DE ESPALDA Y DE AMBOS PERFILES
                  <br></br>-Si eres mujer: top deportivo y short leggings / licras cortas / bikini posador.

                  <br></br>-Si eres hombre: en boxer sin playera/ posador según categoría de competencia.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="numerotelefonico">Número Telefónico</Label>
          <Input type="text" id="numerotelefonico" placeholder="Tu número telefónico" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nombre">Nombre</Label>
          <Input type="name" id="nombre" placeholder="Tu nombre" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="peso">Peso (indica en qué momento del día realizaste la medición).</Label>
          <Input type="peso" id="peso" placeholder="Tu peso" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>
        
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="estatura">Estatura</Label>
          <Input type="estatura" id="estatura" placeholder="Tu estatura" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="Edad">Edad</Label>
          <Input type="edad" id="edad" placeholder="Tu edad" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="imc">Porcentaje de Grasa Corporal (si se conoce).</Label>
          <Input type="imc" id="imc" placeholder="Tu IMC" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="alimentosalergia">Alimentos a los que seas Alérgico (a).</Label>
          <Input type="text" id="alimentoalergico" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="alimentonoagrado">Alimentos que no toleres comer, o no sean de tu agrado en lo absoluto.</Label>
          <Input type="text" id="alimentoNoAgrado" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tiempoentrenando">Tiempo Que Llevas Entrenando</Label>
          <Input type="text" id="tiempoEntrenando" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="alimentolufestyle">Alimentación en un día común, de la forma más detallada posible.</Label>
          <Input type="text" id="alimentolifestyle" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 bg-red-200 p-2 mb-2 border-2 border-red-600 rounded-xl">
          <Label htmlFor="picture">Adjunta aquí una imagen de tu alimentación estructurada si es que cuentas con ella.</Label>
          <Input id="picture" type="file" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lifestyle">Narra un día de tu vida describiendo todas las actividades que realizas, así como sus horarios.</Label>
          <Input type="text" id="lifestyle" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lifestyle">Objetivo que buscas alcanzar.</Label>
          <Input type="text" id="objetivo" placeholder="Tu objetivo" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="lesiones">¿Tienes alguna lesión que te impida realizar alguna actividad físicia? Si sí, ¿en qué zona de tu cuerpo se encuentra localizada?</Label>
          <Input type="text" id="lesiones" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="enfermedades">¿Padeces hipertensión, diabetes o alguna otra enfermedad que se deba considerar?</Label>
          <Input type="text" id="enfermedades" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="tiempoejercicio">Tiempo disponible al día para realizar ejercicio.</Label>
          <Input type="text" id="tiempoEjercicio" placeholder="Tu respuesta" className='bg-red-200 border-2 border-red-600 mb-2'/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 bg-red-200 p-2 mb-2 border-2 border-red-600 rounded-xl">
          <Label htmlFor="picture">Inserta tus fotos Corporales.</Label>
          <Input id="picture" type="file" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 bg-red-200 p-2 mb-2 border-2 border-red-600 rounded-xl">
          <Label htmlFor="picture">Adjunta aquí una imagen de tu alimentación estructurada si es que cuentas con ella.</Label>
          <Input id="picture" type="file" />
        </div>

        <Button variant="outline" className='text-black border border-red-600'>Enviar</Button>

      </div>
    </div>
  )
}
