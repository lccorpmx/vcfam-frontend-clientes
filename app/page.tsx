"use client"
import Image from 'next/image'
import { AiFillDownCircle } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {signIn, useSession} from 'next-auth/react'
import { Providers } from './Providers'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {


const {data:session} = useSession()
console.log(session)
  return (
    <main className="min-h-screen bg-bg pt-20">
      <header>
            <title>VCFAM</title>
          <meta name="description" content="VCFAM" />
          <link rel="manifest" href="/manifest.json" />
      </header>

      <div className="relative">
  <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <Image src="/samurai.png" alt="Logo" width={120} height={120} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
  </div>
</div>

<div className='p-6 flex flex-col items-center pt-24'>
  <p className='text-black text-2xl'>Bienvenidx a</p>
  <h1 className='text-red-500 font-bold text-6xl'>VCFAM</h1>

  <div className='flex items-center pt-4 gap-2 pb-4'>
    <AiFillDownCircle className="text-red-500"></AiFillDownCircle>
    <p className='text-black text-2xl'>Inicia Sesion con</p>
    <AiFillDownCircle className="text-red-500"></AiFillDownCircle>
  </div>
  <button onClick={() => signIn()}>
    <div className='p-4 bg-white rounded-full mb-4'>
        <FcGoogle className="text-4xl"></FcGoogle>
      </div>
  </button>
    <div className='w-80'>
      <div>
          <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl'>Nosotros - VCFAM</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div>
          <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl'>Que costo tiene?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div>
          <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl'>Que me ofrce VCFAM?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
</div>
    </main>
  )
}
