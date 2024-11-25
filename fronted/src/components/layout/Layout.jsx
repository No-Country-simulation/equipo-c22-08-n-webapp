
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';


function Layout() {
  return (
    <div className='flex flex-col justify-between max-h-full w-full ' >
      <Header/>
        {/* 
            {rutaActual==='/' ?
              <HeaderP>
                <Flex>
                  <NavLink>
                    <Logo src={logo} 
                    aria-label="logo que funciona como enlace para regresar al inicio" 
                    alt='logo portafolio'/>
                  </NavLink>
                  <FotoPersonal src={fotoPersonal} alt='foto personal'
                  height='250px'
                  width='250px'/>
                  
                </Flex>
                <Wage src={svg} 
                  alt='wage del header'
                  height='auto'
                  width='auto'/>
              </HeaderP>

              :
              
              <NavLink>
                <Logo src={logo} alt='logo portafolio'/>
              </NavLink>

            
            } */}
        {/*       
              <Main> */}
        <Outlet/>
      

      <Footer/>
    </div>
  )
}

export default Layout
