import {useState} from 'react';

import { Link } from 'react-router-dom';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { PawPrint, Home, DollarSign, LogIn, } from 'lucide-react'
import InputForm from '../ui/InputForm';


const Footer = () => {  
  const [email, setEmail] = useState('');

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  return(
     <footer className="  py-8 text-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Patitas Felices</h3>
              <p>Conectando mascotas desde {new Date().getFullYear()}</p>
            </div>
            <div className= "w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">¿Qué quieres hacer?</h3>
              <ul>
                <li>
                  <Link
                    to="/adopt"
                    className=" hover:text-green-lila px-3 py-2 
                    rounded-md font-medium"
                  >
                    <Home className="inline-block mr-1" size={18} />
                    Adopta
                  </Link>
                  </li>
                <li>
                 <Link
                  to="/donate"
                  className=" hover:text-green-lila px-3 py-2 rounded-md font-medium"
                >
                  <DollarSign className="inline-block mr-1" size={18} />
                  Donar
                </Link>
                  </li>
                  
                {/* <li>
                   <Link
                    to="/login"
                    className=" hover:text-green-lila px-3 py-2 rounded-md  font-medium"
                  >
                    <LogIn className="inline-block mr-1" size={18} />
                    Inicia sesión
                  </Link>
                  </li> */}
              </ul>
            </div>
            <div className="w-full md:w-1/3 ">
              <h3 className="text-xl font-bold mb-2">Conéctate con nosotros</h3>
              <form className="flex items-center flex-col lg:flex-row">
                <InputForm  
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    className="flex-grow p-4 bg-white text-black" 
                  />
                  <Button 
                  type="submit" className="bg-orange hover:bg-orange-hover text-white d-block">
                  Unéte<DollarSign className='current-fill'/> </Button>
              
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy;Todos los derechos reservados </p>
          </div>
        </div>
      
  </footer>
  )
};

export default Footer;
