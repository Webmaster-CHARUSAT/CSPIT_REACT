// import React from "react";

// const societies = [
//   { src: "images/Student_Chapters/IEEE_Student.webp", alt: "IEEE Student" },
//   { src: "images/Student_Chapters/IEEE_Antenna.webp", alt: "IEEE Antenna" },
//   { src: "images/Student_Chapters/THM.webp", alt: "THM" },
//   { src: "images/Student_Chapters/ICI.webp", alt: "ICI" },
//   { src: "images/Student_Chapters/IAStructE.webp", alt: "IAStructE" },
//   { src: "images/Student_Chapters/SAECLUB.webp", alt: "SAECLUB" },
//   { src: "images/Student_Chapters/BBN.webp", alt: "BBN" },
//   { src: "images/Student_Chapters/csi.webp", alt: "CSI" },
//   { src: "images/Student_Chapters/acm.webp", alt: "ACM" },
// ];

// const ProfessionalSocietiesSection = () => {
//   return (
//     <section className="w-full bg-[#0c5fc6] py-8 px-0">
//       <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
//         STUDENT CHAPTERS / BRANCHES
//       </h2>
//       <div className="max-w-[1280px] mx-auto px-[7%] md:px-[5%]">
//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-5
//             gap-x-10 gap-y-8
//             justify-items-center
//           "
//         >
//           {societies.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 bg-white
//                 rounded-xl
//                 flex
//                 items-center
//                 justify-center
//                 w-[140px]
//                 h-[140px]
//                 shadow
//                 transition
//                 aspect-square
//                 "
//               style={{
//                 minWidth: "120px",
//                 maxWidth: "160px",
//               }}
//             >
//               <img
//                 src={item.src}
//                 alt={item.alt}
//                 loading="lazy"
//                 className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProfessionalSocietiesSection;
import React from "react";

const societies = [
  { src: "images/Student_Chapters/IEEE_Student.webp", alt: "IEEE Student" },
  { src: "images/Student_Chapters/IEEE_Antenna.webp", alt: "IEEE Antenna" },
  { src: "images/Student_Chapters/THM.webp", alt: "THM" },
  { src: "images/Student_Chapters/ICI.webp", alt: "ICI" },
  { src: "images/Student_Chapters/IAStructE.webp", alt: "IAStructE" },
  { src: "images/Student_Chapters/SAECLUB.webp", alt: "SAECLUB" },
  { src: "images/Student_Chapters/BBN.webp", alt: "BBN" },
  { src: "images/Student_Chapters/csi.webp", alt: "CSI" },
  { src: "images/Student_Chapters/acm.webp", alt: "ACM" },
];

const CARD_SIZE = "w-[140px] h-[140px] min-w-[120px] max-w-[160px]";

const ProfessionalSocietiesSection = () => (
  <section className="w-full py-8 px-0"
  style={{ background: 'var(--bg-blue' }}>
    <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
      STUDENT CHAPTERS / BRANCHES
    </h2>
    <div className="max-w-[1280px] mx-auto px-[7%] md:px-[5%]">
      <div
        className="
          flex flex-wrap justify-center gap-x-10 gap-y-8
          "
        style={{
          // limit width so only 5 cards per row on desktop
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {societies.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-xl flex items-center justify-center shadow transition aspect-square ${CARD_SIZE}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessionalSocietiesSection;
