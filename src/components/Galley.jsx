import React, { useState, useEffect, useRef } from 'react';

// Gallery data
const galleryData = {
  Cultural: [
    "images/gallery/Cultural/cultural2.webp",
    "images/gallery/Cultural/cultural3.webp",
    "images/gallery/Cultural/cultural4.webp",
    "images/gallery/Cultural/cultural5.webp",
  ],
  Technical: [
    "images/gallery/TEDx/ted5.webp",
    "images/gallery/TEDx/ted10.webp",
    "images/gallery/AWS Commuinity Day/aws1.webp",
    "images/gallery/AWS Commuinity Day/aws3.webp",
  ],
  Sports: [
    "images/gallery/Sports/towgirls1.webp",
    "images/gallery/Sports/tt1.webp",
    "images/gallery/Sports/DSC00690_11_11zon.webp",
    "images/gallery/Sports/cricketgirls.webp",
    "images/gallery/Sports/volleyball4.webp",
  ],
};

// Stacked Cards Component
const StackedCards = ({ category, images, onClick }) => {
  // Use first 3 images for the stack effect (in original order)
  const displayImages = images.slice(0, 3);
  
  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative w-full max-w-[380px] h-[300px] p-1 mx-auto cursor-pointer group"
        onClick={() => onClick(category)}
      >
        {/* Bottom card (index 0) */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-md z-[1] 
                    group-hover:-rotate-[21deg] group-hover:translate-y-[-40px] group-hover:translate-x-[20px] 
                    transition-transform duration-300 ease-in-out"
        >
          <img 
            src={displayImages[0]} 
            alt={`${category} Event 1`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Middle card (index 1) */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-md z-[2] 
                    group-hover:-rotate-[7deg] group-hover:translate-y-[-20px] group-hover:translate-x-[10px]
                    transition-transform duration-300 ease-in-out"
        >
          <img 
            src={displayImages[1]} 
            alt={`${category} Event 2`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Top card (index 2) - stays in place */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-md z-[3]
                    transition-transform duration-300 ease-in-out"
        >
          <img 
            src={displayImages[2]} 
            alt={`${category} Event 3`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="text-center mt-10 font-bold text-base md:text-lg">{category} Events</p>
    </div>
  );
};

// Gallery Modal Component
const GalleryModal = ({ isOpen, category, images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSliderInterval, setAutoSliderInterval] = useState(null);
  const modalRef = useRef(null);
  
  useEffect(() => {
    // Reset to first image when modal opens
    if (isOpen) {
      setCurrentIndex(0);
      startAutoSlider();
      
      // Add escape key event listener
      const handleEscape = (e) => {
        if (e.key === "Escape" || e.key === "Esc") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
        stopAutoSlider();
      };
    }
  }, [isOpen, category]);
  
  const startAutoSlider = () => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    setAutoSliderInterval(interval);
  };
  
  const stopAutoSlider = () => {
    if (autoSliderInterval) {
      clearInterval(autoSliderInterval);
    }
  };
  
  const restartAutoSlider = () => {
    stopAutoSlider();
    startAutoSlider();
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    restartAutoSlider();
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    restartAutoSlider();
  };
  
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    restartAutoSlider();
  };
  
  const handleOutsideClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      ref={modalRef}
      className="fixed top-0 left-0 w-full h-full bg-black/90 z-[9999] overflow-auto"
      onClick={handleOutsideClick}
    >
      <div className="relative mx-auto w-[80%] max-w-[1200px] h-full flex flex-col items-center justify-center p-5 text-white">
        <span 
          className="absolute top-5 right-8 text-3xl cursor-pointer hover:text-red-500 transition-colors"
          onClick={onClose}
        >
          &times;
        </span>
        
        <h3 className="text-2xl font-bold mb-4">{category.toUpperCase()} EVENTS</h3>
        
        <div className="relative flex items-center justify-center w-full max-h-[70%] my-5">
          <img 
            src={images[currentIndex]} 
            alt={`${category} Event`}
            className="max-h-full w-auto transition-transform duration-200"
          />
          
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-lg text-3xl"
            onClick={handlePrev}
          >
            &lt;
          </button>
          
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-lg text-3xl"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-[60px] cursor-pointer rounded transition-transform hover:scale-110 object-cover
                ${currentIndex === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Gallery Component
const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  
  const openModal = (category) => {
    setCurrentCategory(category);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <section className="py-12 " id="gallery"
    style={{ background: 'var(--bg-light' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">GALLERY</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-16 md:mb-0">
            <StackedCards 
              category="Cultural" 
              images={galleryData.Cultural}
              onClick={openModal}
            />
          </div>
          
          <div className="mb-16 md:mb-0">
            <StackedCards 
              category="Technical" 
              images={galleryData.Technical}
              onClick={openModal}
            />
          </div>
          
          <div className="mb-8 md:mb-0">
            <StackedCards 
              category="Sports" 
              images={galleryData.Sports}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      
      <GalleryModal 
        isOpen={modalOpen}
        category={currentCategory}
        images={currentCategory ? galleryData[currentCategory] : []}
        onClose={closeModal}
      />
    </section>
  );
};

export default GallerySection;
