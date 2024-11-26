import React, { useState } from 'react';
import Image from '@/components/ui/Image';
import Button from '@/components/ui/Button';
import { HeartHandshake, Stethoscope } from 'lucide-react';

import DefaultPet from '@/assets/defaultPet.jpg';

// Componente Card
const Card = ({ image, title, edad, description, setAnimation, vacunas = null, className, selectedCard, heightNoImage = "64", sectionDetails = false, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => { setIsHovered(true); };
  const handleMouseLeave = () => { setIsHovered(false); };

  if (!image) { image = DefaultPet }

  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden flex flex-col text-beige
       ${className} transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {isHovered && selectedCard && (
        <div className="absolute z-50 top-2 right-2 p-2 text-2xl 
        transition-opacity duration-300 ease-in-out text-beige 
        shadow-lg bg-beige rounded-full ">
          🐾
        </div>
      )}

      {image && (
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            setAnimation={setAnimation}
            className={`w-full h-full object-cover 
                transition-transform duration-500 
                ease-in-out ${isHovered && selectedCard ? 'scale-105' : ''}`}
          />
        </div>
      )}

      <div className={`px-5 py-7 flex flex-col justify-between  h-${heightNoImage}`}>
        <h2 className="text-2xl font-bold mb-2 text-center text-black ">{title}</h2>
        {/* Agregue la edad, los meti dentro de un div flex  */}
        <div className="flex justify-evenly">
        {edad && <span className="text-sm text-wrap max-h-28 overflow-y-auto scrollbar-hide flex flex-col md:text-lg"><p className='w-10'>Edad:</p><p className='font-sans'>{edad}</p></span>}
        <p className="text-lg text-wrap max-h-28 overflow-y-auto scrollbar-hide flex justify-between">{description}</p>
        {/*Le meti estetoscopio y agregue flex column*/}
        {sectionDetails && (
          <div className=" flex justify-between ">
            <div className="flex justify-start flex-col">
              <p>Vacunas:</p>
              <p className='flex justify-evenly '>{vacunas} <Stethoscope /></p>
              
            </div>
          </div>
        )}
        </div>

        {children && (
          <Button
            bgColor="orange"
            hoverColor="orange-hover"
            iconPosition="end"
            onClick={() => console.log('Adopting started!')}
            className="mt-4 text-black  block w-full font-serif font-extrabold"
          >
            {/* {title} */}
            Adopta Ahora
            <HeartHandshake />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
