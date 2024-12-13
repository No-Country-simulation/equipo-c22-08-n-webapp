import React, { useState, useEffect } from 'react';
import { 
  Dog, Palette, Ruler, Siren,
  Heart, Shield, Syringe, Clipboard
} from 'lucide-react';
import ImageCarousel from '@/components/ui/ImageCarousel';
import Button from '@/components/ui/Button';
import { removeHtmlTags } from '@/utils/helpers';

export default function PetProfile() {
  const [activeSection, setActiveSection] = useState('info');
  const [isFollowed, setIsFollowed] = useState(false);
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem('idPet');

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/animal/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log('data', data);
          setAnimal(data.data);
          setLoading(false);
        })
        .catch(error => {      
          console.error('Error fetching animal data:', error);
        });
    } else {
      console.error('Invalid ID');
    }
  }, [id]);

  const renderSection = () => {
    switch(activeSection) {
      case 'info':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 bg-gray-light rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Ruler className="w-6 h-6 text-primary mb-2" />
                <span className="font-semibold">{animal?.edad}</span>
              </div>
              <div className="flex flex-col items-center">
                <Dog className="w-6 h-6 text-secondary mb-2" />
                <span className="font-semibold">{animal?.genero}</span>
              </div>
              {/* <div className="flex flex-col items-center">
                <Palette className="w-6 h-6 text-green-lila mb-2" />
                <span className={`font-semibold h-3 w-4 bg-[${animal?.color}]`}></span>
              </div> */}
              <div className="flex flex-col items-center">
                <Siren className="w-6 h-6 text-secondary mb-2" />
                <span 
                  className={`font-semibold`}>
                  {animal?.estado}
                  </span>
              </div>
            </div>
          </div>
        );

      case 'health':
        return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 bg-gray-light rounded-xl p-4">

              <div className="flex flex-col items-center">
               <Syringe className="w-6 h-6 text-secondary mb-2" />
                <span className="font-semibold">Vacunas: 
                  {animal?.vacunas ? 'Sí' : 'No'}</span>
              </div>
               <div className="flex flex-col items-center">
                   <Shield className="w-6 h-6 text-primary mb-2" />
                   <span className="font-semibold">Esterilizado: 
                    {animal?.esterilizado ? 'Sí' : 'No'}</span>
                </div>
          </div>
        </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-beige-light bg-opacity-85  shadow-md rounded-lg m-auto 
          pb-20 max-w-2xl ">
        <div className="bg-gradient-to-r  flex items-center justify-center">
          <div className="relative w-full">
            {!loading && animal.imagenes && (
              <ImageCarousel 
                images={animal?.imagenes}
                clases={" w-full border-white -top-3 "}
              />
            )}
            <Button 
              onClick={() => setIsFollowed(!isFollowed)}
              className={`absolute -bottom-6 right-32 ${isFollowed ? 
                    "bg-green-lila text-white-2" : "text-white-2 bg-red"}`}
            >
              <Heart className="w-7 h-7 fill-current" />
            </Button>
          </div>
        </div>

        <div className="px-6 text-center pt-8 ">
          <h2 className="font-bold text-primary mb-2 text-2xl">
            {animal?.nombre}
          </h2>
          <p className="text-secondary mb-4">{animal?.vacunas ? 'Vacunas al día' : 'Vacunas no al día'}</p>

          <div className="flex justify-center mb-6 bg-w">
            <Button 
              onClick={() => setActiveSection('info')}
              className={`px-4 py-2 rounded-full m-0 transition 
                ${activeSection === 'info' ? 'bg-secondary text-white-2' : 'bg-transparent'}`}
            >
              Información
            </Button>
            <Button 
              onClick={() => setActiveSection('health')}
              className={`px-4 py-2 rounded-full transition ${activeSection === 'health' ? 'bg-secondary text-white-2' : ''}`}
            >
              Salud
            </Button>
          </div>

          <div className="min-h-[200px]">
            {renderSection()}
            <div className='pt-8'>
              {/* <Clipboard className="w-6 h-6 text-primary mb-2" /> */}
              <span className="font-semibold text-xl ">Descripción:</span>
              <p className="text-secondary text-xl
                text-wrap">
                  {removeHtmlTags(animal?.desc_fisica)}
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
