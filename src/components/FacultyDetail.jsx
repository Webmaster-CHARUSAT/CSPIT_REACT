import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faGlobe, 
  faIdCard,
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGoogle 
} from '@fortawesome/free-brands-svg-icons';

const FacultyDetails = () => {
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  
  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await fetch('/data/faculty.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const facultyMember = data.find(item => 
          item.name === decodeURIComponent(name)
        );
        
        if (facultyMember) {
          setFaculty(facultyMember);
        } else {
          console.warn(`No faculty found for name: ${name}`);
        }
      } catch (error) {
        console.error('Error loading JSON data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFacultyDetails();
  }, [name]);
  
  // Helper function to check if a value exists and is not "NA"
  const isValidValue = (value) => {
    if (value === undefined || value === null) return false;
    if (typeof value === 'string' && (value.trim() === '' || value.trim().toUpperCase() === 'NA')) return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  };
  
  // Helper function to render array content as a list
  const renderList = (items, propName = null) => {
    if (!Array.isArray(items) || items.length === 0) return null;
    
    return (
      <ol className="list-decimal pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="ml-2">
            {propName && typeof item === 'object' ? item[propName] : item}
          </li>
        ))}
      </ol>
    );
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }
  
  if (!faculty) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-xl font-semibold text-red-600">Faculty member not found</div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen relative p-5 m-2 sm:p-0 sm:m-0 md:p-5 md:m-2 lg:p-5 lg:m-2">
      <div className="container mx-auto bg-white p-4 shadow-lg rounded-lg mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Profile Image and Info */}
          <div className="md:w-1/4">
            <div className="text-center">
              {isValidValue(faculty.image_src) && (
                <img
                  src={faculty.image_src.replace(/\\/g, "/")}
                  alt={faculty.name}
                  style={{ backgroundColor: "#a9a9a9" }}
                  className="w-full h-[300px] object-cover rounded-lg border-[3px] border-[#0066b3] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] mx-auto transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
            <div className="text-center mt-4">
              <h4 className="text-2xl font-bold mb-1">{faculty.name}</h4>
              <p className="font-bold text-gray-700 mb-2">{faculty.title}</p>
              <p className="text-gray-600 mb-3">{faculty.degree}</p>
              
              <div className="flex justify-center space-x-4 text-2xl">
                {isValidValue(faculty.email) && (
                  <a 
                    href={`mailto:${faculty.email}`} 
                    title="Email"
                    className="text-gray-600 hover:text-[#033c67]"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                )}
                
                {isValidValue(faculty.linkedin) && (
                  <a 
                    href={faculty.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="text-gray-600 hover:text-[#033c67]"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
                
                {isValidValue(faculty.website) && (
                  <a 
                    href={faculty.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Website"
                    className="text-gray-600 hover:text-[#033c67]"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                )}
                
                {isValidValue(faculty.scholar) && (
                  <a 
                    href={faculty.scholar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Google Scholar"
                    className="text-gray-600 hover:text-[#033c67]"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                )}
                
                {isValidValue(faculty.vidwan) && (
                  <a 
                    href={faculty.vidwan} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Vidwan Profile"
                    className="text-gray-600 hover:text-[#033c67]"
                  >
                    <FontAwesomeIcon icon={faIdCard} />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Section: Accordion */}
          <div className="md:w-3/4">
            <div className="space-y-0">
              {/* Areas of Expertise */}
              {isValidValue(faculty.research_interests) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Areas of Expertise" 
                    content={renderList(faculty.research_interests)} 
                  />
                </div>
              )}
              
              {/* Subjects Taught */}
              {isValidValue(faculty.subjects) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Subjects Taught" 
                    content={renderList(faculty.subjects, "name")} 
                  />
                </div>
              )}
              
              {/* Academic Awards */}
              {isValidValue(faculty.awards) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Academic Awards" 
                    content={renderList(faculty.awards)} 
                  />
                </div>
              )}
              
              {/* Research & Publications */}
              {isValidValue(faculty.research_projects) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Research & Publications" 
                    content={renderList(faculty.research_projects)} 
                  />
                </div>
              )}
              
              {/* Projects */}
              {isValidValue(faculty.teaching) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Projects" 
                    content={renderList(faculty.teaching)} 
                  />
                </div>
              )}
              
              {/* Memberships */}
              {isValidValue(faculty.memberships) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Memberships" 
                    content={renderList(faculty.memberships)} 
                  />
                </div>
              )}
              
              {/* Certifications */}
              {isValidValue(faculty.certifications) && (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <Accordion 
                    title="Certifications" 
                    content={renderList(faculty.certifications)} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Accordion component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className={`w-full text-left p-3 font-bold ${isOpen ? 'bg-[#033c67] text-white' : 'bg-[#0066b3] text-white'} focus:outline-none transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span className="transform transition-transform duration-300">
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {content}
        </div>
      )}
    </>
  );
};

export default FacultyDetails;