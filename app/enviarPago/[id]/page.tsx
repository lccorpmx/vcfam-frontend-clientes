"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
const supabase = createClient("https://nauwkxuflsoekewokoyj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdXdreHVmbHNvZWtld29rb3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNjAwMDEsImV4cCI6MjAxOTgzNjAwMX0.jtlAvG9B1d26jK79m7mM4Y3Mu28iB0FPmltgk4wRE-o")
const CDNURL = "https://nauwkxuflsoekewokoyj.supabase.co/storage/v1/object/public/pagos/"

export default function enviarPago({ params }: { params: { id: string } }) {
  const [file, setFile] = useState();
  const handleUpload = async () => {
    if (!file) return;

    const fileName = `${params.id}_${file.name}`;
    const { error } = await supabase.storage.from("pagos").upload(fileName, file);
    const url = CDNURL+fileName
    if (error) {
      toast("No se envio el Pago")
    } else {
      const res = await fetch("http://localhost:3000/api/pagos/" + params.id,{
        method:"POST",
        body: JSON.stringify({
          userId: parseInt(params.id),
          urlImage: url
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const resJSON = await res.json();
      if(res.ok){
        toast("Se ha Enviado el Pago Correctamente")
      }else{
        console.log("falo"+resJSON)
      }
    }
  };

  return (
    <div className='m-4 bg-red-600 rounded-xl p-2'>
      <div>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpload();
      }}>
        <label className='text-white text-xl' htmlFor="">Envia tu Comprobante de Pagos:</label>

        <input 
        className='mt-2 text-white'
        type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <Button className='mt-4 bg-white text-black'>Enviar Pago</Button>
      </form>
    </div>
  );
}
