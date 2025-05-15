import React, { useState, useEffect, useRef } from 'react';

const images = [
  'images/Slider/imageslider2.webp',
  'images/Slider/slider_2.webp',
  'images/Slider/tedx-2.webp',
  'images/Slider/imageslider6.webp',
  'images/Slider/ICACS-2025.webp',
  'images/Slider/tedx-1.webp',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Auto slider effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Pause auto slider on manual navigation
  const handleManualNav = (idx) => {
    setCurrent(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
  };

  return (
    <div className="relative w-full h-64 md:h-[90vh] overflow-hidden">
      {/* Slide Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
        style={{ filter: 'brightness(1.1)' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default ImageSlider;