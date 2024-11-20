import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Carousel from "@/components/ui/Carousel";
import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";
import Card from "@/components/ui/Card";
import { Cat } from 'lucide-react';
import whyAdopt from "@/assets/whyAdopt.avif";
import ourMission from "@/assets/ourMission.jpg";
import { useEffect, useState } from 'react';

export default function Index() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const fetchedSlides = data.data.map(animal => ({
          IdCard: animal.id,
          image: animal.imagen,
          title: animal.nombre,
          description: animal.desc_fisica,
          vacunas: animal.vacunas,
          buttonText: 'Adopt Me!'
        }));
        
        setSlides(fetchedSlides);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="min-h-screen font-serif">
      <Header />
      
      <main className="mx-auto px-4 sm:px-6 bg-primary lg:px-8 py-12 text-white-2">
        <div className="bg-white rounded-lg  overflow-hidden mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Furry Friend</h1>
            <p className="text-xl mb-8">Give a loving home to a pet in need</p>
            <Button
              bgColor="secondary"
              hoverColor="green-lila"
              onClick={() => console.log('Adopting started!')}
            >
              Start Adopting
              <Cat className="mr-1" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              image={whyAdopt} 
              title="Why Adopt?" 
              setAnimation={true}
              selectedCard={false}
              heightNoImage="40"
              description="Adopting a pet not only gives a deserving animal a loving home but also brings joy and companionship to your life." 
              className="bg-secondary"
            />
            <Card 
              image={ourMission} 
              selectedCard={false}
                setAnimation={true}
                heightNoImage="40"
              title="Our Mission" 
              description="We're committed to finding loving homes for all pets and supporting animal welfare in our community."  
              className="bg-secondary"
            />
          </div>
        </div>
      </main>

      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mostramos el mensaje de carga hasta que los datos sean obtenidos */}
          {loading ? (
            <div className="text-center">
              <p className="text-xl">Loading pets...</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-8">Featured Pets</h2>
              <Carousel slides={slides} />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
