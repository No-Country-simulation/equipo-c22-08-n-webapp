// src/routes/index.jsx
import React from 'react';
import { Routes, Route, Navigate, createBrowserRouter } from 'react-router-dom';  // Importar componentes de react-router-dom

// Importar el componente Login
import Login from '@/pages/Login'; 


const Router = createBrowserRouter([

  {
    path:'/',
    // element:<Layout/>,
    children:[
      {
        index:true,
        element:<Login/>,
      
      }
  
      
    ]
  }



])

export {Router}
