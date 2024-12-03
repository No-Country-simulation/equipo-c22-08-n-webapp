import React, { useState } from 'react';
import catClicked from '@/assets/catClicked.png';
import catNormal from '@/assets/catNormal.png';

const CatIconButton = ({ isActive }) => {


  return (
    <>     
        {isActive ? (<img src={catClicked} alt="An icon of a cat" className='h-28'/>) : (<img src={catNormal} alt="An icon of a happy cat with stars"  className='h-28'/>)}
    </>

  );
};

export default CatIconButton;