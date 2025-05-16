import React, { useEffect, useState } from "react";

// Recruiter logos data
const recruiters = [
  { src: "./images/recruiters/amazon.png", alt: "Amazon", delay: "100" },
  { src: "./images/recruiters/motorola.jpg", alt: "Motorola", delay: "150" },
  { src: "./images/recruiters/tcs.png", alt: "TCS", delay: "200" },
  { src: "./images/recruiters/softwarem.png", alt: "SoftwareM", delay: "250" },
  { src: "./images/recruiters/torrent.png", alt: "Torrent", delay: "300" },
  { src: "./images/recruiters/intuitive.jpg", alt: "Intuitive.Cloud", delay: "350" },
  { src: "./images/recruiters/infosys.png", alt: "Infosys", delay: "400" },
  { src: "./images/recruiters/infocusp.png", alt: "Infocusp", delay: "450" },
  { src: "./images/recruiters/capgemi.jpg", alt: "Capgemini", delay: "500" },
  { src: "./images/recruiters/crest.png", alt: "Crest", delay: "550" },
  { src: "./images/recruiters/jeavio.jpg", alt: "Jeavio", delay: "600" },
  { src: "./images/recruiters/canblicks.jpg", alt: "Canblicks", delay: "650" },
  { src: "./images/recruiters/thomson.png", alt: "Thomson Reuters", delay: "700" },
  { src: "./images/recruiters/zignuts.png", alt: "Zignuts", delay: "750" },
  { src: "./images/recruiters/tatvasoft.png", alt: "TatvaSoft", delay: "800" },
  { src: "./images/recruiters/ibm.jpg", alt: "IBM", delay: "850" },
  { src: "./images/recruiters/navaera.jpg", alt: "Navaera", delay: "900" },
  { src: "./images/recruiters/einfo.png", alt: "Einfochips", delay: "950" },
  { src: "./images/recruiters/asite.png", alt: "Asite", delay: "1000" },
  { src: "./images/recruiters/tridhya.png", alt: "Tridhya Tech", delay: "1050" },
  { src: "./images/recruiters/odoo.png", alt: "Odoo", delay: "1100" },
  { src: "./images/recruiters/scaledge.jpg", alt: "ScalEdge", delay: "1150" },
  { src: "./images/recruiters/techmahindra.png", alt: "Tech Mahindra", delay: "1200" },
  { src: "./images/recruiters/simform.png", alt: "Simform", delay: "1250" },
  { src: "./images/recruiters/meditab.jpg", alt: "Meditab", delay: "1300" },
];

// Stats data
const stats = [
  { value: 8.5, label: " LPA", description: "Average Package", decimals: 1, delay: "200" },
  { value: 24, label: " LPA", description: "Highest Package", decimals: 0, delay: "300" },
  { value: 120, label: "+", description: "Companies Visited", decimals: 0, delay: "400" },
];

const Counter = ({ target, decimals, label }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // animation duration in ms
    const steps = 50; // number of steps
    const stepTime = duration / steps;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentCount = progress * target;
      
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, [target]);
  
  return (
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600">
      <span>{count.toFixed(decimals)}</span>
      <span>{label}</span>
    </h3>
  );
};

const RecruitersSection = () => {
  return (
    <section id="placement" className="section-container py-12"
    style={{background:'var(--bg-light)'}}>
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-10 text-gray-800">
          Prominent Recruiters
        </h2>
        
        {/* Placement Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="transform transition hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <Counter target={stat.value} decimals={stat.decimals} label={stat.label} />
                <p className="text-lg text-gray-600 mt-2">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Recruiters Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 content-container-wide">
          {recruiters.map((recruiter, index) => (
            <div key={index} className="transform transition duration-300 hover:scale-105 hover:rotate-1">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-center h-[120px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl z-0"></div>
                <img 
                  src={recruiter.src} 
                  alt={recruiter.alt} 
                  className="max-w-[80%] max-h-[80px] object-contain z-10 relative" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;