import { createBrowserRouter } from 'react-router-dom';
import About from '@/pages/About';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Layout from '@/components/Layout/Layout';
import Adopt from '@/pages/Adopt';
import CreateAccount from '@/pages/CreateAccount';
import LayoutLogin from '@/components/Layout/LayoutLogin';
import RecoverPassword from '@/pages/RecoverPassword';

import CreateAccountMultiSep from '@/pages/CreateAccountMultiSep';
import SolicAdopt from '@/pages/SolicAdopt';
import LayoutPets from '@/components/Layout/LayoutPets';
import ShelterEvents from '@/pages/ShelterEvents';
import  Adoption  from '@/pages/Adoption';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'adopt/:id',
        element: <Adopt />,
      },
    ],
  },
  {
    path: '/login',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '/create-account',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <CreateAccount />,
      },
    ],
  },
  {
    path: '/recover-password',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <RecoverPassword />,
      },
    ],
  },
  {
    path: '/CreateAccountMultiSep',
    element: <LayoutLogin />,
    children: [
      {
        index: true,
        element: <CreateAccountMultiSep />,
      },
    ],
  },
  {
    path: '/pet-profile',
    element: <LayoutPets />,
    children: [
      {
        index: true,
        element: <SolicAdopt />,
      },
    ],
  },
  {
    path: '/events',
    children: [
      {
        index: true,
        element: <ShelterEvents />,
      },
    ],
  },
  {
    path:'/adoption',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Adoption/>,      
      }
  
      
    ]
  }
]);

export { Router };
