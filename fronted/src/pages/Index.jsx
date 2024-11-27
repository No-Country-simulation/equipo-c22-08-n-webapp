import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CardsCarusel from "@/components/ui/CardsCarusel";
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
          id: animal.id,
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
      {/* <Header /> */}

      <main className="mx-auto px-4 sm:px-6 bg-primary lg:px-8 py-12 text-white-2">
        <div className="bg-white rounded-lg  overflow-hidden mx-auto max-w-7xl">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Encuentra a tu amigo peludo perfecto</h1>
            <p className="text-xl mb-8"> Dale un hogar amoroso a una mascota necesitada</p>
            <Button
              bgColor="secondary"
              hoverColor="green-lila"

              onClick={() => console.log('Adopting started!')}
            >
              Adopta
              <Cat className="mr-1" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              image={whyAdopt}
              title="¿Adoptar?"
              setAnimation={true}
              selectedCard={false}
              heightNoImage=""
              phaseMotivation="Adoptar es ofrecer un hogar a un corazón perdido y recibir un amor que no conoce condiciones"
              description="Al abrir tu hogar a un animal, le das la oportunidad de renacer en un ambiente lleno de cariño, mientras te enseñan a amar sin reservas. Adoptar transforma vidas, la tuya y la de ese ser que solo espera darte su amor sincero, mostrando lealtad y ternura en cada mirada."
              className="bg-secondary"
            />
            <Card
              image={ourMission}
              selectedCard={false}
              setAnimation={true}
              heightNoImage=""
              title="Nuestra Misión"
              phaseMotivation="Nuestro refugio, lugar donde los corazones perdidos encuentran el amor que siempre merecieron"
              description="En cada rincón de nuestro refugio, cada animal herido o asustado encuentra consuelo y cariño. Les ofrecemos más que un techo: les damos esperanza, cuidado y el amor que nunca tuvieron. Aquí, cada vida es importante, y cada rescate es una nueva oportunidad para renacer. Al encontrar su hogar definitivo, estos seres saben que han encontrado un lugar donde finalmente son amados."
              className="bg-secondary"
            />
          </div>
        </div>
      </main>

      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="text-center">
              <p className="text-xl">Cargando mascotas...</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-8">Mascotas</h2>
              <CardsCarusel slides={slides} />
            </>
          )}
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
