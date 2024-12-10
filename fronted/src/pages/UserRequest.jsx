import React, { useEffect, useState } from "react";
import { CircleArrowLeft, User, PawPrint, Phone, Mail, MapPinned } from "lucide-react";

const UserProfile = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  useEffect(()=>{
    
  })

  const handleApprove = () => {
    setIsApproved(true);
    setIsRejected(false);
  };

  const handleReject = () => {
    setIsRejected(true);
    setIsApproved(false);
  };

  const userData = {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(555) 123-4567",
    address: "123 Pet Lovers Lane, Happy City, HC 12345",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    petDetails: {
      name: "Luna",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
      description: "I've always wanted a Golden Retriever, and Luna seems perfect for my active lifestyle. I have a large backyard and love going for long walks. I work from home, so I can give her lots of attention and care."
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-6">
            <div className="flex items-center">
              <button className="text-white mr-4">
                <CircleArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-white">Perfil de usuario</h1>
            </div>
          </div>

          {/* User Info Section */}
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={userData.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                }}
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <div className="flex items-center mb-2">
                  <User className="text-gray-500 mr-2" />
                  <h2 className="text-xl font-semibold">{userData.fullName}</h2>
                </div>
                <div className="flex items-center mb-2">
                  <Mail className="text-gray-500 mr-2" />
                  <p>{userData.email}</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="text-gray-500 mr-2" />
                  <p>{userData.phone}</p>
                </div>
                <div className="flex items-center">
                  <MapPinned className="text-gray-500 mr-2" />
                  <p>{userData.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Details Section */}
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <PawPrint className="mr-2" />
              Solicitud de Adopción de Mascota
            </h3>
            <div className="flex flex-col md:flex-row">
              <img
                src={userData.petDetails.image}
                alt="Pet"
                className="w-full md:w-64 h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1";
                }}
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h4 className="font-semibold text-lg">{userData.petDetails.name}</h4>
                <p className="text-gray-600 mb-2">{userData.petDetails.type} • {userData.petDetails.breed}</p>
                <p className="text-gray-600 mb-4">{userData.petDetails.age} años</p>
                <p className="text-gray-700">{userData.petDetails.description}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            {!isRejected && (
              <button
                onClick={handleApprove}
                className={`px-6 py-2 rounded-lg font-semibold ${isApproved
                  ? "bg-green-100 text-green-800 cursor-default"
                  : "bg-green-600 text-white hover:bg-green-700"}`}
              >
                {isApproved ? "Adoption Approved" : "Approve Adoption"}
              </button>
            )}
            {!isApproved && (
              <button
                onClick={handleReject}
                className={`px-6 py-2 rounded-lg font-semibold ${isRejected
                  ? "bg-red-100 text-red-800 cursor-default"
                  : "bg-red-600 text-white hover:bg-red-700"}`}
              >
                {isRejected ? "Adoption Rejected" : "Reject Adoption"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;