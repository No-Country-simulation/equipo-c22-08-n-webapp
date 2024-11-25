import React from 'react';

const Image = ({ 
  src, 
  alt, 
  width , 
  height , 
  className = '',
  setAnimation = false,
  objectFit = 'cover'
}) => {



  return (
    <div 
      className={`
        relative 
        w-[${width}px] 
        h-[${height}px] 
        flex 
        items-center 
        justify-center 
        overflow-hidden 
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`
          inset-0 
          w-full 
          h-full 
          object-${objectFit} 
          transition-all 
          duration-700 
          ease-in-out 
          cursor-pointer 
          ${!setAnimation ? ' filter grayscale hover:grayscale-0' : ''}
        `}
      />
    </div>
  );
};

export default Image;