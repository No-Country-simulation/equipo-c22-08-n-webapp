import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputForm from '@/components/ui/InputForm';
import Button from '@/components/ui/Button';
import { Mail, UserRoundPlus, Smartphone, CircleUser, Lock, SquarePlus } from 'lucide-react';

// Definición del esquema de validación
const createAccountSchema = z.object({
  fullName: z.string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    .max(50, { message: 'El nombre no puede exceder 50 caracteres' })
    .optional(),

    //  .refine((val) => !val || /^\d{5}$/.test(val), {    /// perosnalizar opcionales
    //   message: 'Código postal debe tener 5 dígitos si se proporciona'
    // }),
  username: z.string()
    .min(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres' })
    .max(20, { message: 'El nombre de usuario no puede exceder 20 caracteres' })
    .regex(/^[a-zA-Z0-9_]+$/, { message: 'Solo se permiten letras, números y guiones bajos' }),
  email: z.string()
    .email({ message: 'Ingrese un correo electrónico válido' }),
  phone: z.string()
    .regex(/^\+?[0-9]{10,15}$/, { message: 'Ingrese un número de teléfono válido' }),
  password: z.string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .regex(/(?=.*[a-z])/, { message: 'Debe contener al menos una letra minúscula' })
    .regex(/(?=.*[A-Z])/, { message: 'Debe contener al menos una letra mayúscula' })
    .regex(/(?=.*[0-9])/, { message: 'Debe contener al menos un número' }),
  userType: z.enum(['adopter', 'provider'], {
    required_error: 'Seleccione un tipo de usuario'
  })
});

const CreateAccount = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      userType: 'adopter'
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Aquí irá la lógica de envío del formulario
  };

  // Función auxiliar para manejar los cambios en InputForm
  const handleInputChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <div className="">
      <div className="bg-white-2 rounded-lg shadow-md w-full max-w-md p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome PetFriend 😊</h2>
          <p className="">
            Conecta con este gran mundo de las mascotas y hazlas felices
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputForm
            label="Nombre Completo"
            type="text"
            placeholder="Nombre Completo"
            icon={CircleUser}
            error={errors.fullName?.message}
            {...register('fullName')}
            onChange={(value) => handleInputChange('fullName', value)}
          />

          <InputForm
            label="Nombre de Usuario"
            type="text"
            icon={UserRoundPlus}
            placeholder="Nombre de Usuario"
            error={errors.username?.message}
            {...register('username')}
            onChange={(value) => handleInputChange('username', value)}
          />

          <InputForm
            label="Correo Electrónico"
            type="email"
            icon={Mail}
            placeholder="Correo Electrónico"
            error={errors.email?.message}
            {...register('email')}
            onChange={(value) => handleInputChange('email', value)}
          />

          <InputForm
            label="Teléfono"
            type="tel"
            placeholder="Teléfono"
            icon={Smartphone}
            error={errors.phone?.message}
            {...register('phone')}
            onChange={(value) => handleInputChange('phone', value)}
          />

          <InputForm
            label="Contraseña"
            type="password"
            icon={Lock}
            placeholder="Contraseña"
            error={errors.password?.message}
            {...register('password')}
            onChange={(value) => handleInputChange('password', value)}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Usuario
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="adopter"
                  {...register('userType')}
                  className="mr-2"
                />
                <span className="text-sm">Adoptar</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="provider"
                  {...register('userType')}
                  className="mr-2"
                />
                <span className="text-sm">Aportar</span>
              </label>
            </div>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType.message}</p>
            )}
          </div>

          <Button
            type="submit"
            iconPosition="end"
            className="w-full bg-secondary text-beige font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Crear Cuenta
            {/* <SquarePlus /> */}
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Iniciar Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;