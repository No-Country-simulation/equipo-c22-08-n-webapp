
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';


function Layout() {
  return (
    <div className='flex flex-col justify-between max-h-full w-full ' >
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
