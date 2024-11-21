
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from '@/pages/About';
import Index from '@/pages/Index';
import { Adoption } from './pages/Adoption';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoption" element={<Adoption />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
