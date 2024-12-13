import React, { useEffect, useState } from "react";
import { PawPrint, CalendarDays, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom";


// const initialRequest = [{
//   apellido: "Alvarez",
//   ciudad: "Medellín",
//   codigoPostal: "12245",
//   direccion:"calle 789",
//   edad:"33",
//   email:"alvarez@gmail.com",
//   fechaSolicitud:"2024-12-08T14:36:31.668Z",
//   idMascota:"298",
//   nombre:"Demian"
// },
// {
//   apellido: "Jimenez",
//   ciudad: "Cali",
//   codigoPostal: "13145",
//   direccion:"calle 456",
//   edad:"20",
//   email:"alvarez@gmail.com",
//   fechaSolicitud:"2024-12-08T14:36:31.668Z",
//   idMascota:"294",
//   nombre:"David"
// }]

const DashboardAdopt = () => {
  const navigate = useNavigate();
  const solicitudes = JSON.parse(localStorage.getItem("solicitud"));
  const [allPets, setAllPets] = useState([]);

  
  useEffect(() => {
    const getPetInfo = async () => {
      for (let i = 0; i < solicitudes.length; i++) {
        console.log(solicitudes.length)
        console.log("solicitudes",solicitudes)
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/animal/${solicitudes[i].idMascota}`);
          console.log("response", response)
          const data = await response.json();
          console.log("Mascotas", data.data)
          setAllPets([...allPets, data.data]);
          return data;
        } catch (error) {
          console.error(error);
        }
      }
    };
    localStorage.setItem('solicitud', JSON.stringify(solicitudes));
    getPetInfo();
  }, []);
  const formatDate = (dateRequest) => {
    const dateUTC = new Date(dateRequest);

    const opciones = {
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };

    return (new Intl.DateTimeFormat("es-ES", opciones).format(dateUTC));
  }

  const statusHandler = (status) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return "text-yellow bg-yellow-light shadow-sm shadow-yellow";
      case 'under review':
        return "text-gray bg-secondary shadow-sm shadow-secondary-light";
      case 'approve':
        return "text-green bg-green-light shadow-sm shadow-green";

      default:
        return "text-yellow bg-yellow-light opacity-50 bg-opacity-30";
    }
  }

  const onClickHandler = (id, index) => {
    localStorage.setItem('solicitudIndex', index);
    navigate(`/request/${id}`);
  }
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 shadow-">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-6xl font-bold text-white-2 mb-8 text-center">
          Adopciones por Revisar
        </h1>

        {!solicitudes ? (
          <div className="text-center py-12 bg-black rounded-lg shadow-lg mt-6">
            <p className="text-white text-lg">No hay solicitudes de adopción.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {solicitudes.map((request, index) => (
              console.log("all pets son", allPets),

              <div
                key={request.id}
                className="bg-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                id={request.petId}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative text-beige">
                      <img
                        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                        alt={request.nombre}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
                        }}
                      />
                      {/* <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div> */}
                    </div>
                    <div className="ml-4 text-white-2">
                      <h2 className="text-2xl font-semibold font-serif">{request.nombre}</h2>
                      {/* ${statusHandler(request.status)} */}
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusHandler(request.solicitudInfo.status)}`}>
                        {request.solicitudInfo.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    {console.log("nombre mascota", allPets[index]?.nombre)}
                    {console.log("SRC IMAGEN", allPets[index]?.imagenes[0])}
                    <img
                      src={allPets[index]?.imagenes[0].imagen}
                      alt={request.petName}
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1444212477490-ca407925329e";
                      }}
                    />
                  </div>

                  <div className="space-y-3 text-beige">
                    <div className="flex items-center">
                      <PawPrint className="w-5 h-5 mr-2" />
                      <span>Nombre de Mascota: {allPets[index]?.nombre}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="w-5 h-5 mr-2" />
                      <span>Fecha de Solicitud: {formatDate(request.fechaSolicitud)}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>Contacto: {request.telefono}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-orange hover:bg-orange-hover text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                      onClick={() => onClickHandler(request.idMascota, index)}>
                      Revisar Solicitud
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div >
  );
};

export default DashboardAdopt;
