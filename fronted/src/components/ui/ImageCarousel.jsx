import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import Button from '@/components/ui/Button';

import Image from '@/components/ui/Image';


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('images', images);

  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!images || images.length === 0) {
    return <div className="text-center mt-8">No se encontraron imágenes.</div>;
  }

  // Función para mover a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full max-w-7xl mx-auto overflow-hidden ">
      {/* Carrusel de imágenes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full flex gap-4 justify-between"
        >
          <Image
            src={images[currentIndex].imagen}
            alt={`Imagen ${currentIndex + 1}`}
            setAnimation = {true}
            className="w-full h-[450px] object-cover "
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div>
          <Button
            onClick={prevImage}
            className="absolute -left-5 top-1/2 -translate-y-1/2 
                  backdrop-blur-lg 
                  rounded-full 
                  block 
                  p-2 
                  transition
                  font-extrabold
                  font-sans
                  "
            bgColor="orange"
            hoverColor="yellow"
          >
            <ChevronLeft className="text-secondary" />
          </Button>
          <Button
            onClick={nextImage}
            className="absolute -right-5 top-1/2 
            -translate-y-1/2 backdrop-blur-lg rounded-full p-2 transition"
            bgColor="orange"
            hoverColor="transparent"
          >
            <ChevronRight className="text-secondary" />
          </Button>
          
        </div>
     )}
    </div>
  );
};

export default ImageCarousel;
