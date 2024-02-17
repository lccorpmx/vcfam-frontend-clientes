"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BiSolidCircle, BiLogoWhatsapp } from 'react-icons/bi';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import { Asesorado } from '@prisma/client';
import { useSession } from 'next-auth/react';

async function loadAsesorado(id: string) {
  const res = await fetch("http://localhost:3000/api/asesorados/" + id);
  const data = await res.json();
  return data;
}

export default function PantallaEspera({ params }: { params: { id: string } }) {
  const { data: session } = useSession();

  console.log(session); // Aquí puedes ver la información del usua
  const [asesorado, setAsesorado] = useState<Asesorado>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadAsesorado(params.id);
        console.log(data)
        setAsesorado(data);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };

    fetchData();
  }, [params.id]);

  if(asesorado?.role==="coach"){
    console.log("hoo")
  }

  return (
    <div className='min-h-screen bg-red-200 pt-20'>
      <div className="relative">
        <div className="w-full h-1 border-b-4 border-red-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/samurai.png" alt="Logo" width={150} height={150} />
        </div>
      </div>

      {asesorado && asesorado.estado === 'nuevo' && (
        <div className='mt-28 flex items-center flex-col'>
          <p className='text-2xl'>Hola {asesorado.username} Bienvenido</p>
          <BiSolidCircle className="text-orange-400 w-8 h-8"></BiSolidCircle>
          <p className='text-red-600 text-4xl font-bold pt-2'>Vidal Calderon</p>
          <p className='text-center pt-2 text-2xl'>Coach Deportivo de<br />VCFAM, esta<br />revisando tu<br />información para<br />pertenecer al equipo</p>
          <Separator className='bg-red-600 w-24 mt-2' />
          <p className='text-red-600 text-xl font-bold text-center pt-2'>Cualquier duda,<br />no dudes en contactarnos<br />por WhatsApp</p>
          <p className='pt-2 text-lg'>Click Aquí</p>
          <BiLogoWhatsapp className="text-green-600 w-20 h-20"></BiLogoWhatsapp>
        </div>
      )}

      {asesorado && asesorado.estado === 'inactivo' && (
        <div className='mt-28 flex items-center flex-col'>
          <p className='text-2xl'>Hola {asesorado.username} Bienvenido</p>
          <BiSolidCircle className="text-green-400 w-8 h-8"></BiSolidCircle>
          <p className='text-red-600 text-4xl font-bold pt-2'>Vidal Calderon</p>
          <Separator className='bg-red-600 w-24 mt-2' />
          <p className='text-red-600 text-xl font-bold text-center pt-2'>Bienvenido a VCFAM</p>
          <Link href={`/inicioUsuario/${asesorado.id}`}><p className='pt-2 text-lg'>Click Aquí Para Continuar</p></Link>
        </div>
      )}
    </div>
  );
}
