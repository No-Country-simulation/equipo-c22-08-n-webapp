import { useState, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { User, MapPin, ArrowRight, Phone, Mail, MapPinHouse } from 'lucide-react';
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';
import SelectForm from '@/components/ui/SelectForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PetProfile from '@/hooks/PetProfile';


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
  // metodoContacto: zod.enum(['email', 'telefono', 'ambos'], { 
  //   message: 'Selecciona un método de contacto' 
  // }),
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
        name="nombre"
        id="nombre"
        placeholder="Alejandro, Maria, etc."
        error={errors.nombre?.message}
        {...register('nombre')}
      />
      <InputForm
        label="Apellido"
        type="text"
        icon={User}
        name="apellido"
        
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
      <h2 className="text-xl font-semibold text-primary mb-4">Ubicación</h2>
      <div className='md:flex gap-3'>
        <InputForm
          label="Ciudad"
          type="text"
          icon={MapPin}
          placeholder="Bogota, Medellin, etc."
          error={errors.ciudad?.message}
          {...register('ciudad')}
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
      <InputForm
        label="Dirección"
        type="text"
        icon={MapPinHouse}
        placeholder="calle 123, apto 101, etc."
        error={errors.direccion?.message}
        {...register('direccion')}
      />
     
    </div>
  );
};

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-4">
      <h2 className="
            text-xl font-semibold text-primary p-4 
            bg-opacity-60 inline mb-4">Métodos de Contacto</h2>
         <div className='md:flex gap-3'>
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
      </div>  
      {/* <SelectForm
        label="Método de Contacto Preferido"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'telefono', label: 'Teléfono' },
          { value: 'ambos', label: 'Ambos' },
        ]}
        error={errors.metodoContacto?.message}
        {...register('metodoContacto')}
      /> */}
    </div>
  );
};

const CreateAccountMultiStep = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [idMascota, setIdMascota] = useState(null);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: getResolver(step),
  });

  useEffect(() => {

    try {
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      setIdMascota(localStorage.getItem('idPet'));
      if (storedUserData) {
        console.log("SI ESTOY ENTRANDO AL IF",storedUserData.user)
        console.log("SI ESTOY ENTRANDO AL USER",storedUserData.user)
        const { email, name } = storedUserData.user;
        setFormData({ email, nombre: name });
        methods.reset({ email, nombre: name });
      }
    } catch (error) {
      let storedUserData = null;
    }

    const idPet = localStorage.getItem('idPet');

    if (idPet === null || idPet === undefined || idPet === '') {
      navigate('/adoption');
    }



    // Ahora, verificamos si hay una solicitud almacenada en localStorage
    
    // const storedSolicitud = JSON.parse(localStorage.getItem('solicitud'));
    // if (storedSolicitud) {
    //   setFormData((prevData) => ({ ...prevData, ...storedSolicitud }));
    //   setIdMascota(storedSolicitud.idMascota);
    //   methods.reset((prevData) => ({ ...prevData, ...storedSolicitud }));
    // } else {

    //   const newIdMascota = `${idPet}`;
    //   setIdMascota(newIdMascota);
    // }
  }, [methods]);

  const onNext = async () => {
    const valid = await methods.trigger();
    if (valid) {
      const currentStepData = methods.getValues();

      const newFormData = {
        ...formData,
        ...currentStepData,
        idMascota,
        fechaSolicitud: new Date().toISOString(),
        solicitudInfo: {
          tipoSolicitud: "adopcion",
          status: "pendiente"
        }
      };
      setFormData(newFormData);

      
      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else {
        console.log('Datos completos de la solicitud:', newFormData);
        toast.success('Solicitud completada exitosamente!')
          
        const existingSolicitudes = JSON.parse(localStorage.getItem('solicitud')) || [];
        
        const updatedSolicitudes = [...existingSolicitudes, newFormData];
        const solicitudIndex = existingSolicitudes.findIndex(solicitud => solicitud.idMascota === idMascota);
        if (solicitudIndex !== -1) {
          existingSolicitudes[solicitudIndex] = newFormData;
        } else {
          existingSolicitudes.push(newFormData);
        }
        localStorage.setItem('solicitud', JSON.stringify(updatedSolicitudes));

        setTimeout(() => {
          navigate('/adoption');
        }, 1500);

      }
    }
  };

  const onPrev = () => setStep(step - 1);

  return (
    <main className='lg:grid lg:grid-cols-2 md:mt-32 
                gap-8 p-8 overflow-hidden items-center justify-center'>
      <PetProfile/>

    <div className="shadow-md bg-beige-light 
        bg-opacity-80 rounded-xl m-auto 
        lg:m-0 max-w-3xl ml-auto mt-2">
        
      <FormProvider {...methods}>
        <ToastContainer />
        <form className="shadow-gray shadow-md rounded-xl">
          <h2 className="text-3xl font-bold text-center text-white-2 py-4 bg-gray-dark mb-6">
            Solicitud de adopción
          </h2>
          <div className="pb-8 px-8">
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
          </div>

          <div className="flex justify-between pb-5 px-4">
            <Button
              type="button"
              onClick={onPrev}
              disabled={step === 1}
              bgColor="secondary"
              className="text-white-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Anterior
            </Button>
            <Button
              type="button"
              onClick={onNext}
              bgColor="orange"
              iconPosition="end"
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {step === 3 ? 'Enviar' : 'Siguiente'}
              <ArrowRight className='text-secondary' />
            </Button>
          </div>
        </form>
      </FormProvider>
    </div> 
    </main>
  );
};

export default CreateAccountMultiStep;
