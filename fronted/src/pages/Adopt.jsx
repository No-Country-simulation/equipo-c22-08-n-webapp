
import React, { useEffect, useState } from 'react'
import Card from '@/components/ui/Card'
import { useParams } from 'react-router-dom'

import Pet from '@/components/ui/Pet'

// import  {process} from 'dotenv'

export default function Login() {
  const { id } = useParams();
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      console.log(`${import.meta.env.VITE_API_URL}/animal/${id}`);
      
      fetch(`${import.meta.env.VITE_API_URL}/animal/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          setAnimal(data.data);
          setLoading(false); 
        })
        .catch(error => {      
          console.error('Error fetching animal data:', error);
        });


    } else {
      console.error('Invalid ID');
    }
  }, [id]);
  return (
    <>

     {loading ? (
            <div className="text-center font-bold h-64 flex justify-center items-center">
              <p className="text-3xl">Cargando información de la mascota</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-8"></h2>
                 <Pet animal={animal}  />
            </>
          )}
 
    </>
  )
}
