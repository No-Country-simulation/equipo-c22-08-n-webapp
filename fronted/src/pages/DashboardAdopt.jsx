import React, { useState } from "react";
import { PawPrint, CalendarDays, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom";

const DashboardAdopt = () => {  
  const navigate = useNavigate();
  const getPetInfo = (petId) => {

  }
  const [requests] = useState([
    {
      id: 1,
      userName: "Sarah Johnson",
      userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      petName: "Max",
      petImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      petId: 303,
      date: "2024-02-15",
      contact: "(555) 123-4567",
      status: "Pending"
    },
    {
      id: 2,
      userName: "Michael Brown",
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      petName: "Luna",
      petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      petId: 5,
      date: "2024-02-14",
      contact: "(555) 987-6543",
      status: "Under Review"
    },
    {
      id: 3,
      userName: "Emily Davis",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      petName: "Rocky",
      petImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      petId: 6,
      date: "2024-02-13",
      contact: "(555) 246-8135",
      status: "Pending"
    }
  ]);

  const statusHandler = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return "text-yellow bg-yellow-light shadow-sm shadow-yellow";
      case 'under review':
        return "text-gray bg-secondary shadow-sm shadow-secondary-light";
      case 'approve':
        return "text-green bg-green-light shadow-sm shadow-green";

      default:
        return "text-yellow bg-yellow-light opacity-50 bg-opacity-30";
    }
  }

  const onClickHandler = (id) =>{
    navigate(`/request/${id}`);
  }
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 shadow-">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-6xl font-bold text-white-2 mb-8 text-center">
          Adopciones por Revisar
        </h1>

        {requests.length === 0 ? (
          <div className="text-center py-12 bg-black rounded-lg shadow-lg mt-6">
            <p className="text-gray-500 text-lg">No hay solicitudes de adopción.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                id={request.petId}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative text-beige">
                      <img
                        src={request.userAvatar}
                        alt={request.userName}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167";
                        }}
                      />
                      {/* <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div> */}
                    </div>
                    <div className="ml-4 text-white-2">
                      <h2 className="text-2xl font-semibold font-serif">{request.userName}</h2>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusHandler(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <img
                    src={request.petImage}
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
                    <span>Nombre de Mascota: {request.petName}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    <span>Fecha de Solicitud: {request.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Contacto: {request.contact}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-orange hover:bg-orange-hover text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300" 
                  onClick={()=>onClickHandler(request.petId)}>
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
