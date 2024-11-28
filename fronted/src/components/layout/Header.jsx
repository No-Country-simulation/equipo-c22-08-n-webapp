import { Link } from 'react-router-dom';
import { PawPrint, Home, DollarSign, LogIn } from 'lucide-react';

const Header = () => (
  <header>
    <nav className="shadow-lg px-7  bg-primary py-4 text-wrap flex items-center text-beige text-lg ">

        <div className="md:flex text-center justify-between items-center h-24 w-full">
          <Link to="/" >
                <div className="flex items-center justify-center space-x-2">
                {/* Logo */}
                <PawPrint className="h-8 w-8 text-beige" />
                <span className="font-bold text-xl">PatitasFelices</span>

                {/* <li><Link href="/" className="hover:underline">PatitasFelices</Link></li> */}
              </div>
            
            </Link>
         
          
          <div className="flex justify-center items-center space-x-4">
            <Link
              to="/adopt"
              className=" hover:text-green-lila px-3 py-2 rounded-md  font-medium"
            >
              <Home className="inline-block mr-1" size={18} />
              Adopta
            </Link>
            <Link
              to="/donate"
              className=" hover:text-green-lila px-3 py-2 rounded-md  font-medium"
            >
              <DollarSign className="inline-block mr-1" size={18} />
              Donar
            </Link>
            <Link
              to="/login"
              className=" hover:text-green-lila px-3 py-2 rounded-md  font-medium"
            >
              <LogIn className="inline-block mr-1" size={18} />
              Inicia sesión
            </Link>
          </div>
        </div>
     
    </nav>
  </header>
);

export default Header;
