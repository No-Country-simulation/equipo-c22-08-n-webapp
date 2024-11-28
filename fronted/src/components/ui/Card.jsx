import  { useState } from 'react';
import Image from '@/components/ui/Image';
import Button from '@/components/ui/Button';
import {HeartHandshake} from 'lucide-react';

import DefaultPet from '@/assets/defaultPet.jpg';
import { Link,useNavigate } from 'react-router-dom';

import { removeHtmlTags } from '@/utils/helpers';

const Card = ({ image,id, redirect= false, title, description,phaseMotivation, setAnimation,vacunas=0, className, 
      selectedCard, heightNoImage="64", 
      sectionDetails=false ,
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

  if(!image) {image = DefaultPet}

  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden flex flex-col text-beige
       ${className} transition-all duration-300 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {redirect ? (
        <Link to={`/adopt/${id}`} className="block w-full font-sans ">
          {renderCardContent()}
        </Link>
      ) : (
        <div className="block w-full font-sans">
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
      
        {children && (
        <div
          onClick={(e) => {
          e.preventDefault();
          handleAdoptClick(id);
          }}
          className="mt-4 text-black block w-full font-sans font-extrabold"
        >
          <Button
          bgColor="orange"
          hoverColor="orange-hover"
          iconPosition="end"
          className="w-full"
          >
          Adopta Ahora
          <HeartHandshake/>
          </Button>
        </div>
        )}

      </div>
      </>
    );
  }
};

export default Card;
