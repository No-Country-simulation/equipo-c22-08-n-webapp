import React, { useState, useEffect } from 'react';
import { 
  Dog, Palette, Ruler, 
  Heart, Shield, Syringe, Clipboard
} from 'lucide-react';
import ImageCarousel from '@/components/ui/ImageCarousel';
import Button from '@/components/ui/Button';

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
                <span className="font-semibold">{animal?.edad} años</span>
              </div>
              <div className="flex flex-col items-center">
                <Dog className="w-6 h-6 text-secondary mb-2" />
                <span className="font-semibold">{animal?.genero}</span>
              </div>
              <div className="flex flex-col items-center">
                <Palette className="w-6 h-6 text-green-lila mb-2" />
                <span className="font-semibold">{animal?.tipo}</span>
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
      <div className="bg-beige-light  shadow-md rounded-lg m-auto pb-7 max-w-xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r  flex items-center justify-center">
          <div className="relative w-full">
            {!loading && animal.imagenes && (
              <ImageCarousel 
                images={animal?.imagenes}
                clases={" w-full border-white object-cover w-10 -top-3"}
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

        <div className="px-6 text-center pt-44">
          <h2 className="text-xl font-bold text-primary mb-2">
            {animal?.nombre}
          </h2>
          <p className="text-secondary mb-4">{animal?.vacunas ? 'Vacunas al día' : 'Vacunas no al día'}</p>

          <div className="flex justify-center mb-6 bg-w">
            <Button 
              onClick={() => setActiveSection('info')}
              className={`px-4 py-2 rounded-full m-0 transition ${activeSection === 'info' ? 'bg-secondary text-white-2' : 'bg-transparent'}`}
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
          </div>
        </div>
      </div>
    </div>
  );
};
