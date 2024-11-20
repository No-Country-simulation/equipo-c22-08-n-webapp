import {useState} from 'react';

import { Link } from 'react-router-dom';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { PawPrint, Home, DollarSign, LogIn, } from 'lucide-react'


const Footer = () => {

const [email, setEmail] = useState('');

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  return(
     <footer className="bg-brown text-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">PetPals</h3>
              <p>Connecting pets with loving homes since 2023.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 ">
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <form className="flex items-center flex-col lg:flex-row">
                <Input
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    className="flex-grow mr-2 bg-white text-black" 
                  />
                  <Button type="submit" className="bg-orange hover:bg-orange-hover text-white  d-block">
                  Subscribe <DollarSign/> </Button>
              
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
