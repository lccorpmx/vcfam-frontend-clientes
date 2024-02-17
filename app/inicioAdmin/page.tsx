"use client"
import { FaUserEdit } from 'react-icons/fa';
import { TbUserCancel } from 'react-icons/tb';
import CircleStatus from '@/components/CircleStatus';
import Header from '@/components/Header'


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from 'next/link';

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
import { toast } from "sonner"


async function loadAsesorados() {
  const res = await fetch(`http://localhost:3000/api/asesorados?timestamp=${Date.now()}`);
  const data = await res.json();
  return data
}

async function loadPagos() {
  const res = await fetch(`http://localhost:3000/api/pagos?timestamp=${Date.now()}`);
  const data = await res.json();
  return data
}

const eliminarAsesorado = async (id: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/asesorados/" + id, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Actualizar el estado local o realizar cualquier acción adicional si es necesario
      console.log('Asesorado eliminado exitosamente');
    } else {
      console.error('Error al eliminar el asesorado:', response.statusText);
    }
  } catch (error) {
    console.error('Error en la solicitud de eliminación:', error);
  }
};


export default async function useInicio() {
  const asesorados = await loadAsesorados();
  const pagos = await loadPagos()
  return (
    <div className='min-h-screen bg-bgWhite'>
      <Header pagos={pagos} asesorados={asesorados}></Header>
        <div className='m-8 border-4 border-red-500 rounded-lg p-4 bg-white mt-24'>
          <div className='flex items-center justify-between'>
            <div className='text-4xl font-bold'>COACH <span className='font-medium'><br />Vidal Calderon</span></div>

          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
          <Table>
  <TableCaption>Lista de Asesorados Activos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Nombre</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Prox. Pago</TableHead>
      <TableHead>Revision</TableHead>
      <TableHead>Editar</TableHead>
      <TableHead>Expulsar</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {asesorados
  .filter(asesorado => asesorado.role === 'asesorado' && asesorado.estado === 'activo')
  .map((asesorado) => (
    <TableRow key={asesorado.id}>
      <TableCell className="font-medium">{asesorado.id}</TableCell>
      <TableCell>{asesorado.username}</TableCell>
      <TableCell>Definicion</TableCell>
      <TableCell>12/05/2023</TableCell>
      {asesorado.revision === 'pendiente' && (
        <TableCell><CircleStatus isActive={false} /></TableCell>
      )}
      {asesorado.revision === 'revisado' && (
        <TableCell><CircleStatus isActive={true} /></TableCell>
      )}
      <TableCell><Link href={`/asesorados/${asesorado.id}`}><FaUserEdit className='text-4xl text-blue-500' /></Link></TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500' /></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estás seguro que deseas expulsar al usuario?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción será permanente y todo el progreso y datos almacenados del usuario serán eliminados y no podrán ser recuperados.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => eliminarAsesorado(asesorado.id)}>Expulsar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
))}

  </TableBody>
</Table>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
          <Table>
  <TableCaption>Lista de Asesorados Inactivos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Nombre</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Prox. Pago</TableHead>
      <TableHead>Revision</TableHead>
      <TableHead>Editar</TableHead>
      <TableHead>Estado</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {asesorados
  .filter(asesorado => asesorado.role === 'asesorado' && asesorado.estado === 'inactivo')
  .map((asesorado) => (
    <TableRow key={asesorado.id}>
      <TableCell className="font-medium">{asesorado.id}</TableCell>
      <TableCell>{asesorado.username}</TableCell>
      <TableCell>Definicion</TableCell>
      <TableCell>12/05/2023</TableCell>
      {asesorado.revision === 'pendiente' && (
        <TableCell><CircleStatus isActive={false} /></TableCell>
      )}
      {asesorado.revision === 'revisado' && (
        <TableCell><CircleStatus isActive={true} /></TableCell>
      )}
      <TableCell><Link href={`/asesorados/${asesorado.id}`}><FaUserEdit className='text-4xl text-blue-500' /></Link></TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger><TbUserCancel className='text-4xl text-red-500' /></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estás seguro que deseas aceptar al usuario?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta accion activara la sucripcion del asesorado
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => eliminarAsesorado(asesorado.id)}>Expulsar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
))}

  </TableBody>
</Table>
          </div>

          <div className='border-2 border-red-500 rounded-lg mt-12 mb-6'>
          <Table>
  <TableCaption>Lista de Asesorados Nuevos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Nombre</TableHead>
      <TableHead>Aceptar</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {asesorados
  .filter(asesorado => asesorado.role === 'asesorado' && asesorado.estado === 'nuevo')
  .map((asesorado) => (
    <TableRow key={asesorado.id}>
      <TableCell className="font-medium">{asesorado.id}</TableCell>
      <TableCell>{asesorado.username}</TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger>Aceptar</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Estás seguro que deseas aceptar al usuario?</AlertDialogTitle>
              <AlertDialogDescription>
                Al aceptar al usuario es integrante de VCFAM
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={async()=> {
                    const res = await fetch("/api/asesorados/" + asesorado.id,{
                      method: "PUT",
                      body: JSON.stringify({
                        estado: "inactivo"
                      }),
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    })
                    const resJSON = await res.json();
                    if(res.ok){
                      toast("Tus datos han sido actualizados")
                    }
              }}>Aceptar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
))}

  </TableBody>
</Table>
          </div>
        </div>
        </div>


  )
}

