import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '@/components/ui/ImageCarousel';
import { Stethoscope, CalendarHeart, Dna, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { removeHtmlTags } from '@/utils/helpers';


export default function Pet({ animal }) {
  console.log('pet');
  console.log(animal);
  const navigate = useNavigate();

  const handleAdoptClick = () => { 
    localStorage.removeItem('idPet');
    localStorage.setItem('idPet', animal?.id); 
    const userData = localStorage.getItem('userData');
    userData? navigate(`/pet-profile`): navigate('/login'); 
  }

  if (!animal || Object.keys(animal).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <div className="max-w-md rounded overflow-hidden shadow-lg p-6 bg-white text-center">
          <img className="w-full h-48 object-cover mb-4" src="https://via.placeholder.com/400x300?text=No+Mascota" alt="No se encontró mascota" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-3xl text-secondary mb-2">¡Lo sentimos!</h2>
            <p className="text-gray-700 text-base">
              No se encontró una mascota en este momento. Por favor, intenta nuevamente más tarde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[90%] mx-auto
      lg:flex-row justify-center items-center lg:py-28 ">
      <div className="max-w-4xl rounded overflow-hidden   w-full">
        <div className="lg:flex flex-col justify-center items-center lg:flex-row">
          <div className=" lg:w-1/2">
            <ImageCarousel images={animal?.imagenes} />
          </div>
          
          <div className="w-full lg:w-1/2 p-7 bg-beige bg-opacity-90 shadow-2xl ">
            <h2 className="font-bold text-4xl text-center text-secondary">
              {removeHtmlTags(animal?.nombre)}
            </h2>
            <div className="">
              <div className="border-l-4 border-beige pl-4 m-2">
                <h3 className="text-xl mb-2 text-orange font-extrabold">Descripción Física</h3>
                <p>{removeHtmlTags(animal?.desc_fisica)}</p>
              </div>
              <div className="border-l-4 border-beige p-4 m-2">
                <h3 className="text-xl mb-2 text-orange font-extrabold">Personalidad</h3>
                <p>{removeHtmlTags(animal?.desc_personalidad)}</p>
              </div>
            </div>

            <div className="flex justify-center text-center gap-10 lg:gap-2 items-center">
              <InfoItem icon={<Stethoscope />} label="Vacunas" value={removeHtmlTags(animal?.vacunas)} />
              <InfoItem icon={<Dna />} label="Tipo" value={removeHtmlTags(animal?.tipo)} />
              <InfoItem icon={<CalendarHeart />} label="Edad" value={removeHtmlTags(animal?.edad)} />
            </div>

            {/* <Link to={`/login/${animal.id}`} className="block w-full font-sans font-extrabold"> */}
              <Button
                bgColor="orange"
                hoverColor="orange-hover"
                iconPosition="end"
                onClick={()=>handleAdoptClick()}
                className="mt-4 text-black block w-full font-sans font-extrabold pointer"
              >
                Adopta Ahora
                <HeartHandshake />
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center rounded-full px-3 py-1 text-sm font-semibold mb-2">
      {icon}
      <span>{label}: {value}</span>
    </div>
  );
}
