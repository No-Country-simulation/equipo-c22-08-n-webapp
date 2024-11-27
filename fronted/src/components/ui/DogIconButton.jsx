import React, { useState } from 'react';

const DogIconButton = ({isActive}) => {
  
  return (
    
      <svg
        viewBox="0 0 100 100"
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className={`transform origin-center transition-all duration-300 rotate-[0deg] ${
            isActive ? 'rotate-[30deg] scale-125' : 'rotate-[0deg]'
          }`}
        >
          {/* Contorno principal */}
          <path
            d="
              M 25 20 
              C 15 20, 15 40, 25 45
              L 25 65 
              C 25 80, 75 80, 75 65
              L 75 45
              C 85 40, 85 20, 75 20
              C 65 20, 50 30, 25 20
              Z"
            className="fill-none stroke-black stroke-[4]"
          />
          
          {/* Ojos */}
          <circle cx="40" cy="45" r="3" className="fill-black" />
          <circle cx="60" cy="45" r="3" className="fill-black" />
          
          {/* Nariz */}
          <circle cx="50" cy="55" r="4" className="fill-black" />
          
          {/* Lengua */}
          <path
            d="M45 65 Q50 75 55 65"
            className={`fill-pink-300 stroke-pink-400 stroke-2 transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </g>
      </svg>
    
//     <button
//     onClick={() => setIsActive(!isActive)}
//     className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
//     aria-label="Dog Icon Button"
//     aria-pressed={isActive}
//   >
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       width="24" 
//       height="24" 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       stroke="currentColor" 
//       strokeWidth="2" 
//       strokeLinecap="round" 
//       strokeLinejoin="round"
//       className={`transform origin-center transition-all duration-300 rotate-[0deg] ${
//         isActive ? 'rotate-[25deg]' : 'rotate-[0deg]'
//       }`}
//     >
//       <path d="M11.25 16.25h1.5L12 17z"/>
//       <path d="M16 14v.5"/>
//       <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/>
//       <path d="M8 14v.5"/>
//       <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/>
//       {/* Lengua que aparece al activar */}
//       <path
//         d="M11.5 17 L12 19 L12.5 17"
//         className={`stroke-pink-400 fill-none transition-opacity duration-300 ${
//           isActive ? 'opacity-100' : 'opacity-0'
//         }`}
//       />
//     </svg>
//   </button>
  );
};

export default DogIconButton;