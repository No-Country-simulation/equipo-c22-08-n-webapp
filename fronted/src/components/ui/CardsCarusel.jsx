import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const CardsCarusel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);  


      console.log('slides')
      console.log(slides)
  useEffect(() => {
    updateCardsToShow();  
    window.addEventListener('resize', updateCardsToShow);  
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const updateCardsToShow = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setCardsToShow(3);
    } else if (width >= 640) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1); 
    }
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="text-center mt-8">
        <p>No se encontraron elementos.</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsToShow) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - cardsToShow + slides.length) % slides.length);
  };

  const getCurrentCards = () => {
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % slides.length;
      cards.push(slides[index]);
    }
    return cards;
  };

  const MAX_DOTS = 5; 

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full flex gap-4 justify-between"
        >
          {getCurrentCards().map((slide, index) => (
            <Card
              key={index}
              id={slide?.id}
              image={slide?.image}
              title={slide?.title}
              redirect={true}
              description={slide?.description}
              vacunas={slide?.vacunas}
              selectedCard={true}
              sectionDetails={true}
              className="bg-secondary w-full sm:w-1/2 lg:w-1/3"
            >
              {slide?.buttonText}
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
      

      <Button
        onClick={prevSlide}
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
        onClick={nextSlide}
        className="absolute -right-5 top-1/2 -translate-y-1/2 backdrop-blur-lg rounded-full p-2 transition"
        bgColor="orange"
        hoverColor="transparent"
      >
        <ChevronRight className="text-secondary" />
      </Button>
    </div>
  );
};

export default CardsCarusel;
