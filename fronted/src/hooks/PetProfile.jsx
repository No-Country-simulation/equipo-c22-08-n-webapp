import React, { useState } from 'react';
import { 
  Dog, Bone, Palette, Ruler, 
  Heart, Shield, Syringe, Clipboard, HeartHandshake,
  BadgeRussianRubleIcon
} from 'lucide-react';

import Adopt from '@/assets/Adopt.jpg';

import Button from '@/components/ui/Button';
import Image from '@/components/ui/Image';

const PetProfile = () => {
  const [activeSection, setActiveSection] = useState('info');
  const [isFollowed, setIsFollowed] = useState(false);

  const petData = {
    name: "Luna",
    breed: "Golden Retriever",
    age: 3,
    gender: "Hembra",
    weight: 25,
    color: "Dorado",
    avatar: Adopt
  };

  const healthData = [
    { icon: Shield, label: "Vacunas", value: "Al día" },
    { icon: Syringe, label: "Desparasitación", value: "Marzo 2024" },
    { icon: Clipboard, label: "Última Revisión", value: "Enero 2024" }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'info':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 bg-gray-light rounded-xl p-4">
              <div className="flex flex-col items-center">
                <Ruler className="w-6 h-6 text-primary mb-2" />
                <span className="font-semibold">{petData.age} años</span>
              </div>
              <div className="flex flex-col items-center">
                <Dog className="w-6 h-6 text-secondary mb-2" />
                <span className="font-semibold">{petData.gender}</span>
              </div>
              <div className="flex flex-col items-center">
                <Palette className="w-6 h-6 text-green-lila mb-2" />
                <span className="font-semibold">{petData.color}</span>
              </div>
            </div>
          </div>
        );
      case 'health':
        return (
          <div className="space-y-3">
            {healthData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-light rounded-lg p-3"
              >
                <item.icon className="w-6 h-6 text-primary mr-4" />
                <div className="flex-grow">
                  <p className="text-sm text-gray">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div>
      <div className="bg-white-2 shadow-beige shadow-md m-auto pb-7 max-w-xl overflow-hidden  ">
        {/* Avatar */}
        <div className=" h-48 bg-gradient-to-r
               from-primary to-secondary 
                flex items-center justify-center">
          <div className="relative ">     
            <Image 
              src={petData.avatar} 
              alt={petData.name} 
              setAnimation= {true}
              className="w-64 rounded-full  shadow-2xl border-white object-cover -top-3"
            />
            <Button 
              onClick={() => setIsFollowed(!isFollowed)}
              className={`absolute -bottom-2 -right-10  ${
                isFollowed 
                  ? "bg-red text-white-2 " 
                  : " text-gray-dark"
              }`}
            >
              <Heart className="w-6 h-6 fill-current  " />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className=" px-6 text-center pt-24">
          <h2 className="text-xl font-bold text-primary mb-2">
            {petData.name}
          </h2>
          <p className="text-secondary mb-4">{petData.breed}</p>

          {/* Navigation */}
          <div className="flex justify-center mb-6 bg-w ">
            <Button 
              onClick={() => setActiveSection('info')}
              className={`px-4 py-2 rounded-full m-0 transition ${
                activeSection === 'info' 
                  ? 'bg-secondary text-white-2' 
                  : 'bg-transparent'
              }`}
            >
              Información
            </Button>
            <Button 
              onClick={() => setActiveSection('health')}
              className={`px-4 py-2 rounded-full  transition ${
                activeSection === 'health' 
                  ? 'bg-secondary text-white-2' 
                  : ''
              }`}
            >
              Salud
            </Button>
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[200px]">
            {renderSection()}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button 
              bgColor="orange" 
              onClick={() => console.log('Adopting started!')}
             className=" text-gray-dark font-bold">
              Adoptar
              <HeartHandshake/>
            </Button>

            <Button 
              bgColor="secondary" 
              hoverColor="green-lila"
              onClick={() => console.log('More info!')}
              icon={Bone}
              iconPosition="end"

            className="text-white-2 bg-secondary"
              > Más Info <Bone />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;