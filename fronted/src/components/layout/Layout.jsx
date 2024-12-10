
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ImageBg from '@/assets/bg.jpg';
    

function Layout() {
  return (
    <div className='flex flex-col justify-between max-h-full w-full font-sans' 
    style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
