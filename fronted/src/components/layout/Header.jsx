import { Link } from 'react-router-dom';
import { PawPrint, LogIn, NotepadText, Book } from 'lucide-react';
import Logo from '@/assets/logo1-r.png';
import Image from '@/components/ui/Image';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const userData = localStorage.getItem('userData');
      setIsLoggedIn(userData && userData ? true : false);
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);


    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };

  return (
    <header>
      <nav className="bg-transparent p-4 text-wrap flex items-center text-beige text-2xl">
        <div className="md:flex w-[90%] text-center justify-between items-center h-auto md:h-44">
          
          <Link to="/">
            <div className="flex items-center justify-center space-x-2">

              <Image src={Logo} alt='Logo' className="md:mt-24 h-[200px] w-26 block" setAnimation={true} />
            </div>          </Link>
          
          <div className="flex justify-center items-center space-x-4">
          <div className='mr-7 bg-brown'>
            <button className='rounded-full ' onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? 'Admin' : 'User'}</button>
          </div>
      
            <Link
              to="/request/:id"
              className="hover:text-beige px-3 py-2 rounded-md font-medium"
            >
              Mi adopción
              <NotepadText className="inline-block ml-4 w-8 h-10 " size={18} />
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-beige px-3 py-2 rounded-md font-medium"
            >
              Solicitudes
              <Book className="inline-block ml-4 w-8 h-10 " size={18} />
            </Link>
            {!isLoggedIn && (
              <Link
                to="/login"
                className="hover:text-beige px-3 py-2 rounded-md font-medium"
              >
                Inicia sesión
                <LogIn className="inline-block ml-4 w-8 h-10 " size={18} />
              </Link>
            )}


            {isLoggedIn && (
              <Button
                onClick={handleLogout}
                className="hover:text-beige px-3 py-2 rounded-md font-medium"
              >
                Cerrar sesión
                <PawPrint className="inline-block ml-4 w-8 h-10 " size={18} />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
