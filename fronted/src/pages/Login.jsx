import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Github, Facebook, Twitter, HeartHandshake } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button  from '@/components/ui/button';
import InputForm from '@/components/ui/InputForm';


// Define validation schema
const loginSchema = z.object({
  email: z.string()
   .email({ message: 'Ingrese un correo electrónico válido' })
    .min(1, { message: 'El email es requerido' }),
  password: z.string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .regex(/(?=.*[a-z])/, { message: 'Debe contener al menos una letra minúscula' })
    .regex(/(?=.*[A-Z])/, { message: 'Debe contener al menos una letra mayúscula' })
    .regex(/(?=.*[0-9])/, { message: 'Debe contener al menos un número' }),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleInputChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };
     

  return (
        <div className="p-8 bg-white-2">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome PetFriend 😊</h1>
            <p className="text-gray-dark text-sm">
             Conecta con este gran mundo de las mascotas y hazlas felices 
            </p>
          </div>

          <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
          
              <InputForm
                type="email"
                placeholder="Email Address"
                icon={Mail}
                 error={errors.email?.message}
              {...register('email')}
              onChange={(value) => handleInputChange('email', value)}
                className="focus:ring-1 focus:ring-beige focus:border-beige"
              />

              <InputForm
                type="password"
                placeholder="Password"
                icon={Lock}
              error={errors.password?.message}
              {...register('password')}
              onChange={(value) => handleInputChange('password', value)}
                className="focus:ring-1 focus:ring-beige focus:border-beige"
              />

            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" 
                className="rounded focus:ring-orange" />
                <span className="text-sm ">Recordar</span>
              </label>
              <Link 
                to="/recover-password"  
                className="text-sm text-primary">¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary text-beige  
              font-bold py-3 rounded-lg  transition"
            >
              Adopta Ahora
              <HeartHandshake/>
            </Button>

            <div className="text-center">
              <Link to={'/create-account'} 
                className="text-sm text-gray-dark mb-4">O crea tu cuenta </Link>
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
        </div>
     
  );
};

export default Login;

     
