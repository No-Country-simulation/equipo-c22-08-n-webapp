import { Outlet, Link } from 'react-router-dom';
import Image from '@/components/ui/Image';
import Logo from '@/assets/pet.avif';
import PetProfile from '@/hooks/PetProfile';
import Header from '@/components/layout/Header';
import { SquareDashedMousePointer,Drumstick } from 'lucide-react';

function LayoutPets() {
  return (
    <div className="min-h-screen bg-gray-dark flex flex-col ">
      {/* <Header> */}
        <div className='block mx-auto sm:flex mt-10 py-4 gap-6 '>
           <Link
            to="/select-pet"
            className="flex flex-col items-center px-6 py-3
             bg-orange-hover text-gray-dark font-bold  transform 
            transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg 
            shadow-md shadow-orange w-[200px] mb-5 sm:m-0"
          >
            Elegir otra mascota
            <SquareDashedMousePointer className="ml-2 w-12 h-12" />
          </Link>
          <Link
            to="/select-pet"
            className="flex flex-col items-center px-6 py-3
             bg-orange text-primary font-bold  transform 
            transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg 
            shadow-md shadow-orange w-[200px]"
          >
            Apoyar la causa
            <Drumstick className="ml-2 w-12 h-12" />
          </Link>
        </div>
      {/* </Header> */}

      <main className="lg:grid  lg:grid-cols-2 
            gap-8 p-8 overflow-hidden items-center justify-center">
        <PetProfile />
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutPets;