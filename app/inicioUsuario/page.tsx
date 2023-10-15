import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TiThMenu } from 'react-icons/ti';
import { BiSolidCircle } from 'react-icons/bi';
import { BsFileEarmarkArrowDownFill, BsFire, BsGraphUp } from 'react-icons/bs';
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
                    <SheetTitle className='text-red-500'>VCFAM</SheetTitle>
                    <SheetDescription>
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
                <p className='underline underline-offset-8'>Actualizar</p>
            </div>
            <div className='grid grid-cols-2 gap-2 pt-4 place-content-center'>
                <div className='bg-red-300 rounded-md p-2 w-36 h-36'>
                    <BsFire className="text-6xl text-red-600"></BsFire>
                    <p className='text-2xl font-bold'>3500cal</p>
                </div>
                <div className='bg-green-300 rounded-md p-2 w-36 h-36'>
                    <p className='text-green-800 text-2xl font-bold'>Peso</p>
                    <p className='text-xl text-black font-bold'>100kg</p>
                    <BsGraphUp className="text-4xl"></BsGraphUp>
                </div>
                <div className='bg-orange-300 rounded-md p-2 w-36 h-36'>
                    <p className='text-orange-600 text-2xl font-bold'>IMC</p>
                    <p className='text-black text-xl'>35%</p>
                    <Progress value={35} />
                </div>
                <div className='bg-yellow-300 rounded-md p-2 flex flex-col items-center w-36 h-36'>
                    <p className='font-bold'>Lista de Compras</p>
                    <FcShop className="text-6xl"></FcShop>
                </div>
            </div>
        </div>
    </div>
  )
}
