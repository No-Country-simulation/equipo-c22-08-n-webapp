import React, { useState } from 'react';
import { ChevronDown, Menu, Settings, Upload, FileText, Home, BarChart2, Leaf, Bird, Archive, LogOut } from 'lucide-react';

const Example = () => {
  const [currentView, setCurrentView] = useState('l');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const LoginView = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex items-center p-4 bg-white">
        <img src="/api/placeholder/40/40" alt="Aliar Logo" className="h-10" />
        <nav className="ml-4 space-x-4">
          <button className="text-gray-600">Home</button>
          <button className="text-gray-600">Acerca de</button>
          <button className="text-gray-600">Ayuda</button>
        </nav>
      </div>                        
            
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <img src="/api/placeholder/1200/800" alt="Farm Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative flex justify-end p-8">
          <div className="bg-[#88aa4b] bg-opacity-90 p-6 rounded-lg w-96">
            <h2 className="text-white text-xl mb-6">INICIA SESION CON TU CUENTA</h2>
            <form className="space-y-4">
              <div>
                <label className="text-white">Usuario:</label>
                <input type="text" className="w-full p-2 rounded" placeholder="Ingrese su usuario" />
              </div>
              <div>
                <label className="text-white">Correo:</label>
                <input type="email" className="w-full p-2 rounded" placeholder="Ingrese su correo" />
              </div>
              <div>
                <label className="text-white">Contraseña:</label>
                <input type="password" className="w-full p-2 rounded" placeholder="Ingrese su contraseña" />
              </div>
              <div className="flex space-x-4">
                <button className="bg-primary text-white px-6 py-2 rounded">INICIAR</button>
                <button className="bg-[#fafafb] text-blue-600 px-6 py-2 rounded">REGISTRARSE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="min-h-screen bg-gray-100">   
      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-white w-64 min-h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/32/32" alt="User" className="rounded-full" />
              <span>Hola Fernanda</span>
            </div>
          </div>
          <nav className="p-4 space-y-2">
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Home size={20} />
              <span>Inicio</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Archive size={20} />
              <span>Inventario</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <BarChart2 size={20} />
              <span>Manejo de cargas</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Leaf size={20} />
              <span>Cultivos</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Bird size={20} />
              <span>Animales</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <FileText size={20} />
              <span>Informes</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Upload size={20} />
              <span>Subir archivos</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100">
              <Settings size={20} />
              <span>Configuración</span>
            </button>
            <button className="flex items-center space-x-2 w-full p-2 hover:bg-gray-100 mt-auto">
              <LogOut size={20} />
              <span>Salir</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Datos ingresados</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Predicciones</h3>
              <p className="text-2xl font-bold">2,345</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Producción total</h3>
              <p className="text-2xl font-bold">10,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Cabezas de ganado</h3>
              <p className="text-2xl font-bold">5,678</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-4">Producción de cultivos</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-20">Maíz</div>
                  <div className="flex-1 h-4 bg-blue-200 rounded">
                    <div className="h-full bg-blue-500 rounded" style={{width: '75%'}}></div>
                  </div>
                  <div className="ml-2">75%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-20">Trigo</div>
                  <div className="flex-1 h-4 bg-yellow-200 rounded">
                    <div className="h-full bg-yellow-500 rounded" style={{width: '45%'}}></div>
                  </div>
                  <div className="ml-2">45%</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-4">Distribución de ganado</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-20">Vacuno</div>
                  <div className="flex-1 h-4 bg-red-200 rounded">
                    <div className="h-full bg-red-500 rounded" style={{width: '60%'}}></div>
                  </div>
                  <div className="ml-2">60%</div>
                </div>
              </div>
            </div>     

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-4">Distribución de concentrados</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-20">Alimento</div>
                  <div className="flex-1 h-4 bg-green-200 rounded">
                    <div className="h-full bg-green-500 rounded" style={{width: '80%'}}></div>
                  </div>
                  <div className="ml-2">80%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-4">Últimos movimientos</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Fecha</th>
                  <th className="p-2">Tipo</th>
                  <th className="p-2">Producto/animal</th>
                  <th className="p-2">Cantidad</th>
                  <th className="p-2">Movimiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">2023-10-25</td>
                  <td className="p-2">Cultivo</td>
                  <td className="p-2">Maíz</td>
                  <td className="p-2">500 kg</td>
                  <td className="p-2">Salida</td>
                </tr>
                <tr>
                  <td className="p-2">2023-10-24</td>
                  <td className="p-2">Ganado</td>
                  <td className="p-2">Vacuno</td>
                  <td className="p-2">50 cabezas</td>
                  <td className="p-2">Entrada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentView === 'login' ? <LoginView /> : <DashboardView />}
    </div>
  );
};

export default Example;