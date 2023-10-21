import React from 'react'
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TiThMenu } from 'react-icons/ti';
import { BiSolidCircle, BiLogOut, BiSolidCameraPlus } from 'react-icons/bi';
import { BsFileEarmarkArrowDownFill, BsFire, BsGraphUp } from 'react-icons/bs';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { FcShop } from 'react-icons/fc';
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

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

  
export default function inicioUsuario() {
  return (
    <div className='bg-bg h-screen'>
        <div className='flex justify-between max-w-md p-4 items-center'>
            <div>
                <Avatar className=''>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
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
                        <div className='flex items-center gap-2 mt-4'>
                            <LiaMoneyBillWaveSolid className="text-4xl text-black"></LiaMoneyBillWaveSolid>
                            <p className='text-red-600 text-xl'>Enviar Pago</p>
                        </div>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>
        </div>

        <div className="relative pt-4">
            <div className="w-full h-1 border-b-4 border-red-500"></div> {/* Línea */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image src="/samurai.png" alt="Logo" width={100} height={100} /> {/* Reemplaza '/ruta-del-logo.png' por la ruta de tu logo y ajusta width y height según tu logo */}
            </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-16'>
            <div className='flex flex-row items-center gap-2'>
                <p className='font-bold'>Mensualidad Activa</p>
                <BiSolidCircle className="text-green-400"></BiSolidCircle>
            </div>
            <div className='w-24'>
                <Separator className='bg-red-500'/>
            </div>
        </div>

        <div className='flex flex-row justify-between items-center p-6'>
            <div>
                <p className='font-bold text-2xl'>Descarga<br/>tu plan</p>
            </div>
            <div>
                <BsFileEarmarkArrowDownFill className="text-4xl"></BsFileEarmarkArrowDownFill>
            </div>
        </div>

        <div className='bg-white m-6 rounded-md p-2'>
            <div className='flex items-center flex-row justify-between'>
                <p>Control</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Actualizar</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle className='text-red-600'>Actualiza Tus Datos Corporales</DialogTitle>
                        <DialogDescription>
                            Actualizar tus datos constantemente beneficiara en el control de tu progreso.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            Peso
                            </Label>
                            <Input
                            id="name"
                            defaultValue="100"
                            className="col-span-3 bg-green-200 border border-green-600"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                            IMC
                            </Label>
                            <Input
                            id="username"
                            defaultValue="36%"
                            className="col-span-3 bg-orange-200 border border-orange-600"
                            />
                        </div>
                        </div>
                        <DialogFooter>
                        <Button type="submit">Actualizar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
            <div className='grid grid-cols-2 gap-2 pt-4 place-content-center'>
                <div className='bg-red-300 rounded-md p-2 w-36 h-36'>
                    <p className='text-2xl font-bold text-red-600 pb-2'>Calorias</p>
                    <p className='text-4xl font-bold'>3500</p>
                    <BsFire className="text-4xl text-red-600"></BsFire>
                </div>
                <div className='bg-green-300 rounded-md p-2 w-36 h-36'>
                    <p className='text-green-800 text-2xl font-bold pb-2'>Peso</p>
                    <p className='text-xl text-black font-bold'>100kg</p>
                </div>
                <div className='bg-orange-300 rounded-md p-2 w-36 h-36'>
                    <p className='text-orange-600 text-2xl font-bold pb-2'>IMC</p>
                    <p className='text-black text-xl'>35%</p>
                    <Progress value={35} />
                </div>
                <div className='bg-yellow-200 rounded-md p-2 flex flex-col items-center w-36 h-36'>
                    <p className='font-bold pb-2 text-yellow-800'>Lista de Compras</p>
                    <FcShop className="text-6xl"></FcShop>
                </div>
            </div>
        </div>

        <div className='bg-white m-6 rounded-md p-2'>
            <div className='flex items-center flex-row justify-between'>
                <p className='text-xl'>Enviar Fotos Corporales</p>
                <BiSolidCameraPlus className="text-red-600 text-4xl"></BiSolidCameraPlus>
            </div>
        </div>
    </div>
  )
}