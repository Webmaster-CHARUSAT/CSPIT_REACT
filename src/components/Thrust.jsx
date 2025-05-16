import React from "react";

// Research thrust areas data
const thrustAreas = [
  {
    image: "images/thrust1.jpeg",
    title: "AI, ML and Data Science",
    row: 1
  },
  {
    image: "images/thrust2.jpeg",
    title: "VLSI & Embedded Systems",
    row: 1
  },
  {
    image: "images/thrust3.jpeg",
    title: "Cyber Security / Blockchain Technologies",
    row: 1
  },
  {
    image: "images/thrust4.jpeg",
    title: "Composite Materials",
    row: 1
  },
  {
    image: "images/thrust5.jpeg",
    title: "Thermal Engineering",
    row: 1
  },
  {
    image: "images/thrust6.jpeg",
    title: "Structural and Environmental Engineering",
    row: 2
  },
  {
    image: "images/thrust7.jpg",
    title: "RF & Microwave Engineering",
    row: 2
  },
  {
    image: "images/thrust20.jpeg",
    title: "High Performance Computing",
    row: 2
  },
  {
    image: "images/electric_vehicle.webp",
    title: "Electric Vehicle",
    row: 2
  },
];

const ResearchThrustAreas = () => {
  // Separate items by row
  const firstRowItems = thrustAreas.filter(item => item.row === 1);
  const secondRowItems = thrustAreas.filter(item => item.row === 2);

  return (
    <section id="thrust-areas" className="container mx-auto px-4 py-10"
    style={{ background: 'var(--bg-light' }}>
      <h2 className="text-center text-3xl font-bold mb-10">
        RESEARCH THRUST AREAS
      </h2>

      {/* First Row: 5 Circles */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 mb-8">
        {firstRowItems.map((area, index) => (
          <div key={index} className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%] flex flex-col items-center">
            <div className="group relative w-[200px] h-[200px] rounded-full overflow-hidden border-transparent hover:border-[10px] hover:border-[#0056b3] transition-all duration-400">
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-full group-hover:scale-[1.4] transition-transform duration-400"
              />
            </div>
            <div className="mt-3 text-center">
              <h5 className="font-bold text-sm md:text-base">{area.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: 4 Circles (Centered) */}
      <div className="flex flex-wrap justify-center gap-x-0 gap-y-8">
        {secondRowItems.map((area, index) => (
          <div key={index} className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex flex-col items-center">
            <div className="group relative w-[200px] h-[200px] rounded-full overflow-hidden border-transparent hover:border-[10px] hover:border-[#0056b3] transition-all duration-400">
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-full group-hover:scale-[1.4] transition-transform duration-400"
              />
            </div>
            <div className="mt-3 text-center">
              <h5 className="font-bold text-sm md:text-base">{area.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchThrustAreas;