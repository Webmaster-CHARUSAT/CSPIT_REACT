import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupId) => {
    setActivePopup(popupId);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = 'auto';
  };

  // Popup data
  const popupData = {
    nirf: {
      title: "National Institute Ranking Framework (NIRF)",
      content: (
        <ul className="space-y-2">
          <li><a href="https://www.charusat.ac.in/cspit/files/CSPIT_NIRF_2025.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2025</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/CSPIT_NIRF_2024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2024</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/CSPIT_NIRF_2023.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2023</a></li>
          <li><a href="https://charusat.edu.in/iqac/nirf/NIRF2022/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2022</a></li>
          <li><a href="https://charusat.edu.in/iqac/nirf/NIRF2021/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2021</a></li>
          <li><a href="https://charusat.edu.in/iqac/nirf/NIRF2020/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2020</a></li>
          <li><a href="https://charusat.edu.in/iqac/nirf/NIRF2019/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2019</a></li>
          <li><a href="https://charusat.edu.in/iqac/nirf/NIRF2018/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">NIRF Report 2018</a></li>
        </ul>
      )
    },
    aicte: {
      title: "All India Council for Technical Education (AICTE)",
      content: (
        <ul className="space-y-2">
          <li><a href="./files/EOA-Report-2025-26.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2025-2026</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/EOA-Report-2024-2025.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2024-2025</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/EOA-Report-2023-2024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2023-2024</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/EOA-Report-2022-2023.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2022-2023</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/2021-2022.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2021-2022</a></li>
          <li><a href="https://www.charusat.ac.in/cspit/files/2020-2021.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2020-2021</a></li>
          <li><a href="https://charusat.ac.in/cspit/files/2019-2020.PDF" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">AICTE EOA Report 2019-2020</a></li>
        </ul>
      )
    },
    feedback: {
      title: "Feedback Analysis and Action Taken Report",
      content: (
        <ul className="space-y-3">
          {[
            "Information Technology",
            "Civil Engineering",
            "Electronics & Communication Engineering",
            "Mechanical Engineering",
            "Computer Engineering",
            "Electrical Engineering",
            "Computer Science and Engineering"
          ].map((dept, index) => (
            <li key={index} className="flex flex-col md:flex-row justify-between border-b border-gray-600 pb-2">
              <span className="font-medium">{dept}</span>
              <span className="mt-1 md:mt-0">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2023-2024</a>
              </span>
            </li>
          ))}
        </ul>
      )
    }
  };

  return (
    <>
      <footer className=" text-white pt-10 pb-0"
      style={{ background: 'var(--bg-blue)' }}>
        <div className="w-[95%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Institute Logo and Name */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img 
                
                  className="w-[150px] h-auto mb-4 bg-white p-2 rounded-md"
                  src="images/CSPIT_Logo.png" 
                  alt="Institute Logo"
                  loading="lazy"
                  style={{
                    boxShadow: 'inset -4px -4px 8px rgba(255, 255, 255, 0.9), 6px 6px 10px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
              
              <h5 className="font-bold text-center mb-6">
                CHANDUBHAI S. PATEL <br />
                INSTITUTE OF TECHNOLOGY
              </h5>
              
              <div className="flex justify-center w-full mb-0">
                <img 
                loading="lazy"
                  src="./images/charusatlogo.png" 
                  alt="Charusat Logo" 
                  className="w-[300px] h-auto"
                  style={{
                    boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.8), 4px 4px 30px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:px-4">
              <h5 className="text-yellow-300 font-bold text-xl mb-2">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.charusat.ac.in/cspit/files/CSPIT_Mandatory%20Disclosure_2023-24.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Mandatory Disclosure
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => openPopup('nirf')}
                    className="text-white text-left inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    NIRF
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openPopup('aicte')}
                    className="text-white text-left inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    AICTE EOA
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openPopup('feedback')}
                    className="text-white text-left inline-block relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  >
                    Feedback Analysis and Action Taken Report
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact Us */}
            <div>
              <h5 className="text-yellow-300 font-bold text-xl mb-2 " id="contact-us">Contact Us</h5>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faPhone} className="text-yellow-300 mr-3 mt-1" />
                  <p>+91-2697-265112</p>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300 mr-3 mt-1" />
                  <p>principal.cspit@charusat.ac.in</p>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-300 mr-3 mt-1" />
                  <p>
                    Off. Nadiad-Petlad Highway,<br />
                    Changa-388421, Anand, Gujarat, India
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Location */}
            <div>
              <h5 className="text-yellow-300 font-bold text-xl mb-2">Location</h5>
              <div className="w-full h-[190px] rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.41961737984!2d72.81767727475798!3d22.60080043193719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c699400001%3A0xb50162f2acb04c04!2sCSPIT%20(CE%2FIT)!5e0!3m2!1sen!2sin!4v1729709960389!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Campus Map"
                />
              </div>
              <p className="text-sm mt-2">Visit us at our campus in Changa.</p>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-white mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center py-4">
              <div className="mb-4 md:mb-0">
                <span className="text-sm">&#169;Copyright CSPIT- CHARUSAT | All rights reserved</span>
              </div>
              
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/people/Cspit-Charusat/pfbid0XnpDeADufmh2SmRWAq2tWZmSvyJSsgVqRH5YTicU8Y6vo9qGvyCMNTGdkt7qxsLvl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center  group transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-white group-hover:text-blue-900 group-hover:transform group-hover:rotate-[360deg] transition-all duration-500" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/school/chandubhai-s.-patel-institute-of-technology/?originalSubdomain=in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center  group transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-white group-hover:text-blue-900 group-hover:transform group-hover:rotate-[360deg] transition-all duration-500" />
                </a>
                
                <a 
                  href="https://www.instagram.com/cspit_charusat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center  group transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-white group-hover:text-blue-900 group-hover:transform group-hover:rotate-[360deg] transition-all duration-500" />
                </a>
                
                <a 
                  href="https://twitter.com/thecharusat?lang=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center group transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-white group-hover:text-blue-900 group-hover:transform group-hover:rotate-[360deg] transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popups */}
      {activePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">{popupData[activePopup].title}</h3>
                <button 
                  onClick={closePopup}
                  className="text-gray-500 hover:text-red-600 text-2xl focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <hr className="mb-4" />
              <div className="text-gray-700">
                {popupData[activePopup].content}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
