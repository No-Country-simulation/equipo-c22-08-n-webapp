import React, { useState } from 'react';
import buttonDog from '@/assets/buttonDog.png';

const DogIconButton = ({ isActive }) => {

  return (

    <>
      <div className="h-28">
        {isActive ? (
          <img src={buttonDog} alt="An icon of a dog rotated" className='transform rotate-[25deg] h-28'/>
        ) : (
          <img src={buttonDog} alt="An icon of a dog" className="h-20"/>
        )}
      </div>

    </>
  );
};

export default DogIconButton;