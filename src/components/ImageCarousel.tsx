import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=1200',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      
      <button
        onClick={() => setCurrentIndex((current) => (current - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-green-800" />
      </button>
      
      <button
        onClick={() => setCurrentIndex((current) => (current + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-green-800" />
      </button>
    </div>
  );
}