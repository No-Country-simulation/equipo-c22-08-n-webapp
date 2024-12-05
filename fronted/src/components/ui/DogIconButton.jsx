import React, { useState } from 'react';
import buttonDog from '@/assets/buttonDog.png';

const DogIconButton = ({ isActive }) => {

  return (

    <>
      
        {isActive ? (
          <img src={buttonDog} alt="An icon of a dog rotated" className='transform rotate-[25deg] h-36'/>
        ) : (
          <img src={buttonDog} alt="An icon of a dog" className="h-28"/>
        )}
     

    </>
  );
};

export default DogIconButton;