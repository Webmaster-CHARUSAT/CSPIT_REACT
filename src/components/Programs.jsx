import React from "react";

// Data setup
const undergraduate = [
  {
    title: "Computer Science & Engineering",
    img: "images/programs/programs-20.webp",
    link: "https://charusat.ac.in/cspit/cse/",
  },
  {
    title: "Electronics & Communication Engineering",
    img: "images/ec.avif",
    link: "https://charusat.ac.in/cspit/ec/",
  },
  {
    title: "Information Technology",
    img: "images/programs/programs-7.webp",
    link: "https://charusat.ac.in/cspit/it/",
  },
  {
    title: "Civil Engineering",
    img: "images/programs/programs-2.webp",
    link: "https://cspitcivil.com/",
  },
  {
    title: "Computer Engineering",
    img: "images/programs/programs-8.webp",
    link: "https://charusat.ac.in/cspit/ce/",
  },
  {
    title: "Mechanical Engineering",
    img: "images/programs/programs-3.webp",
    link: "https://charusat.ac.in/cspit/me/",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    img: "images/programs/aiml.webp",
    link: "https://charusat.edu.in/cspit/aiml/",
  },
  {
    title: "Electrical Engineering",
    img: "images/programs/electrical.webp",
    link: "https://charusat.ac.in/cspit/ee/",
  },
];

const postgraduate = [
  {
    title: "Advanced Manufacturing Technology",
    img: "images/programs/programs-9.webp",
    link: "https://charusat.ac.in/cspit/me/",
  },
  {
    title: "Computer Engineering",
    img: "images/programs/programs-8.webp",
    link: "https://charusat.ac.in/cspit/ce/",
  },
  {
    title: "Structural Engineering",
    img: "images/programs/programs-2.webp",
    link: "https://cspitcivil.com/",
  },
  {
    title: "Thermal Engineering",
    img: "images/programs/programs-11.webp",
    link: "https://charusat.ac.in/cspit/me/",
  },
  {
    title: "PGDEAMT",
    img: "images/programs/programs-10.webp",
    link: "https://www.charusat.ac.in/course-single#PGDEAMT",
  },
];

// Card component
const ProgramCard = ({ title, img, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="bg-white rounded-[15px] shadow hover:shadow-lg transition h-full flex flex-col overflow-hidden">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-[170px] object-cover rounded-t-[15px] card-img-top"
      />
      <div className="flex-1 flex items-center justify-center px-2 py-3">
        <h4
          className="
            card-title 
            text-center 
            font-bold 
            text-base 
            sm:text-lg 
            transition-colors 
            duration-300 
            group-hover:text-[#2978ff] 
            group-hover:font-bold
          "
          style={{
            transition: "color 0.3s, font-weight 0.5s",
          }}
        >
          {title}
        </h4>
      </div>
    </div>
  </a>
);

const Programs = () => (
  <section
    id="programs"
    className=" pt-6 pb-12"
    style={{  background:'#e1e1e1' }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <h2
  className="text-center mb-4 tracking-wide"
  style={{ fontSize: "2.5rem", fontWeight:"bold",
    fontFamily:"Roboto, sans-serif",
   }}
>
  PROGRAMS OFFERED
</h2>

      {/* UG Programs */}
      <div id="under-graduate-programs">
        <h3
          className="mb-2 font-medium"
          style={{
            fontFamily: "Playfair, serif",
            fontSize: "xx-large",
          }}
        >
          Under Graduate Programs (B. Tech)
        </h3>
        <hr className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {undergraduate.map((prog) => (
            <ProgramCard key={prog.title} {...prog} />
          ))}
        </div>
      </div>

      {/* PG Programs */}
      <div className="mt-16" id="post-graduate-programs">
        <h3
          className="mb-2 font-medium"
          style={{
            fontFamily: "Playfair, serif",
            fontSize: "xx-large",
          }}
        >
          Post Graduate Programs (M. Tech)
        </h3>
        <hr className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {postgraduate.map((prog) => (
            <ProgramCard key={prog.title} {...prog} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Programs;