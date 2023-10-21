import React from 'react'
import Image from 'next/image'
import { BiSolidCircle, BiLogoWhatsapp } from 'react-icons/bi';
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function pantallaEspera() {
  return (
    <div className='min-h-screen bg-red-200 pt-20'>
        <div className="relative">
            <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/samurai.png" alt="Logo" width={150} height={150} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
            </div>
      </div>

      <div className='mt-28 flex items-center flex-col'>
      <BiSolidCircle className="text-orange-400 w-8 h-8"></BiSolidCircle>
      <p className='text-red-600 text-4xl font-bold pt-2'>Vidal Calderon</p>
      <p className='text-center pt-2 text-2xl'>Coach Deportivo de<br/>VCFAM, esta<br/>revisando tu<br/>información para<br/>pertenecer al equipo</p>
      <Separator className='bg-red-600 w-24 mt-2' />
      <p className='text-red-600 text-xl font-bold text-center pt-2'>Cualquier duda,<br/>no dudes en contactarnos<br/>por WhatsApp</p>
      <p className='pt-2 text-lg'>Click Aquí</p>
      <BiLogoWhatsapp className="text-green-600 w-20 h-20"></BiLogoWhatsapp>
      </div>

    </div>
  )
}
