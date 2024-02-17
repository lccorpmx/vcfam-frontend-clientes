"use client"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Login() {
    const { data: session, status } = useSession(); // Obtener la sesión del usuario
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false
        });

        if (res?.error) {
            toast(res.error);
        } else {
            toast("Iniciando Sesión");
            if(data.username == "admin"){
                await router.push("/inicioAdmin");
            }else{
                await router.push(`/inicioUsuario/${data.username}`);
                
            }
        }
    });

    return (
        <div>
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center p-6'>
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input type="text" id="username" placeholder="Manuel" className='bg-red-200 border-2 border-red-600 mb-2'
                        {...register("username", { required: true })} />
                    {errors.username && (
                        <span className='text-red-400'>{errors.username.message}</span>
                    )}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="******" className='bg-red-200 border-2 border-red-600 mb-2'
                        {...register("password", { required: true })} />
                    {errors.password && (
                        <span className='text-red-400'>{errors.password.message}</span>
                    )}
                </div>
                <Button type='submit' variant="outline" className='text-black border mt-6 border-red-600'>Iniciar Sesión</Button>
            </form>
        </div>
    );
}
