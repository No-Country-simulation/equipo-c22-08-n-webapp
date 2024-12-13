import { Outlet, Link } from 'react-router-dom';
import Image from '@/components/ui/Image';
import Logo from '@/assets/pet.avif';
import PetProfile from '@/hooks/PetProfile';
import Header from '@/components/layout/Header';
import { SquareDashedMousePointer,Drumstick } from 'lucide-react';
import ImageBg from '@/assets/bg.jpg';

export default function LayoutPets() {



  return (
    <div className="min-h-screen  flex flex-col "
      style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), 
          rgba(0, 0, 0, 0.7)), url(${ImageBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
      }}
    >
      {/* <Header> */}
        <div className='block mx-auto 
              sm:flex  mt-10 py-4 gap-6 text-xl text-beige '>
           <Link
            to="/adoption"
            className="flex flex-col 
              items-center px-6 py-3 
               font-bold  transform 
            transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg 
            shadow-md  w-[300px] mb-5 sm:m-0"
          >
            Elegir otra mascota
            <SquareDashedMousePointer className="ml-2 w-12 h-12" />
          </Link>
          {/* <Link
            to="/select-pet"
            className="flex flex-col items-center px-6 py-3
               font-bold  transform 
            transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg 
            shadow-md  w-[300px]"
          >
            Apoyar la causa
            <Drumstick className="ml-2 w-12 h-12 " />
          </Link> */}
        </div>
      {/* </Header> */}

      <main className="">
        {/* <PetProfile /> */}

        <Outlet />
      </main>
    </div>
  );
}
