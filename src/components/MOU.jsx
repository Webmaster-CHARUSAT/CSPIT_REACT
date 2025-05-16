import React from "react";

const mouPartners = [
  { src: "images/MOU/1einfochips.png", alt: "eInfochips" },
  { src: "images/MOU/Cipriani Harrison Valves.png", alt: "Cipriani Harrison Valves" },
  { src: "images/MOU/Edunet-Foundation-logo.png", alt: "Edunet Foundation" },
  { src: "images/MOU/GESIA1.png", alt: "GESIA" },
  { src: "images/MOU/GIDM1.png", alt: "GIDM" },
  { src: "images/MOU/inflibnet.png", alt: "INFLIBNET" },
  { src: "images/MOU/infopercept.png", alt: "Infopercept" },
  { src: "images/MOU/Information Data Systems (IDS).png", alt: "Information Data Systems (IDS)" },
  { src: "images/MOU/Margen Impex.png", alt: "Margen Impex" },
  { src: "images/MOU/MG Motor.jpg", alt: "MG Motor" },
  { src: "images/MOU/MJIIT-UTM - Malaysia.png", alt: "MJIIT-UTM Malaysia" },
  { src: "images/MOU/RRU.png", alt: "RRU" },
  { src: "images/MOU/samatrix logo.jfif", alt: "Samatrix" },
  { src: "images/MOU/svnit.png", alt: "SVNIT" },
];

const MOUSection = () => {
  return (
    <section className="w-full bg-[#0c5fc6] py-8 px-0">
      <h2 className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-8">
        CSPIT MOU
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
          {mouPartners.map((partner, idx) => (
            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                flex
                items-center
                justify-center
                shadow
                hover:shadow-lg
                transition
                hover:scale-105
                aspect-square
                w-[80px] h-[80px]
                sm:w-[120px] sm:h-[120px]
                md:w-[140px] md:h-[140px]
                lg:w-[160px] lg:h-[160px]
                "
            >
              <img
                src={partner.src}
                alt={partner.alt}
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

export default MOUSection;