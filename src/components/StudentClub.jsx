import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export function StudentClubsSection() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("/data/clubs.json")
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((err) => console.error("Error loading clubs.json:", err));
  }, []);

  return (
    <section className="w-full bg-[#0c5fc6] py-8 px-0">
      <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
        STUDENT CLUBS
      </h2>
      <div className="max-w-[1280px] mx-auto px-[7%] md:px-[5%]">
        <div
          className="flex flex-wrap justify-center gap-x-10 gap-y-8"
          style={{
            maxWidth: "1000px", // Controls how many items per row
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {clubs.map((club, idx) => (
            <div
              key={club["Club ID"] || idx}
              className="
                bg-white
                rounded-xl
                flex
                items-center
                justify-center
                shadow
                transition
                aspect-square
                w-[80px] h-[80px]
                sm:w-[120px] sm:h-[120px]
                md:w-[140px] md:h-[140px]
                lg:w-[160px] lg:h-[160px]
                relative
                group
                cursor-pointer
                border-2 border-white
              "
            >
              <Link
                to={`/club/${club["Club ID"]}`} // Use React Router path
                title={club["Club Name"]}
                className="block w-full h-full p-2"
              >
                <img
                  src={club["Logo"]}
                  alt={club["Club Name"]}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
              {/* Overlay on hover */}
              <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-80 z-10 rounded-xl" />
              <Link
                to={`/club/${club["Club ID"]}`} // Use React Router path
                className="hover-text absolute top-1/2 left-1/2 opacity-0 group-hover:opacity-100 z-20 font-bold text-white text-[15px] py-2 px-5 rounded transition-all duration-300 pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                  whiteSpace: "normal",
                  textAlign: "center",
                  maxWidth: "90%",
                  textTransform: "uppercase",
                }}
              >
                {club["Club Name"]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentClubsSection;