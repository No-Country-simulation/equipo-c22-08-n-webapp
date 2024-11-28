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
