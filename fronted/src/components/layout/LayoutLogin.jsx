
import { Outlet } from 'react-router-dom';

import Image from '@/components/ui/Image';
import Logo from '@/assets/pet.avif';
import ImageBg from '@/assets/bg.jpg';
    

function LayoutLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br 
        from-gray-100 to-white 
        flex items-center 
        justify-center
        bg-gray-dark"
         style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}>

      <div className="bg-white-2 rounded-2xl shadow-xl max-w-4xl grid md:grid-cols-2 overflow-hidden">
        <div
          className="p-8 flex items-center justify-center min-h-64 bg-secondary animate-fadeIn"
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(.8px)',
          }}
        >
          {/* <div className="max-w-sm">
            <h2 className="text-2xl text-center font-bold mb-4">Bienvenido a Pawtel</h2>
          </div> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutLogin
