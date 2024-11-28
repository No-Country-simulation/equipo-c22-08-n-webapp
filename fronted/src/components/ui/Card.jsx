import { useState } from 'react';
import Image from '@/components/ui/Image';
import Button from '@/components/ui/Button';
import { HeartHandshake, Stethoscope } from 'lucide-react';

import DefaultPet from '@/assets/defaultPet.jpg';
import { Link, useNavigate } from 'react-router-dom';

import { removeHtmlTags } from '@/utils/helpers';

const Card = ({ image, id, redirect = false, title, description, phaseMotivation, setAnimation, vacunas = 0, className,
  selectedCard, heightNoImage = "64",
  sectionDetails,
  edad,
  sexo,
  children }) => {
  const [isHovered, setIsHovered] = useState(false);


  const navigate = useNavigate();

  const handleAdoptClick = (id) => {
    localStorage.removeItem('idPet');
    localStorage.setItem('idPet', id);
    navigate('/login');
  }

  const handleMouseEnter = () => { setIsHovered(true); };
  const handleMouseLeave = () => { setIsHovered(false); };

  if (!image) { image = DefaultPet }

  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden flex flex-col text-beige
       ${className} transition-all duration-300 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {redirect ? (
        <Link to={`/adopt/${id}`} className="block w-full font-serif ">
          {renderCardContent()}
        </Link>
      ) : (
        <div className="block w-full font-serif">
          {renderCardContent()}
        </div>
      )}
    </div>
  );

  function renderCardContent() {
    return (
      <>
        {isHovered && selectedCard && (
          <div className="absolute z-50 top-2 right-2 p-2 text-2xl 
        transition-opacity duration-300 ease-in-out text-beige 
        shadow-lg bg-beige rounded-full ">
            🐾
          </div>
        )}

        {image && (
          <div className="w-full h-96 overflow-hidden">
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
          <h2 className="text-2xl font-bold mb-2 text-center text-white-2 ">{removeHtmlTags(title)}</h2>

          {phaseMotivation && (
            <div className="mt-4 flex justify-center text-center pb-5">
              <p className="text-lg font-semibold italic text-orange-hover">"{removeHtmlTags(phaseMotivation)}"</p>
            </div>
          )}

          <p className="text-lg text-wrap max-h-28 overflow-y-auto scrollbar-hide">{removeHtmlTags(description)}</p>

          {sectionDetails && edad &&
            <div className="flex flex-row justify-evenly font-serif text-xs">
              <div className="hidden sm:flex flex-col font-bold mb-2 text-center items-center justify-center">
                <h2 className='text-sm font-bold mb-2 text-brown '>
                  Vacunas
                </h2>
                <div className="flex flex-col items-center">
                  <Stethoscope />
                  <p className="text-sm text-wrap max-h-28 overflow-y-auto scrollbar-hide">{vacunas}</p>
                </div>
              </div>
              <div className="flex flex-col   font-bold mb-2 text-center items-center justify-center">
                <h2 className='text-sm font-bold mb-2 text-brown '>
                  Edad
                </h2>
                <div className="flex flex-col items-center">
                  <Stethoscope />
                  <p className="text-sm text-wrap max-h-28 overflow-y-auto scrollbar-hide me-3">{edad}</p>
                </div>
              </div>
              <div className="flex flex-col   font-bold mb-2 text-center items-center justify-center">
                <h2 className='text-sm font-bold mb-2 text-brown '>
                  Sexo
                </h2>
                <div className="flex flex-col items-center">
                  {sexo.toLowerCase()==="macho" ? `\u2642`: `\u2640`}
                  <p className="text-sm text-wrap max-h-28 overflow-y-auto scrollbar-hide me-3">{sexo}</p>
                </div>
              </div>
            </div>
          }

          {children && (
            <div
              onClick={(e) => {
                e.preventDefault();
                handleAdoptClick(id);
              }}
              className="mt-4 text-black block w-full font-serif font-extrabold"
            >
              <Button
                bgColor="orange"
                hoverColor="orange-hover"
                iconPosition="end"
                className="w-full"
              >
                Adopta Ahora
                <HeartHandshake />
              </Button>
            </div>
          )}

        </div>
      </>
    );
  }
};

export default Card;
