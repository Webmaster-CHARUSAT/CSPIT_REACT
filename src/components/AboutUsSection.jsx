import React from "react";

// About Us Section Component
const AboutUsSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section
        className="relative bg-cover bg-center bg-fixed overflow-x-hidden mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('images/Slider/background.webp')",
        }}
        id="about-us"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-yellow-300 mb-4 drop-shadow-lg shadow-black">
              ABOUT US
            </h2>
            <hr className="border-2 border-yellow-400 mb-6" />

            <p className="text-white mb-10 text-lg">
              <span className="font-bold text-xl">
                Chandubhai S Patel Institute of Technology
              </span>
              , is the first institute established in year 2000 at Education
              Campus, Changa (now CHARUSAT). The institute is managed through a
              think tank of academician, scientists, engineers and professionals
              from all parts of the world.
            </p>

            {/* Vision and Mission Cards */}
            <div className="flex flex-wrap gap-8 justify-center text-center mt-10">
              <div className="flex-1 min-w-[45%] bg-transparent p-1 rounded-lg text-white shadow-lg min-h-[200px] flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-yellow-400 text-2xl font-semibold mb-3">
                  VISION
                </h2>
                <p className="text-white leading-7 flex-grow">
                  To become a leading institute for creation and dissemination
                  of knowledge in the frontiers of technology.
                </p>
              </div>

              <div className="flex-1 min-w-[45%] bg-transparent p-1 rounded-lg text-white shadow-lg min-h-[200px] flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-yellow-400 text-2xl font-semibold mb-3">
                  MISSION
                </h2>
                <p className="text-white leading-7 flex-grow">
                  To prepare world-class technocrats and researchers and
                  facilitate enhanced deployment of technology for the
                  betterment of lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
     <section className="py-8" style={{ backgroundColor: "var(--bg-light" }}>
  <div className="container mx-auto px-0 max-w-6xl"> {/* Added max-width and padding */}
    <h1 className="text-center text-5xl font-bold my-8">CSPIT JOURNEY</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Increased gap */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
        <div key={step} className="flex justify-center">
          <div className="w-full "> {/* Card container with max-width */}
            <img
              src={`/images/journey/${step}.png`}
              alt={`Step ${step}`}
              className="w-full h-[300px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white p-3
                        md:h-[300px] sm:h-[200px]"
              loading="lazy"
            />
          </div>
        </div>  
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default AboutUsSection;
