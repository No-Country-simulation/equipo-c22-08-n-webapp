
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from '@/pages/About';
import Index from '@/pages/Index';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Index />} />
        <Route path="/about" element={ <About />
      } /> 
              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
