import React from "react";

const industryCourses = [
  { src: "images/industry courses/aws.webp", alt: "Amazon Web Services Academy" },
  { src: "images/industry courses/cisco.webp", alt: "CISCO Networking Academy" },
  { src: "images/industry courses/code_unnati.webp", alt: "Code Unnati" },
  { src: "images/industry courses/comptia_partner.webp", alt: "CompTIA Partner" },
  { src: "images/industry courses/ec-council.webp", alt: "EC-Council Academia Partner" },
  { src: "images/industry courses/microsoft.webp", alt: "Microsoft IT Academy" },
  { src: "images/industry courses/nptel.webp", alt: "NPTEL" },
  { src: "images/industry courses/oracle.webp", alt: "Oracle" },
  { src: "images/industry courses/redhat.webp", alt: "RedHat Training Partner" },
  { src: "images/industry courses/tata_strive.webp", alt: "Tata Strive" },
  // Uncomment to test different numbers of items
  // { src: "images/industry courses/aws.webp", alt: "Extra Item 1" },
  // { src: "images/industry courses/aws.webp", alt: "Extra Item 2" },
];

const IndustryCoursesSection = () => {
  return (
    <section className="w-full py-8 px-0"
    style={{ background: 'var(--bg-blue' }}>
      <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
        INDUSTRY RECOGNIZED COURSES
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
          {industryCourses.map((item, idx) => (
            <div
              key={idx}
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
                "
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
};

export default IndustryCoursesSection;

// import React from "react";

// const industryCourses = [
//   { src: "images/industry courses/aws.webp", alt: "Amazon Web Services Academy" },
//   { src: "images/industry courses/cisco.webp", alt: "CISCO Networking Academy" },
//   { src: "images/industry courses/code_unnati.webp", alt: "Code Unnati" },
//   { src: "images/industry courses/comptia_partner.webp", alt: "CompTIA Partner" },
//   { src: "images/industry courses/ec-council.webp", alt: "EC-Council Academia Partner" },
//   { src: "images/industry courses/microsoft.webp", alt: "Microsoft IT Academy" },
//   { src: "images/industry courses/nptel.webp", alt: "NPTEL" },
//   { src: "images/industry courses/oracle.webp", alt: "Oracle" },
//   { src: "images/industry courses/redhat.webp", alt: "RedHat Training Partner" },
//   { src: "images/industry courses/tata_strive.webp", alt: "Tata Strive" },
//   // Uncomment to test different numbers of items
//   // { src: "images/industry courses/aws.webp", alt: "Extra Item 1" },
//   // { src: "images/industry courses/aws.webp", alt: "Extra Item 2" },
// ];

// const IndustryCoursesSection = () => {
//   return (
//     <section className="section-container" style={{ backgroundColor: "#0c5fc6" }}>
//       <div className="container">
//         <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
//           INDUSTRY RECOGNIZED COURSES
//         </h2>
//         <div
//           className="
//             grid
//             grid-cols-2
//             sm:grid-cols-3
//             md:grid-cols-4
//             lg:grid-cols-5
//             gap-6
//             content-container-wide
//           "
//         >
//           {industryCourses.map((item, idx) => (
//             <div
//               key={idx}
//               className="
//                 bg-white
//                 rounded-xl
//                 flex
//                 items-center
//                 justify-center
//                 shadow
//                 transition
//                 hover:shadow-xl
//                 hover:scale-105
//                 aspect-square
//                 w-full
//                 p-4
//               "
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

// export default IndustryCoursesSection;