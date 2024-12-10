import ShelterEvents from "@/pages/ShelterEvents";
import ImageBg from '@/assets/bg.jpg';


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
     <p>
       retrocede
     </p>
   </div>

      <ShelterEvents  />
    </div>
    )
  
}