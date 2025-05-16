import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Aishwariya Biju",
    designation: "Student",
    testimonial:
      "The faculties are always enthusiastic to help us in all means. Here apart from polishing us for the being the part of industry they also arrange many technical and non-technical events as for the overall development of students.",
    imageSrc: "https://www.charusat.ac.in/cspit/images/testimony/ec/testimonial-2.webp",
  },
  {
    id: 2,
    name: "Meet Shah",
    designation: "Student",
    testimonial:
      "CSPIT provides perfect platform for the students to scan, search and work over their ideas with the best support and guidance provided by the faculty members. Students are also acknowledged with all the upcoming technologies used and are also taught to use them which trains them for their challenging and bright future.",
    imageSrc: "https://www.charusat.ac.in/cspit/images/testimony/it/testimonial-2.webp",
  },
  {
    id: 3,
    name: "Nilesh Ranpura",
    designation: "Project Manager, eInfochips",
    testimonial:
      "We have been hiring students from your department as well as giving them Summer Internships in our organization. The quality of the students from Electronics and Communication Engineering of CHARUSAT University is outstanding and the ones we have employed from campus recruitment are truly an asset to our organization.",
    imageSrc: "https://www.charusat.ac.in/cspit/images/testimony/ec/testimonial-3.webp",
  },
  {
    id: 4,
    name: "Parthav Vyas",
    designation: "Director of Engineering, Scaledge Technology",
    testimonial:
      "We have observed that Charusat Changa's EC students receive exceptional motivation, guidance, and support from their dedicated faculty members, which is truly remarkable. As a student aspiring to build a successful career, it is crucial to choose an institute that values holistic development. In that regard, Charusat Changa stands out as an institute that prioritizes comprehensive growth.",
    imageSrc: "https://www.charusat.ac.in/cspit/images/testimony/ec/testimonial-7.webp",
  },
  {
    id: 5,
    name: "Ila Pokar",
    designation: "Parent",
    testimonial:
      "Charusat by providing various facilities to the students has proved that it is not only being study oriented university. The counselling batches assigned to the respective faculties has been an initiative that has helped the students at various points in their college life. Along with the platforms that it provides to enhance the co-curricular skills is pretty good.",
    imageSrc: "https://www.charusat.ac.in/cspit/images/testimony/it/testimonial-1.webp",
  },
  {
    id: 6,
    name: "Melita Castelino",
    designation: "Student",
    testimonial:
      "I am privileged to be a part of the Computer Science and Engineering department at CSPIT. The teaching methodology, well-equipped laboratories, and faculty support have significantly advanced my career. From hands-on workshops to one-on-one counseling, the department offers it all. The faculty encourages students to engage in extracurricular activities and supports our startup ventures and research. I appreciate the department's initiative in organizing hackathons, allowing us to showcase our skills. Expert talks, industry visits, and peer learning sessions broaden our horizons and provide valuable insights into the real world. I am truly grateful for the opportunities provided here.",
    imageSrc: "./images/Melita.jpg",
  },
  {
    id: 7,
    name: "Shail Macwan",
    designation: "Student",
    testimonial:
      "I am truly thankful for the incredible learning environment and the many opportunities that have helped me grow. The department's focus on fields like AI, ML and Competitive programming, along with the workshops and technical events, has given me the chance to apply what I've learned in practical, real-world situations. These experiences have not only strengthened my skills but also allowed me to work closely with my peers and come up with creative solutions. The support and encouragement from the faculty have been instrumental in shaping both my academic journey and future career.",
    imageSrc: "./images/Shail.jpg",
  },
  {
    id: 8,
    name: "Jayti Shah",
    designation: "Student",
    testimonial:
      "The Computer Science and Engineering (CSE) department at our college provides an outstanding learning environment! Along with regular classes, the department organizes fun activities like the Tower of Hanoi challenge and treasure hunts, making learning both enjoyable and interesting. They also arrange industrial visits and hackathons, giving us valuable real-world exposure. These events not only sharpen our technical and problem-solving skills but also enhance our practical knowledge. The engaging activities and hands-on experience make studying here incredibly enriching.",
    imageSrc: "./images/Jayti.jpg",
  },
  {
    id: 9,
    name: "Amit Panchal",
    designation: "Parent",
    testimonial:
      "As a parent of Shruti Panchal (22CS044) in the Computer Science & Engineering department, I want to express my sincere gratitude for the excellent education and support provided by the department. The workshops and hackathons have been incredibly beneficial, allowing Shruti to develop practical skills in a hands-on environment. These experiences, combined with the well-rounded curriculum, have given her the confidence and knowledge to excel in the tech field. I truly appreciate the faculty's dedication to nurturing the students' growth and encouraging innovation.",
    imageSrc: "./images/AmitPanchal.jpg",
  },
  {
    id: 10,
    name: "Piyush Patel",
    designation: "Parent",
    testimonial:
      "I am highly impressed with the CSE Department. The expert sessions organized regularly offer students, including my daughter Pia, valuable exposure to industry insights and new technologies. I particularly appreciate the department's personalized counseling facility, where each student is guided by a dedicated faculty member throughout the year. This mentorship ensures consistent academic and personal support, fostering both professional and personal growth. Kudos to the department for their dedication to student success!",
    imageSrc: "./images/PiyushPatel.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsToShow = 3;
  
  // Create circular array for infinite scrolling
  const getCircularTestimonials = useCallback(() => {
    // Create a circular array by duplicating the first cardsToShow items at the end
    // and the last cardsToShow items at the beginning
    const beforeItems = testimonials.slice(-cardsToShow);
    const afterItems = testimonials.slice(0, cardsToShow);
    
    return [...beforeItems, ...testimonials, ...afterItems].map((item, index) => ({
      ...item,
      key: `${item.id}-${index}` // Ensure unique key for duplicated items
    }));
  }, []);
  
  const circularTestimonials = getCircularTestimonials();
  const totalItems = circularTestimonials.length;
  
  // Adjust initial index to start at the first "real" item (after the duplicated ones)
  const [displayIndex, setDisplayIndex] = useState(cardsToShow);
  
  // Handle smooth transition when reaching the end or beginning
  useEffect(() => {
    if (displayIndex < cardsToShow) {
      // If we're at the beginning of the duplicated items, jump to the real items without animation
      setTimeout(() => {
        setIsTransitioning(false);
        setDisplayIndex(totalItems - 2 * cardsToShow + displayIndex);
      }, 500);
    } else if (displayIndex >= totalItems - cardsToShow) {
      // If we're at the end of the duplicated items, jump to the beginning of the real items
      setTimeout(() => {
        setIsTransitioning(false);
        setDisplayIndex(cardsToShow + (displayIndex - (totalItems - cardsToShow)));
      }, 500);
    }
  }, [displayIndex, totalItems]);

  // Auto scroll functionality
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setDisplayIndex(prevIndex => prevIndex + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoScroll]);

  const handleMouseEnter = () => {
    setAutoScroll(false);
  };

  const handleMouseLeave = () => {
    setAutoScroll(true);
  };

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setDisplayIndex(prevIndex => prevIndex + 1);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setDisplayIndex(prevIndex => prevIndex - 1);
  };
  
  // Calculate which testimonials are currently visible
  const getVisibleIndices = () => {
    const realIndex = (displayIndex - cardsToShow + testimonials.length) % testimonials.length;
    return [
      realIndex,
      (realIndex + 1) % testimonials.length,
      (realIndex + 2) % testimonials.length
    ];
  };
  
  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-12" id="testimonials"
    style={{ background: 'var(--bg-blue' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-3xl font-bold mb-8">
          TESTIMONIALS
        </h2>
        
        <div className="flex items-center">
          <button 
            onClick={prevTestimonial} 
            className="slider-btn text-white text-2xl p-2 focus:outline-none hidden md:block"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <div 
            className="flex-grow overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex transition-transform duration-500 ${isTransitioning ? 'ease-in-out' : 'duration-0'}`}
              style={{ transform: `translateX(-${(displayIndex - cardsToShow) * (100 / cardsToShow)}%)` }}
            >
              {circularTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.key}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-blue-300"
                        loading="lazy"
                      />
                      <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.designation}</p>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 text-center italic">
                        "{testimonial.testimonial.length > 200 
                          ? testimonial.testimonial.substring(0, 200) + '...' 
                          : testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextTestimonial} 
            className="slider-btn text-white text-2xl p-2 focus:outline-none hidden md:block"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setDisplayIndex(idx + cardsToShow);
              }}
              className={`w-3 h-3 mx-1 rounded-full ${
                visibleIndices.includes(idx) ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
