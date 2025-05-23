import React, { useState } from 'react';

const ECC = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  // Activities data with all details
  const activities = [
    {
      id: 'solar',
      title: "Solar Power Plant Initiative",
      imgSrc: "./images/ECC/solar.png",
      altText: "Solar Power Initiative",
      description: "Total capacity of 990 KW installed at CHARUSAT campus.",
      content: "The Energy Conservation Cell at CHARUSAT has implemented a total capacity of 990 KW solar power plant on the campus. This initiative helps in reducing the carbon footprint and electricity costs while also serving as a practical educational resource for students. The solar panels are installed on the rooftops of various buildings across the campus, providing sustainable energy to power classrooms, laboratories, and other facilities."
    },
    {
      id: 'workshops',
      title: "Annual Poster-Making Competition",
      imgSrc: "./images/ECC/poster.jpg",
      altText: "Annual Workshops",
      description: "Energy Conservation Cell organized poster making competition on National Energy Conservation Day.",
      content: "Every year on National Energy Conservation Day, the Energy Conservation Cell at CHARUSAT organizes a poster-making competition to raise awareness about energy conservation. Students from various departments participate in this creative event, showcasing their talent and understanding of energy-saving concepts. The posters are judged based on creativity, message clarity, and overall impact. The best posters are displayed across the campus to inspire the community to save energy."
    },
    {
      id: 'audits',
      title: "Energy Conservation Day Play",
      imgSrc: "./images/ECC/play.png",
      altText: "Energy Audits",
      description: "A play was performed by students of the Electrical Engineering Department to raise awareness about National Energy Conservation Day.",
      content: "Students from the Electrical Engineering Department performed a theatrical play to commemorate National Energy Conservation Day. The play effectively highlighted the importance of energy conservation through creative storytelling and dramatic representation. This innovative approach helped engage a wider audience and convey the message of responsible energy usage in an entertaining and memorable way. The play received positive feedback from the audience, encouraging further such initiatives."
    },
    {
      id: 'green',
      title: "Energy Conservation Workshops",
      imgSrc: "./images/ECC/cons1.jpg",
      altText: "Green Building Initiatives",
      description: "Organized annually for CHARUSAT Stakeholders aiming to increase understanding of energy conservation and energy-saving techniques.",
      content: "The Energy Conservation Cell conducts annual workshops for all CHARUSAT stakeholders including students, faculty, and staff. These workshops aim to increase awareness and understanding of energy conservation principles and practical energy-saving techniques that can be implemented in daily life. The sessions include hands-on activities, demonstrations of energy-efficient technologies, and discussions on sustainable practices. Participants are equipped with knowledge and tools to contribute to energy conservation efforts both on campus and in their personal lives."
    },
    {
      id: 'projects',
      title: "Solar Workshop for Students",
      imgSrc: "./images/ECC/solarproject.jpg",
      altText: "Student Projects",
      description: "Conducted to create awareness among students about solar panel-based projects focusing on the development and use of solar technologies.",
      content: "The Energy Conservation Cell regularly conducts workshops focused on solar technologies for students. These workshops create awareness about solar panel-based projects and provide hands-on experience in designing and implementing solar systems. Students learn about photovoltaic principles, system sizing, installation techniques, and maintenance procedures. The practical aspects of these workshops have led to several innovative student projects that harness solar energy for various applications, ranging from small gadget chargers to larger grid-connected systems."
    },
    {
      id: 'outreach',
      title: "LED Lighting Initiatives",
      imgSrc: "./images/ECC/cons1.jpg",
      altText: "Community Outreach",
      description: "LED Lighting Initiatives for replacement of conventional lighting with LED technology in classrooms.",
      content: "As part of continuous energy efficiency improvements, the Energy Conservation Cell has implemented LED lighting initiatives across the CHARUSAT campus. This project involved replacing conventional lighting systems with energy-efficient LED technology in classrooms, laboratories, offices, and common areas. The transition to LED lighting has significantly reduced electricity consumption, lowered maintenance costs due to the longer lifespan of LEDs, and improved lighting quality. This initiative serves as a practical demonstration of energy conservation principles and has created a more comfortable learning environment for students."
    }
  ];  const openModal = (activity) => {
    setSelectedActivity(activity);
  };
  return (
    <div className=""
    style={{background:'var(--bg-light)'}}>
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white py-12 lg:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-sm">Energy Conservation Cell</h1>
          <p className="text-xl lg:text-2xl max-w-xl mx-auto opacity-90">
            CHARUSAT - Empowering Sustainability Through Innovation
          </p>
        </div>
      </header>      
      {/* Objectives Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-[#0056b3]">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1">
              <svg className="w-14 h-14 lg:w-16 lg:h-16 text-[#f8961e] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0056b3]">Promote Energy Conservation</h3>
              <p className="text-gray-700">
                Spread awareness about energy-saving measures and their importance.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1">
              <svg className="w-14 h-14 lg:w-16 lg:h-16 text-[#f8961e] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0056b3]">Workshops & Seminars</h3>
              <p className="text-gray-700">
                Engage students and staff in interactive energy-saving activities and discussions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1">
              <svg className="w-14 h-14 lg:w-16 lg:h-16 text-[#f8961e] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0056b3]">Non-Conventional Energy</h3>
              <p className="text-gray-700">
                Maximize energy generation using renewable sources and promote sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>      {/* Team Members Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-[#0056b3]">Meet Our Team</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 text-center transition-all duration-300 hover:scale-[1.02] max-w-7xl w-full">
              <img
                src="./CSPIT_Faculty/Electrical/NILAYKUMAR.webp"
                alt="Dr. Nilay Patel"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-5"
              />
              <h3 className="text-xl lg:text-2xl font-semibold text-[#0056b3] mb-2">Dr. Nilay Patel</h3>
              <p className="text-lg text-gray-700 mb-2">Head of Electrical Engineering</p>
              <p className="text-lg text-gray-700"><span className="font-semibold">Role:</span> Workshops, Feasibility Studies</p>
            </div>
          </div>
        </div>
      </section>      
      {/* Activities Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-[#0056b3]">Our Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="h-full">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="p-3">
                    <img
                      src={activity.imgSrc}
                      className="w-full h-48 object-cover rounded-lg"
                      alt={activity.altText}
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-2xl text-center font-bold mb-3 text-[#0056b3]">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {activity.description}
                    </p>
                    {/* <button
                      className="mt-auto bg-[#0056b3] hover:bg-[#2081e9] text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                      onClick={() => openModal(activity)}
                    >
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
      {/* Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-auto" onClick={() => setSelectedActivity(null)}>
          <div 
            className="bg-white rounded-xl shadow-xl max-w-3xl w-full mx-auto"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="p-5 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[#0056b3]">
                  {selectedActivity.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setSelectedActivity(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-col md:flex-row gap-5">
                <img 
                  src={selectedActivity.imgSrc} 
                  alt={selectedActivity.altText}
                  className="w-full md:w-1/2 h-60 object-cover rounded-lg"
                />
                <div className="w-full md:w-1/2">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedActivity.content}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                className="bg-[#0056b3] hover:bg-[#2081e9] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                onClick={() => setSelectedActivity(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECC;