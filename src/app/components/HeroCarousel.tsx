import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgPicture1X1LpHeroDtArEgp160226Kids from "figma:asset/c07909dbc3f7c250ae65be3c422e69e4da5b9c21.png";
import imgPictureBabyDtArEgp160226Kids from "figma:asset/6b18b6a067d04b2e89d30faeead01e2b61408f59.png";
import imgPictureTeensDtArEgp190126 from "figma:asset/09ca4e19a217646f46034e93716e28e51846da1b.png";
import imgPictureSleepwearDtArEgp190126 from "figma:asset/14927efdb98043ecb61cc5b4a2fda21ad4400f83.png";
import imgPicture1X1ShukranDtAr191125 from "figma:asset/b59e6554aa510926b80f5c30b4b150283a800604.png";

const slides = [
  {
    id: 0,
    image: imgPicture1X1LpHeroDtArEgp160226Kids,
    alt: 'Kids Ramadan Collection'
  },
  {
    id: 1,
    image: imgPictureBabyDtArEgp160226Kids,
    alt: 'Baby Essentials Collection'
  },
  {
    id: 2,
    image: imgPictureTeensDtArEgp190126,
    alt: 'Teens Summer Collection'
  },
  {
    id: 3,
    image: imgPictureSleepwearDtArEgp190126,
    alt: 'Comfortable Sleepwear'
  },
  {
    id: 4,
    image: imgPicture1X1ShukranDtAr191125,
    alt: 'Shukran Loyalty Program'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[790px] overflow-hidden bg-[#fcf9f6]">
      {/* Carousel Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2px]">
            <img
              alt={slides[currentSlide].alt}
              className="absolute h-full left-[-5.14%] max-w-none top-0 w-[110.28%] object-cover"
              src={slides[currentSlide].image}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex items-center gap-2.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide
                ? 'bg-white w-6 h-1'
                : 'bg-[#ccc] hover:bg-white/70 w-1 h-1'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-4 transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-4 transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
