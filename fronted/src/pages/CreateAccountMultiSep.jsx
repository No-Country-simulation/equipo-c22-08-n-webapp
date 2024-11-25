
import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Button from '@/components/ui/Button';

// Esquemas de validación
const schemaStep1 = zod.object({
  nombre: zod.string().min(5, { message: 'El nombre es obligatorio' }),
});

const schemaStep2 = zod.object({
  email: zod.string().email({ message: 'El email no es válido' }),
  accion: zod.enum(['adoptar', 'dar en adopción'], { required_error: 'Selecciona una opción' }),
});
const schemaStep3 = zod.object({
  email: zod.string().email({ message: 'El email no es válido' }),
  accion: zod.enum(['adoptar', 'dar en adopción'], { required_error: 'Selecciona una opción' }),
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
    <div className="mb-4">
      <label className="block text-gray-dark text-sm font-bold mb-2">Nombre</label>
      <input
        {...register('nombre')}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline 
          ${errors.nombre ? 'border-red-500' : 'border-secondary'}`}
      />
      {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre.message}</p>}
    </div>
  );
};

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-dark text-sm font-bold mb-2">Email</label>
        <input
          {...register('email')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline 
            ${errors.email ? 'border-red-500' : 'border-gray-light'}`}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-dark text-sm font-bold mb-2">¿Qué deseas hacer?</label>
        <select
          {...register('accion')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark leading-tight focus:outline-none focus:shadow-outline 
            ${errors.accion ? 'border-red-500' : 'border-gray-light'}`}
        >
          <option value="">Selecciona una opción</option>
          <option value="adoptar">Adoptar</option>
          <option value="dar en adopción">Dar en adopción</option>
        </select>
        {errors.accion && <p className="text-red-500 text-xs italic">{errors.accion.message}</p>}
      </div>
    </>
  );
};

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm/6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm/6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm/6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

    </>
  );
};


const CreateAccountMultiSep = () => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: getResolver(step)
  });

  const onNext = async () => {
    const valid = await methods.trigger();
    if (valid) {
      if (step === 1) {
        setStep(2);
      } else if (step === 2) {
        setStep(3);
      } else {

        console.log(methods.getValues());
      }
    }
  };

  const onPrev = () => setStep(step - 1);

  return (
    <div>
      <FormProvider {...methods}>
        <form className="bg-white-2  rounded px-8 pt-6 pb-8  w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-dark mb-6">Crear cuenta</h2>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3/>}
          <div className="flex justify-between mt-6">
            <Button 
              type="button"
              onClick={onPrev}
              disabled={step === 1}
              bgColor="secondary"
              className="text-white-2 font-bold 
                py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Anterior
            </Button>
            <Button
              type="button"
              onClick={onNext}
              bgColor="orange"
              className="text-white-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {step === 3 ? 'Enviar' : 'Siguiente'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateAccountMultiSep;
