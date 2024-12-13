import ShelterEvents from "@/pages/ShelterEvents";
import ImageBg from '@/assets/bg.jpg';
import Header from '@/components/layout/Header';


export default function SectionsEvents() {


  return (
    <div className="min-h-screen   "     style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageBg})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center'
  }}
  >

   <div>
    <Header />
   </div>
      <h1 className="text-center mt-10
        text-beige text-4xl font-bold">
          Crea tus eventos 
      </h1>

      <ShelterEvents  />
    </div>
    )
  
}