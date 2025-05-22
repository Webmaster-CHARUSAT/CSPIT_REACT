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
    <>
      {/* Minimal custom CSS for specific hover effects */}
      <style jsx>{`
        .club-item {
          transition: transform 0.4s ease, border 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .club-item:hover {
          transform: scale(1.2);
          border: #e4ba14 7px solid !important;
        }

        .club-item:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1;
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .club-item img {
          transition: transform 0.3s ease;
        }

        .club-item:hover img {
          transform: scale(1.2);
        }

        .hover-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 15px;
          font-family: "Poppins", sans-serif;
          color: #fff;
          padding: 10px 20px;
          white-space: normal;
          text-align: center;
          max-width: 90%;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          z-index: 2;
          text-transform: uppercase;
          font-weight: bold;
          pointer-events: none;
        }

        .club-item:hover .hover-text {
          opacity: 1;
          transform: translate(-50%, -45%);
        }
      `}</style>

      <section 
        className="w-full py-8 px-0 club-section"
        style={{ background: 'var(--bg-blue' }}>
        <h2 
          className="text-white text-center font-bold mb-8"
          style={{ 
            fontSize: "2.5rem", 
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          STUDENT CLUBS
        </h2>
        
        <div className="max-w-[1280px] mx-auto px-[7%] md:px-[5%]">
         <div
          className="flex flex-wrap justify-center gap-x-10 gap-y-8"
          style={{
            maxWidth: "1200px", // Controls how many items per row
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
            {clubs.map((club, idx) => (
              <div
                key={club["Club ID"] || idx}
                className="
                  club-item
                  bg-white
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  aspect-square
                  w-[80px] h-[80px]
                  sm:w-[120px] sm:h-[120px]
                  md:w-[140px] md:h-[140px]
                  lg:w-[180px] lg:h-[180px]
                  cursor-pointer
                  border-2 border-white
                  
                "
              >
                <Link
                  to={`/club/${club["Club ID"]}`}
                  title={club["Club Name"]}
                  className="block w-full h-full p-2"
                >
                  <img
                    src={club["Logo"]}
                    alt={club["Club Name"]}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </Link>
                
                <div className="hover-text">
                  {club["Club Name"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentClubsSection;