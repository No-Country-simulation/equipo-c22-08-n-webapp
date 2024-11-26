
import React from 'react'
import InputForm from '@/components/ui/InputForm';

import { Link } from 'react-router-dom';

import { Mail, Lock,ArchiveRestore  } from 'lucide-react';
import Button from '@/components/ui/Button';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';



const loginSchema = z.object({
  email: z.string()
   .email({ message: 'Ingrese un correo electrónico válido' })
    .min(1, { message: 'El email es requerido' }),
});


const RecoverPassword = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    }
  });

  const handleInputChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

    return (
      <>
       <div className="p-10 bg-white-2 ">
       
            <div className="mb-8 w-96">
              <h1 className="text-2xl font-bold mb-2">Welcome PetFriend 😊</h1>
              <p className="text-gray-dark text-sm">
               ¿Olvidaste tu contraseña? 🤨    
              </p>
            </div>
            
            <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <InputForm
                    type="email"
                      placeholder="Email Address"
                    icon={Mail}
                    className="focus:ring-1 focus:ring-beige focus:border-beige"
                    error={errors.email?.message}
                    {...register('email')}
                     onChange={(value) => handleInputChange('email', value)}
                    />
            
                    <Button 
                      type="submit"
                      iconPosition={'end'}
                      className="w-full bg-secondary text-beige  
                      font-bold py-3 rounded-lg transition"
                    >
                      Recuperar Contraseña
                      <ArchiveRestore/>
                    </Button>
            
            
                </div>
            
               <div className="text-center mt-4">
                <Link to={'/login'} 
                  className="text-sm text-gray-dark mb-4">Regresa al login </Link>
                {/* <div className="flex justify-center space-x-4">
                  <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition">
                    <Github className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition">
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </button>
                </div> */}
              </div>
              </form>
          {/* </div> */}

        </div>

    
      </>
    )
}     

export default RecoverPassword

