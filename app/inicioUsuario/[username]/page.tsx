"use client"
import React, { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BiSolidCircle, BiLogOut} from 'react-icons/bi';
import { BsFileEarmarkArrowDownFill} from 'react-icons/bs';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { GiWeightScale } from "react-icons/gi";
import { CiEdit, CiCalendar } from "react-icons/ci";
import { LiaPercentageSolid } from "react-icons/lia";
import { GiBodyHeight } from "react-icons/gi";
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { MdNotificationsActive } from 'react-icons/md';
import { Asesorado, NotificacionesAsesorado } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
function InicioUsuario({ params }: { params: { username: string } }) {
  const {handleSubmit, register} = useForm();


  // Accede al rol del usuario desde la sesión
  const [notificaciones, setNotificaciones] = useState<NotificacionesAsesorado[]>([]);
  const [file, setFile] = useState(null);
  const [asesorado, setAsesorado] = useState<Asesorado>();

  const fetchNotificaciones = async (username: string) => {
    const res = await fetch(`http://localhost:3000/api/notificacionesAsesorado/${username}`);
    const data = await res.json();
    setNotificaciones(data);
  };

  const fetchAsesorados = async (username: string) => {
    const res = await fetch(`http://localhost:3000/api/asesorados/${username}`);
    const data = await res.json();
    setAsesorado(data);
  };

  useEffect(() => {
   // fetchNotificaciones(params.username);
    fetchAsesorados(params.username);
  }, [params.username]);

 const [resena, setResena] = useState("");

 const form = (event) => {
  event.preventDefault()
  console.log(resena)
 }

  const onSubmit = handleSubmit(async (data) =>{
    const res = await fetch("/api/asesorados/" + params.id,{
      method: "PUT",
      body: JSON.stringify({
        edad: parseInt(data.edadUpdate),
        pesoInicial: parseInt(data.pesoUpdate),
        IMC: parseInt(data.imcUpdate),
        estatura: parseInt(data.estaturadUpdate)
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const resJSON = await res.json();
    if(res.ok){
      toast("Usuario Aceptado")
    }
  })

  return (
    <div className='bg-bg h-screen'>
      <div className='flex justify-between max-w-md p-4 items-center'>
        <div>
          <Sheet>
            <SheetTrigger>
              <TiThMenu className="text-4xl"></TiThMenu>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='text-red-500'><p>VCFAM</p></SheetTitle>
                <SheetDescription className='pt-10'>
                  <div>
                    <button className='flex items-center gap-2'>
                      <BiLogOut className="text-4xl text-black"></BiLogOut>
                      <p className='text-red-600 text-xl'>Cerrar Sesión</p>
                    </button>
                  </div>


                  {asesorado && asesorado.estado == "inactivo" && (
                                      <div>
                                      <button className='flex items-center gap-2'>
                                        <LiaMoneyBillWaveSolid className="text-4xl text-black"></LiaMoneyBillWaveSolid>
                                        <p className='text-red-600 text-xl'>Enviar Pago</p>
                                      </button>
                                    </div>
                  )}

         {notificaciones.map((notificacion)=>(
              <div key={notificacion.id}>
                <Alert>
                <MdNotificationsActive className={"text-xl"} />
              <AlertTitle className='text-left text-red-600'>Nueva Notificacion!</AlertTitle>
              <AlertDescription className='text-left'>
                {notificacion?.notificacion}
              </AlertDescription>
            </Alert>
              </div>
            ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="relative pt-4">
        <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/samurai.png" alt="Logo" width={100} height={100} />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center pt-16'>
        {asesorado && asesorado?.estado === "inactivo" && (
          <div className='flex flex-row items-center gap-2'>
            <p className='font-bold'>Mensualidad Inactiva</p>
            <BiSolidCircle className="text-red-500"></BiSolidCircle>
          </div>
        )}

        {asesorado && asesorado?.estado === "activo" && (
          <div className='flex flex-row items-center gap-2'>
            <p className='font-bold'>Mensualidad Activa</p>
            <BiSolidCircle className="text-green-400"></BiSolidCircle>
          </div>
        )}
        <div className='w-24'>
          <Separator className='bg-red-500' />
        </div>
        <p className='pt-2 text-2xl'>Bienvenido: {asesorado?.nombre}</p>
      </div>

      <div className='flex flex-row justify-between items-center p-6'>
        <div>
          <p className='font-bold text-2xl'>Descarga<br />tu plan</p>
        </div>
        <div>
          <BsFileEarmarkArrowDownFill className="text-4xl"></BsFileEarmarkArrowDownFill>
        </div>
      </div>

      <div className='m-6 p-2'>
        <div className='bg-white rounded-md mb-2'>
          <div className='flex items-center flex-row justify-between'>
            <p className='text-xl'>Tu Edad:{asesorado?.edad}</p>
            <div className='flex items-center'>
              <GiWeightScale className="text-red-600 text-4xl"></GiWeightScale>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-md  mb-2'>
          <div className='flex items-center flex-row justify-between'>
            <p className='text-xl'>Tu Peso:{asesorado?.pesoInicial}kg</p>
            <div className='flex items-center'>
              <CiCalendar className="text-red-600 text-4xl"></CiCalendar>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-md  mb-2'>
          <div className='flex items-center flex-row justify-between'>
            <p className='text-xl'>Tu IMC:{asesorado?.IMC}%</p>
            <div className='flex items-center'>
              <LiaPercentageSolid className="text-red-600 text-4xl"></LiaPercentageSolid>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-md  mb-2'>
          <div className='flex items-center flex-row justify-between'>
            <p className='text-xl'>Tu Estatura:{asesorado?.estatura}M</p>
            <div className='flex items-center'>
              <GiBodyHeight className="text-red-600 text-4xl"></GiBodyHeight>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><CiEdit /></Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edita tu Peso</DialogTitle>
              <DialogDescription>
                Mantener tu peso actualizado me ayudará a tomar la mejor decisión para tu plan.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="peso" className="text-right">
                  Tu Edad
                </Label>
                <Input
                  type='edadUpdate'
                  defaultValue={asesorado?.edad}
                  className="col-span-3"
                  {...register("edadUpdate", { required: {value:true, 
                    message:"Email es Obligatorio"}})}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="peso" className="text-right">
                  Tu Peso
                </Label>
                <Input
                  id="peso"
                  placeholder='Tu peso en Kilogramos'
                  defaultValue={asesorado?.pesoInicial}
                  className="col-span-3"
                  {...register("pesoUpdate", { required: {value:true, 
                    message:"Email es Obligatorio"}})}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="peso" className="text-right">
                  Tu IMC
                </Label>
                <Input
                  id="peso"
                  defaultValue={asesorado?.IMC}
                  className="col-span-3"
                  {...register("imcUpdate", { required: {value:true, 
                    message:"Email es Obligatorio"}})}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="peso" className="text-right">
                  Tu Estatura
                </Label>
                <Input
                  id="peso"
                  placeholder='Tu estatura en Centimetros'
                  defaultValue={asesorado?.estatura}
                  className="col-span-3"
                  {...register("estaturadUpdate", { required: {value:true, 
                    message:"Email es Obligatorio"}})}
                />
              </div>
            </div>
            <DialogFooter>
            <Button type="submit">Guardar Cambios</Button>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default InicioUsuario;
