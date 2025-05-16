import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFlask,
  faTrophy,
  faBriefcase,
  faChalkboardTeacher,
  faNewspaper,
  faFileInvoiceDollar,
  faHandHoldingUsd
} from "@fortawesome/free-solid-svg-icons";

// Stats data
const statsData = [
  {
    icon: faUsers,
    value: 36,
    label: "PhD",
    decimals: 0,
  },
  {
    icon: faFlask,
    value: 16,
    label: "Research Projects",
    decimals: 0,
  },
  {
    icon: faTrophy,
    value: 45,
    label: "Ongoing Projects",
    decimals: 0,
  },
  {
    icon: faBriefcase,
    value: 115,
    label: "Entrepreneurs",
    decimals: 0,
  },
  {
    icon: faChalkboardTeacher,
    value: 118,
    label: "Faculty Members",
    decimals: 0,
  },
  {
    icon: faNewspaper,
    value: 2313,
    label: "Publications",
    decimals: 0,
  },
  {
    icon: faFileInvoiceDollar,
    value: 61,
    label: "Number of Grants",
    decimals: 0,
  },
  {
    icon: faHandHoldingUsd,
    value: 55.8,
    label: "Amount of Grants",
    suffix: "M",
    decimals: 1,
  },
];

const StatItem = ({ icon, value, label, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for counting up
  useEffect(() => {
    let isMounted = true;
    
    // Start animation when component becomes visible
    if (isVisible) {
      const duration = 2000; // Animation duration in milliseconds
      const frameRate = 1000 / 60; // 60 frames per second
      const increment = value / (duration / frameRate);
      
      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        
        if (currentCount >= value) {
          currentCount = value;
          if (isMounted) {
            setCount(value);
          }
          clearInterval(timer);
        } else if (isMounted) {
          setCount(currentCount);
        }
      }, frameRate);
      
      return () => {
        isMounted = false;
        clearInterval(timer);
      };
    }
  }, [isVisible, value]);

  // Observer to trigger animation when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = document.getElementById(`stat-${label.replace(/\s+/g, '-')}`);
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [label]);

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-')}`}
      className="text-center px-4"
    >
      <div 
        className={`text-5xl text-yellow-400 mb-2 transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <div 
        className={`text-4xl font-bold text-white transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-xl text-white mt-1">
        {label}
      </div>
    </div>
  );
};

const ScalarsSection = () => {
  return (
    <section
      className="section-container py-16"
      style={{ background: 'var(--bg-blue' }}
      id="scalars"
    >
      <div className="container">
        <h2 className="text-white text-center font-bold text-4xl mb-16">
          SCALARS
        </h2>
        
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto mb-20">
          {statsData.slice(0, 4).map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <StatItem
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                decimals={stat.decimals}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
          {statsData.slice(4).map((stat, index) => (
            <div key={index + 4} className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <StatItem
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                decimals={stat.decimals}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalarsSection;