import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FacultySection = () => {
  const [facultyData, setFacultyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch('/data/faculty.json');
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error("Error loading faculty data:", error);
      }
    };
    fetchFacultyData();
  }, []);

  const handleFacultyClick = (facultyName) => {
    // Using React Router navigation instead of direct URL manipulation
    navigate(`/faculty/${encodeURIComponent(facultyName)}`);
  };

  return (
    <section 
      className="py-10 text-white min-h-screen px-6 mt-20"
      style={{ background: "linear-gradient(135deg, #033c67, #6aa0d3)" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">MEET OUR FACULTY</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5">
          {facultyData.map((faculty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-[95%] mx-auto overflow-hidden border-2 border-gray-200"
              onClick={() => handleFacultyClick(faculty.name)}
            >
              <div className="p-1">
                <img 
                  style={{backgroundColor: "#a9a9a9"}}
                  src={faculty.image_src} 
                  alt={faculty.name} 
                  className="w-full h-[260px] object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="text-[#033c67] font-bold text-lg mb-0">{faculty.name}</h4>
                <h5 className="text-gray-600 text-xs uppercase tracking-wide my-1">{faculty.title}</h5>
                <p className="text-gray-500 text-xs mb-2">{faculty.degree}</p>
                
                <p className="text-sm mb-2">
                  <span className="font-bold text-[#033c67] block mb-1">Research Interests:</span>
                  {Array.isArray(faculty.research_interests) 
                    ? faculty.research_interests.map((interest, i) => (
                        <span key={i} className="block text-gray-600 leading-tight">{interest}</span>
                      ))
                    : <span className="block text-gray-600">{faculty.research_interests}</span>
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;