import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, LogIn, CalendarDays, ListTodo,NotepadText } from 'lucide-react';
import Logo from '@/assets/logo1-r.png';
import Image from '@/components/ui/Image';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="hidden  lg:flex bg-transparent p-4 
          text-wrap items-center text-beige text-2xl">
        <div className="w-[90%]  mx-auto text-center justify-between items-center
           h-auto ">
          <Link to="/">
            <div className="flex items-center justify-center space-x-2">
              <Image src={Logo} alt="Logo" className=" h-[200px] w-26 block" setAnimation={true} />
            </div>
          </Link>
          <button className='z-10 m-5' onClick={()=>{
            setIsAdmin(!isAdmin); localStorage.setItem('isAdmin', !isAdmin)}}>{isAdmin? 'Admin': 'User'}</button>
          <div className="flex justify-center items-center space-x-4">

            {isLoggedIn && isAdmin && (
              <Link
                to="/events"
                className="px-3 py-2 rounded-md font-medium border-beige border-2 hover:text-white-2"
              >
                Eventos
                <CalendarDays className="inline-block ml-4 w-8 h-10" size={18} />
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to="/adoption"
                className="px-3 py-2 rounded-md font-medium border-beige border-2 hover:text-white-2"
              >
                Mascotas
                <PawPrint className="inline-block ml-4 w-8 h-10" size={18} />
              </Link>
            )}
            {isLoggedIn && !isAdmin &&(
              <Link
                to="/request/:id"
                className="px-3 py-2 rounded-md font-medium border-beige border-2 hover:text-white-2"
              >
                Mi Solicitud
                <NotepadText className="inline-block ml-4 w-8 h-10" size={18} />
              </Link>
            )}
            {isLoggedIn && isAdmin && (
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md font-medium border-beige border-2 hover:text-white-2"
              >
                Solicitudes
                <ListTodo className="inline-block ml-4 w-8 h-10" size={18} />
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/login" className="hover:text-beige px-3 py-2 rounded-md font-medium">
                Inicia sesión
                <LogIn className="inline-block ml-4 w-8 h-10" size={18} />
              </Link>
            )}
            {isLoggedIn && (
              <Button onClick={handleLogout} className="hover:text-beige px-3 py-2 rounded-md font-medium">
                Cerrar sesión
              </Button>
            )}
          </div>
        </div>
      </nav>

       <nav className=" bg-transparent p-4 lg:hidden
          text-wrap flex items-center text-beige text-2xl">
        <div className="w-[90%] 
          mx-auto flex flex-col text-center 
          justify-between items-center
           h-auto ">
        <Link to="/">
            <div className="items-center justify-center space-x-2">
              <Image src={Logo} alt="Logo" className=" h-[200px] w-26 block" setAnimation={true} />
            </div>
          </Link>
        <button onClick={toggleMenu} 
          className="px-3 py-2 rounded-md font-medium border-2 border-beige ">
          Menu
          <ListTodo className="inline-block ml-4 w-8 h-10" size={18} />
        </button>
      </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed text-2xl text-beige text-center 
              inset-0 z-50 flex gap-4 items-center 
              justify-center bg-black bg-opacity-90">
          <div className="bg-white rounded-lg shadow-2xl bg-gray bg-opacity-20 p-6 w-80 ">
            <Button 
              onClick={toggleMenu} 
              bgColor="green-lila"
              className="bg-opacity-30 absolute top-5 right-5 text-white-2">
              X
            </Button>
            <div className="py-1 font-semibold " 
              role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {isLoggedIn && (
                <Link
                  to="/events"
                  className="block px-4 py-2 
                    hover:bg-opacity-10 
                    hover:bg-white-2 
                    hover:border-orange
                    hover:border
                    hover:text-white-2
                    hover:border-2
                    rounded
                    "
                  role="menuitem"
                  onClick={toggleMenu}
                >
                  Eventos
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/adoption"
                 className="block px-4 py-2 
                    hover:bg-opacity-0 
                    hover:bg-white-2 
                    hover:border-orange
                    hover:border
                    hover:border-2
                    hover:text-white-2
                    rounded
                    "
                  role="menuitem"
                  onClick={toggleMenu}
                >
                  Mascotas
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 
                    hover:bg-opacity-10 
                    hover:bg-white-2 
                    hover:border-orange
                    hover:border
                    hover:text-white-2
                    hover:border-2
                    rounded
                    "
                  role="menuitem"
                  onClick={toggleMenu}
                >
                  Solicitudes
                </Link>
              )}
              {!isLoggedIn && (
                <Link
                  to="/login"
                  className=" px-4 py-2 
                    hover:bg-opacity-10 
                    hover:bg-white-2 
                    hover:border-orange
                    hover:border
                    hover:text-white-2
                    hover:border-2
                    rounded
                    "
                  role="menuitem"
                  onClick={toggleMenu}
                >
                  Inicia sesión
                </Link>
              )}
              {isLoggedIn && (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className=" block w-full text-center px-4 py-2 
                    hover:bg-opacity-10 
                    hover:bg-white-2 
                    hover:border-orange
                    hover:border
                    hover:border-2
                    hover:text-white-2
                    rounded
                    "
                  role="menuitem"
                >
                  Cerrar sesión
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
