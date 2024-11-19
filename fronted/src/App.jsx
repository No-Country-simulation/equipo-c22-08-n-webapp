
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/Login';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path="/about" element={ <About />
      } /> 
              
      </Routes>
    </BrowserRouter>
  );
}

export default App;
