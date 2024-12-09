import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@/components/context/ProtectedRoute';

// Import your existing pages
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
import Adoption from '@/pages/Adoption';
import NotFound from '@/pages/NotFound';
import SectionsEvents from '@/pages/SectionsEvents';

const Router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        // element: <ProtectedRoute allowedRoles={['user', 'shelter', 'admin']} />,
        children: [
          {
            path: 'adopt/:id',
            element: <Adopt />,
          },
          // {
          //   path: 'adoption',
          //   element: <Adoption />,
          // },
        ],
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
    // element: <ProtectedRoute allowedRoles={['normal', 'shelter', 'administrador']} />,
    children: [
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
    ],
  },
  {
    // element: <ProtectedRoute allowedRoles={[ 'administrador']} />,
    children: [
      {
        path: '/events',
        children: [
          {
            index: true,
            element: <SectionsEvents />,
          },
        ],
      },
    ],
  },
]);

export { Router };