import { Link } from 'react-router-dom';
import { PawPrint, Home, DollarSign, LogIn } from 'lucide-react';

import Logo from '@/assets/logo1-r.png';
import Image from  '@/components/ui/Image';



const Header = () => (
  <header>
    <nav className=" bg-transparent p-4 text-wrap flex items-center bg-transparentr text-beige text-2xl">
      <div className="md:flex w-[90%] text-center justify-between items-center h-auto md:h-44 ">
        <Link to="/">
          <div className="flex items-center justify-center space-x-2">
            {/* Logo */}
            {/* <PawPrint className="h-8 w-8 text-beige" /> */}
            <Image src={Logo} alt='Logo' className=" md:mt-24 h-[200px] w-26 block" setAnimation={true}/>
          </div>
        </Link>
        <div className="flex justify-center items-center space-x-4">
          {/* <Link
            to="/adopt"
            className="hover:text-green-lila px-3 py-2 rounded-md font-medium"
          >
            <Home className="inline-block mr-1" size={18} />
            Adopta
          </Link>
          <Link
            to="/donate"
            className="hover:text-green-lila px-3 py-2 rounded-md font-medium"
          >
            <DollarSign className="inline-block mr-1" size={18} />
            Donar
          </Link> */}
          <Link
            to="/login"
            className="hover:text-beige px-3 py-2 rounded-md font-medium"
          >
            Inicia sesión
            <LogIn className="inline-block ml-4 w-8 h-10 " size={18} />
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
