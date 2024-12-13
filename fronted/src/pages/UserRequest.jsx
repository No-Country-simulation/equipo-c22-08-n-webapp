import React, { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { CircleArrowLeft, User, PawPrint, Phone, Mail, MapPinned } from "lucide-react";
import { Link } from 'react-router-dom'
import { removeHtmlTags } from '@/utils/helpers'


const UserRequest = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [solicitud, setSolicitud] = useState(JSON.parse(localStorage.getItem('solicitud'))[localStorage.getItem('solicitudIndex')]);
  const { data: pet, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/animal/${localStorage.getItem('idPet')}`);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === "true");




  const handleApprove = () => {
    const auxSolicitud = solicitud
    auxSolicitud.status = "aprobada";
    setIsApproved(true);
    setIsRejected(false);
    setSolicitud(solicitud);
    localStorage.setItem('solicitud', solicitud);
  };

  const handleReject = () => {
    const auxSolicitud = solicitud
    auxSolicitud.status = "rechazada";
    setIsRejected(true);
    setIsApproved(false);
    setSolicitud(solicitud);
    localStorage.setItem('solicitud', solicitud);
  };



  return <>
    {
      solicitud ?
        (<div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mt-5 mb-10 text-center text-white-2">REVISIÓN DE SOLICITUD</h2>
            <div className="bg-black   shadow-xl rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-beige p-6">
                <div className="flex items-center">
                  <Link to={"/dashboard"}>
                    <button className="text-white mr-4">
                      <CircleArrowLeft className="h-6 w-6" />
                    </button>
                  </Link>

                </div>
              </div>

              {/* User Info Section */}
              <div className="p-6 border-b border-brown bg-beige-light">
                <h1 className="text-2xl font-bold text-black mb-4">Perfil de usuario</h1>
                <div className="flex flex-col md:flex-row items-center">

                  <img
                    src={"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-brown ms-10 mr-20"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                    }}
                  />
                  <div className="md:flex">
                    <div className="md:ml-6 mt-4 md:mt-0">
                      <div className="flex items-center mb-2">
                        <User className="text-gray-500 mr-2" />
                        <h2 className="text-xl font-serif font-semibold flex items-baseline">{solicitud.nombre} {solicitud.apellido}<h3 className="text-sm font-serif">, {solicitud.edad} años</h3></h2>
                      </div>
                      <div className="flex items-center mb-2">
                        <Mail className="text-gray-500 mr-2" />
                        <p>{solicitud.email}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <Phone className="text-gray-500 mr-2" />
                        <p>{solicitud.telefono}</p>
                      </div>
                      <div className="flex items-center">
                        <MapPinned className="text-gray-500 mr-2" />
                        <p>{solicitud.direccion}, {solicitud.ciudad}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pet Details Section */}
              <div className="p-6 border-t-b bg-beige-light">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <PawPrint className="mr-2" />
                  Solicitud de Adopción de Mascota
                </h3>
                <div className="flex flex-col md:flex-row">
                  <img
                    src={pet?.data.imagenes[0].imagen}
                    alt="Pet"
                    className="w-full md:w-64 h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1";
                    }}
                  />
                  <div className="md:ml-6 mt-4 md:mt-0">
                    <h4 className="font-semibold text-lg">{pet?.data.nombre}</h4>
                    <p className="text-gray-600 mb-2">{removeHtmlTags(pet?.data.desc_fisica)}</p>
                    <p className="text-gray-600 mb-4">{pet?.data.edad}</p>
                    <p className="text-gray-700">{removeHtmlTags(pet?.data.desc_personalidad)}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {
                !isAdmin && (solicitud.solicitudInfo.status === "pendiente"
                  ? (
                    <div className="p-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-beige">Adopcion pendiente</div>)
                  : (<div className="p-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-beige">Adopcion Aprobada</div>))
              }
              {isAdmin && (
                <div className="p-6 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 bg-beige">
                  {!isRejected && (
                    <button
                      onClick={handleApprove}
                      className={`px-6 py-2 rounded-lg font-semibold ${isApproved
                        ? "bg-green text-green-800 cursor-default"
                        : "bg-green-lila text-white hover:bg-green-700"}`}
                    >
                      {isApproved ? "Adopcion aprobada" : "Aprobar"}
                    </button>
                  )}
                  {!isApproved && (
                    <button
                      onClick={handleReject}
                      className={`px-6 py-2 rounded-lg font-semibold ${isRejected
                        ? "bg-red text-red-800 cursor-default"
                        : "bg-brown text-white hover:bg-red-700"}`}
                    >
                      {isRejected ? "Adopcion rechazada" : "Rechazar"}
                    </button>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>) : (
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 shadow-">
            <div className="text-center py-12 bg-black rounded-lg shadow-lg mt-6">
              <p className="text-white text-lg">No hay solicitudes de adopción.</p>
            </div>
          </div>)
    }

  </>
};

export default UserRequest;

