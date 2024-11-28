import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { User, MapPin, ArrowRight, Phone, Mail, MapPinHouse } from 'lucide-react';
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';
import SelectForm from '../components/ui/SelectForm';

// Validation Schemas
const schemaStep1 = zod.object({
  nombre: zod.string().min(2, { message: 'Nombre completo es requerido' }),
  apellido: zod.string().min(2, { message: 'Apellido es requerido' }),
  edad: zod.string().refine((val) => {
    const age = parseInt(val, 10);
    return !isNaN(age) && age >= 18 && age <= 120;
  }, { message: 'Edad debe ser un número entre 18 y 120' }),
});

const schemaStep2 = zod.object({
  ciudad: zod.string().min(2, { message: 'Ciudad es requerida' }),
  direccion: zod.string().min(5, { message: 'Dirección completa es requerida' }),
  codigoPostal: zod.string().regex(/^\d{5}$/, { message: 'Código postal debe tener 5 dígitos' }),
});

const schemaStep3 = zod.object({
  email: zod.string().email({ message: 'Email no válido' }),
  telefono: zod.string().regex(/^[0-9]{10}$/, { message: 'Teléfono debe tener 10 dígitos' }),
  metodoContacto: zod.enum(['email', 'telefono', 'ambos'], { 
    message: 'Selecciona un método de contacto' 
  }),
});

const getResolver = (step) => {
  if (step === 1) return zodResolver(schemaStep1);
  if (step === 2) return zodResolver(schemaStep2);
  if (step === 3) return zodResolver(schemaStep3);
  return null;
};

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-dark mb-4">Información Personal</h2>
      <InputForm
        label="Nombre"
        type="text"
        icon={User}
        placeholder="Alejandro, Maria, etc."
        error={errors.nombre?.message}
        {...register('nombre')}
      />
      <InputForm
        label="Apellido"
        type="text"
        icon={User}
        placeholder="Fernadez, Alvarez, etc."
        error={errors.apellido?.message}
        {...register('apellido')}
      />
      <InputForm
        label="Edad"
        type="number"
        icon={User}
        placeholder="34"
        error={errors.edad?.message}
        {...register('edad')}
      />
    </div>
  );
};

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Ubicación</h2>
      <InputForm
        label="Ciudad"
        type="text"
        icon={MapPin}
        placeholder="Bogota, Medellin, etc."
        error={errors.ciudad?.message}
        {...register('ciudad')}
      />
      <InputForm
        label="Dirección"
        type="text"
        icon={MapPinHouse}
        placeholder="calle 123, apto 101, etc."
        error={errors.direccion?.message}
        {...register('direccion')}
      />
      <InputForm
        label="Código Postal"
        type="text"
        icon={MapPinHouse}
        placeholder="12345"
        error={errors.codigoPostal?.message}
        {...register('codigoPostal')}
      />
    </div>
  );
};

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray mb-4">Métodos de Contacto</h2>
      <InputForm
        label="Correo Electrónico"
        type="email"
        icon={Mail}
        placeholder="ejemplo@gmail.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <InputForm
        label="Teléfono"
        type="tel"
        icon={Phone}
        placeholder="+57 323 456 7890"
        error={errors.telefono?.message}
        {...register('telefono')}
      />
      {/* <div className="mb-4">
        <label className="block text-gray text-sm font-bold mb-2">
          Método de Contacto Preferido
        </label>
        <select
          {...register('metodoContacto')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-dark leading-tight focus:outline-none focus:shadow-outline 
            ${errors.metodoContacto ? 'border-red' : 'border-gray'}`}
        >
          <option value="">Selecciona un método de contacto</option>
          <option value="email">Email</option>
          <option value="telefono">Teléfono</option>
          <option value="ambos">Ambos</option>
        </select>
        {errors.metodoContacto && (
          <p className="text-red text-xs italic">{errors.metodoContacto.message}</p>
        )}
      </div> */}

      <SelectForm
        label="Método de Contacto Preferido"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'telefono', label: 'Teléfono' },
          { value: 'ambos', label: 'Ambos' },
        ]}
        error={errors.metodoContacto?.message}
        {...register('metodoContacto')}
      />


    </div>
  );
};

const CreateAccountMultiStep = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const methods = useForm({
    resolver: getResolver(step)
  });

  const onNext = async () => {
    const valid = await methods.trigger();
    if (valid) {
      // Save current step's data
      const currentStepData = methods.getValues();
      setFormData(prev => ({ ...prev, ...currentStepData }));

      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else {
        console.log('Complete Form Data:', { ...formData, ...currentStepData });
        alert('Cuenta creada exitosamente!');
      }
    }
  };

  const onPrev = () => setStep(step - 1);

  return (
   <div 
    className="shadow-md bg-beige-light     
      rounded-lg m-auto lg:m-0 max-w-2xl ml-auto mt-2">

      <FormProvider {...methods}>
        <form className="
        shadow-beige 
           shadow-lg 
            
            rounded-lg  ">
          <h2 
            className="text-3xl font-bold text-center
           text-white-2 py-4 bg-gray-dark mb-6">
            Solicitud de adopción
          </h2>
          <span></span>
        <div className=' pb-8 px-8'>  
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
        </div>
          
          <div className="flex justify-between pb-5 px-4 ">
            <Button 
              type="button"
              onClick={onPrev}
              disabled={step === 1}
              bgColor="secondary"
              className="text-white-2 font-bold py-2 px-4 
                rounded focus:outline-none focus:shadow-outline"
            >
              Anterior
            </Button>
            <Button
              type="button"
              onClick={onNext}
              bgColor="orange"
              iconPosition="end"
              className="text-white font-bold py-2 px-4 
                rounded focus:outline-none focus:shadow-outline"
            >
              {step === 3 ? 'Enviar' : 'Siguiente'}
              <ArrowRight className=' text-secondary'/>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateAccountMultiStep;