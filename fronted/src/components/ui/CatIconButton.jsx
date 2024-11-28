import React, { useState } from 'react';

const CatIconButton = ({isActive}) => {
 

  return (    
      <svg
        viewBox="0 0 100 100"
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className={`transform origin-center transition-all duration-300 rotate-[0deg] ${
            isActive ? 'rotate-[25deg] scale-125' : 'rotate-[0deg]'
          }`}
        >
          {/* Contorno principal con orejas puntiagudas */}
          <path
            d="
              M 25 20 
              C 15 20, 15 40, 25 45
              L 25 65 
              C 25 80, 75 80, 75 65
              L 75 45
              C 85 40, 85 20, 75 20
              L 75 15 L 65 25 
              L 50 20
              L 35 25 L 25 15
              Z"
            className="fill-none stroke-black stroke-[4]"
          />
          
          {/* Ojos Anime */}
          <g className="stroke-black stroke-[3]">
            {/* Ojo izquierdo */}
            <path
              d="M32 45 C35 45, 42 45, 45 45 C45 48, 45 52, 45 55 C42 55, 35 55, 32 55 C32 52, 32 48, 32 45 Z"
              className="fill-black"
            />
            <circle cx="34" cy="48" r="2" className="fill-white" />
            
            {/* Ojo derecho */}
            <path
              d="M55 45 C58 45, 65 45, 68 45 C68 48, 68 52, 68 55 C65 55, 58 55, 55 55 C55 52, 55 48, 55 45 Z"
              className="fill-black"
            />
            <circle cx="57" cy="48" r="2" className="fill-white" />
          </g>
          
          {/* Nariz */}
          <path
            d="M48 55 L52 55 L50 58 Z"
            className="fill-black"
          />
          
          {/* Lengua */}
          <path
            d="M45 65 Q50 75 55 65"
            className={`fill-pink-300 stroke-pink-400 stroke-2 transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Bigotes */}
          <g className="stroke-black stroke-[2]">
            <line x1="30" y1="58" x2="15" y2="55" />
            <line x1="30" y1="62" x2="15" y2="62" />
            <line x1="30" y1="66" x2="15" y2="69" />
            
            <line x1="70" y1="58" x2="85" y2="55" />
            <line x1="70" y1="62" x2="85" y2="62" />
            <line x1="70" y1="66" x2="85" y2="69" />
          </g>
        </g>
      </svg>
    
  );
};

export default CatIconButton;