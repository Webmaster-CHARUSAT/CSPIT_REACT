import React from 'react';

// About Us Section Component
const AboutUsSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed overflow-x-hidden mt-20" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('images/Slider/background.webp')" 
        }}
        id="about-us"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-yellow-300 mb-4 drop-shadow-lg shadow-black">
              ABOUT US
            </h2>
            <hr className="border-2 border-yellow-400 mb-6" />

            <p className="text-white mb-10">
              <span className="font-bold">Chandubhai S Patel Institute of Technology</span>, is the first institute established in year 2000 at Education
              Campus, Changa (now CHARUSAT). The institute is managed through a
              think tank of academician, scientists, engineers and professionals
              from all parts of the world.
            </p>

            {/* Vision and Mission Cards */}
            <div className="flex flex-wrap gap-8 justify-center mt-10">
              <div className="flex-1 min-w-[45%] bg-transparent p-5 rounded-lg text-white shadow-lg min-h-[200px] flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-yellow-400 text-2xl font-semibold mb-3">Vision</h2>
                <p className="text-white leading-7 flex-grow">
                  To become a leading institute for creation and dissemination of
                  knowledge in the frontiers of technology.
                </p>
              </div>
              
              <div className="flex-1 min-w-[45%] bg-transparent p-5 rounded-lg text-white shadow-lg min-h-[200px] flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-yellow-400 text-2xl font-semibold mb-3">Mission</h2>
                <p className="text-white leading-7 flex-grow">
                  To prepare world-class technocrats and researchers and facilitate
                  enhanced deployment of technology for the betterment of lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold my-8">CSPIT JOURNEY</h1>
          
          <div className="flex flex-wrap gap-5 justify-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <div 
                key={step} 
                className="flex-1 basis-[calc(33.333%-20px)] max-w-[calc(33.333%-20px)] flex justify-center items-center
                          lg:basis-[calc(33.333%-20px)] lg:max-w-[calc(33.333%-20px)]
                          md:basis-[calc(50%-20px)] md:max-w-[calc(50%-20px)]
                          sm:basis-full sm:max-w-full"
              >
                <img 
                  src={`/images/journey/${step}.png`} 
                  alt={`Step ${step}`}
                  className="w-full h-[300px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white p-2.5
                            md:h-[260px] sm:h-[220px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
