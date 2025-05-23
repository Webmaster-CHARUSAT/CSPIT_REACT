import React, { useState } from "react";

// Project data
const projectsData = [
  {
    id: "project1",
    title: "AttendX: AI, Wi-Fi, and Bluetooth-Based Attendance System",
    shortTitle: "AttendX: AI-Based Attendance System",
    thumbnail: "images/Projects/Attendex-3.webp",
    images: [
      "images/Projects/Attendex-3.webp",
      "images/Projects/Attendex-1.webp",
      "images/Projects/Attendex-2.webp",
    ],
    description:
      "AttendX is a cutting-edge attendance management system designed to replace outdated manual methods with efficient, automated tracking. Traditional attendance systems are time-consuming, error-prone, and inefficient, particularly in the fast-paced digital era. AttendX utilizes advanced technologies such as AI-driven facial recognition, Wi-Fi, and Bluetooth to improve accuracy and speed.Key features include lightning-fast facial recognition, processing times under 150 milliseconds, and model training within 5 milliseconds, ensuring 99.99% accuracy. The system can handle over 1,000 participants within 10 seconds, making it ideal for large institutions. AttendX also supports geolocation verification and Bluetooth beacon integration, offering additional layers of security and precision in attendance recording.The system allows faculty to initiate attendance sessions, with students verifying their presence through OTPs, QR codes, or real-time facial recognition. Faculty are notified instantly of absentees, and receive detailed analytics and reports for each session. AttendX ensures a user-friendly interface and multi-factor authentication, providing a secure, streamlined experience for all users.By significantly reducing the time spent on attendance management, AttendX enables institutions to make data-driven decisions, enhance communication, and operate more efficiently. The system is designed to foster smarter, more effective workflows in modern educational settings.",
    contacts: [
      "Rahul Mistry [22CS042]",
      "Ronit Kothari [22CS031]",
      "Abhishek Parmar [22CS046]",
    ],
  },
  {
    id: "project2",
    title: "GAGANMITRA Drones - A Swarm of Drones for Advanced Surveillance",
    shortTitle: "Gaganmitra Drone",
    thumbnail: "images/Projects/Ganagnmitra_Drone_1.webp",
    images: [
      "images/Projects/Ganagnmitra_Drone_1.webp",
      "images/Projects/Gaganmitra_Drone_2.webp",
    ],
    description:
      "Unmanned Aerial Systems (UAS), including drones, have improved greatly over the past decade. Drones have proven their value in war zones, delivering medical supplies, and even in areas like transportation, surveillance, surveying, and mapping. Despite these advancements, creating a fully autonomous drone swarm with real-time sensing and decision-making abilities is still a challenge.Our project, GAGANMITRA Drones, focuses on building a swarm of three drones that are efficient, reliable, and well-coordinated. We use a star topology for communication between the Raspberry Pi computers on each drone. A central drone manages the system, ensuring all drones know each other's positions and actions, such as moving or hovering. The system includes algorithms for real-time sensing. For example, if one drone crosses a boundary, others adjust to bring it back into the safe zone.To avoid a single point of failure (SPOF), any drone can take over as the leader if the central one fails. The drones can also communicate within a 2 km range using advanced telemetry. They are powered by Pixhawk flight controllers, which manage navigation and motor control. We tested these drones in the ROS1 Noetic-Gazebo environment, successfully running formations and verifying algorithms.",
    contacts: [
      "Shashwat Mahindroo [21EC019]",
      "Sakshi Shah [21CS064]",
      "Dharmil Patel [22ME013]",
    ],
  },
  {
    id: "project3",
    title: "Hexapod Robot",
    shortTitle: "Hexapod",
    thumbnail: "images/Projects/Hexapod_1.webp",
    images: [
      "images/Projects/Hexapod_1.webp",
      "images/Projects/Hexapod_2.webp",
    ],
    description:
      "Vita, our hexapod robot, was developed by Krishang Nigam, Harshil Jayswal, and Masum Pancholi (students of CSPIT's Electronics and Communication Engineering Department), along with Jaimin Mehta and Zuli Dobariya. This robot was part of a competition where we were selected in the first round, and for the second round of proof of concept, we received ₹50,000 from ROBOFEST 4.0, organized by the Government of Gujarat, to help realize this project. The robot features six legs with 18 degrees of freedom, controlled by an Arduino Mega 2560 microcontroller and an 18-channel servo driver module. Powered by a 7.4V Li-Po battery (5200mAh), it incorporates ultrasonic and gyroscopic sensors alongside a camera module for precise obstacle detection, balance maintenance, and environmental awareness. The use of 3D-printed brackets ensures a lightweight yet robust structure, enhancing its adaptability for diverse terrains.",
    contacts: [
      "Krishang Nigam [23ec063]",
      "Harshil Iayswal [23ec041]",
      "Masum Pancholi [23ec066]",
      "Zuli Dobariya [22AIML009]",
      "Jaimin Mehta [21ME017]",
    ],
  },
  {
    id: "project4",
    title: "Multi-Purpose Power Attachment",
    shortTitle: "Multi-Purpose Power Attachment",
    thumbnail: "images/Projects/power_attachment-1.webp",
    images: [
      "images/Projects/power_attachment-1.webp",
      "images/Projects/power_attachment-2.webp",
    ],
    description:
      "The development of multi-purpose power attachments for wheelchairs represents a significant advancement in assistive technology, addressing the mobility challenges faced by individuals with physical disabilities. Traditional wheelchairs, while essential, often lack powered assistance, leading to dependence on caregivers and limiting user autonomy. This literature review explores the current landscape of electric power attachments, their design considerations, and the impact of such innovations on user independence and quality of life. Recent advancements in wheelchair technology have introduced models equipped with sophisticated features, including joystick controls, modern designs, and application integration. However, these high-tech wheelchairs often come with prohibitive costs and require considerable space, making them inaccessible to many users. While NGOs and government subsidies provide basic wheelchairs, these models typically lack powered assistance, further emphasizing the need for affordable and flexible solutions. The introduction of electric power attachments, such as battery-powered motor wheels combined with hand-controlled systems, aims to bridge the gap between traditional wheelchairs and advanced mobility solutions. These attachments offer several advantages:1. Affordability 2. Flexibility 3. Independence 4. Usability 5. Safety 6. Integration with Existing Wheelchairs",
    contacts: [
      "Dutt Barot [21ME002]",
      "Bhavendra Kumar Pathak [21ME037]",
      "Abishek Prasad Gauro [21ME010]",
    ],
  },
  {
    id: "project5",
    title: "RickMate: Share Rides, Save More!",
    shortTitle: "RickMate: Share Rides, Save More!",
    thumbnail: "images/Projects/rickmate-1.webp",
    images: [
      "images/Projects/rickmate-1.webp",
      "images/Projects/rickmate-2.webp",
      "images/Projects/rickmate-3.webp",
    ],
    description:
      "RickMate is transforming the way people travel by introducing a smart, shared ride solution that's cost-effective, convenient, and eco-friendly. Whether you're a student, professional, or traveler, RickMate connects you with others heading in the same direction, allowing you to share the ride and split the cost.How It Works - Match Passengers: RickMate matches passengers based on their destination, travel time, and preferences.Affordable Rides: By sharing a ride, everyone pays less, making transportation more budget-friendly.Connect with Others: Passengers can chat with fellow riders and the driver to coordinate pickup and drop-off locations for a smooth journey.",
    contacts: [
      "Renish Mukeshbhai Suriya [D23CS096]",
      "Kunj Dipakbhai Patel [D23CS097]",
    ],
  },
  {
    id: "project6",
    title: "Semi-Autonomous Security Surveillance Robot",
    shortTitle: "Security Surveillance Robot",
    thumbnail: "images/Projects/Security_1.webp",
    images: [
      "images/Projects/Security_1.webp",
      "images/Projects/Security_2.webp",
    ],
    description:
      "Technology-based solution that monitors activities, behavior, or other changing information for the purpose of influencing, managing, directing, or protecting people, assets, or environments. In the current scenario security is the major concern for any premises or campus. Traditionally we have the Security Gard and CCTV cameras for monitoring the campus or premises. To eliminate the human effort and to provide a better and more efficient solution to this problem we have designed a Semiautonomous System that has multiple capabilities. A 4x4 rover typically refers to a four wheeled robotic vehicle that is designed to traverse rough terrain and navigate difficult environments. 4x4 rovers are used in a wide range of applications, from exploration and research to military and industrial settings. They are often used in situations where it is difficult or dangerous for humans to venture, such as in space or in extreme environments on Earth.",
    contacts: ["Arjun Kapoor", "Sneha Iyer"],
  },
  {
    id: "project7",
    title: "Warehouse Mobility and Material Handling Trolley system",
    shortTitle: "Warehouse Mobility System",
    thumbnail: "images/Projects/Warehouse_2.webp",
    images: [
      "images/Projects/Warehouse_2.webp",
      "images/Projects/Warehouse_1.webp",
      "images/Projects/Warehouse_3.webp",
      "images/Projects/Warehouse_4.webp",
    ],
    description:
      "A warehouse material handling tugger system is an automated solution designed to transport materials and products within a warehouse environment. The tuggers are guided by a central control system that directs their movements and manages their interactions with other equipment and personnel. The use of a tugger system can improve efficiency, reduce labour costs, and enhance safety in warehouse operations. Tugger and trolley systems utilize a combination of sensors, algorithms, and software to ensure that they move smoothly and safely through the warehouse environment. These systems are capable of navigating around obstacles and avoiding collisions with other equipment and personnel, which makes them a safer alternative to traditional manual material handling methods. Tugger and trolley systems are also highly flexible and customizable, which makes them suitable for a wide range of warehouse environments and applications. These systems can be configured to handle different types of products and materials, and they can be integrated with other warehouse automation systems, such as conveyor belts and robotic picking systems in the future.",
    contacts: ["Nikhil Gupta", "Rhea Sharma"],
  },
  {
    id: "project8",
    title: "AI Enabled Smart Bin",
    shortTitle: "AI Enabled Smart Bin",
    thumbnail: "images/Projects/smart_bin-2.webp",
    images: [
      "images/Projects/smart_bin-2.webp",
      "images/Projects/Smart_bin-1.webp",
    ],
    description:
      "The AI-Enabled Smart Bin is an innovative solution designed to revolutionize waste management by utilizing artificial intelligence (AI) and audio classification technologies. This smart bin employs AI to analyze the sounds generated by discarded items, enabling accurate identification and sorting of various waste types. By improving recycling efficiency and reducing contamination, the system promotes sustainable waste management practices. The smart bin functions by leveraging machine learning to classify waste based on the sound of its collision, sorting it into separate internal compartments. Development begins with clearly defining the problem and collecting audio samples from different types of waste. These audio samples are pre-processed to clean and segment the data for better analysis. Machine learning models, such as Convolutional Neural Networks (CNNs) or Recurrent Neural Networks (RNNs), are trained on the extracted audio features to achieve accurate classification. Once trained, the system's performance is rigorously evaluated. The project integrates key hardware components—microphones, a processing unit, and a sorting mechanism—with real-time software for waste classification and sorting. After deployment, the system's performance is monitored and refined to enhance efficiency. This project demonstrates the effective use of technologies like audio processing, machine learning, embedded systems, and software development to support sustainable recycling and waste management.",
    contacts: [
      "Deep Kakadiya",
      "Dhwani navadia",
      "Dhairya Isotiya ",
      "Yug Thummar",
    ],
  },
];

const StudentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectPopup = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectPopup = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };
  const ProjectCard = ({ project }) => (
    <div
      className="project-item rounded-xl overflow-hidden shadow-md bg-white flex flex-col cursor-pointer border-2 p-1 border-white w-full max-w-[280px]"
      onClick={() => openProjectPopup(project)}
    >
      <div className="relative h-[300px]">
        <img
          src={project.thumbnail}
          alt={project.shortTitle}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>      <div className="p-2 text-center relative z-[5]">
        <p className="text-gray-800 font-medium project-title">{project.shortTitle}</p>
      </div>
      <div className="hover-text">VIEW MORE</div>
    </div>
  );
  return (
    <>
      {" "}
      {/* Minimal custom CSS for specific hover effects */}{" "}
      <style jsx="true">{`        .project-item {
          transition: transform 0.4s ease, border 0.3s ease,
            box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 380px;
          width: 100%;
        }

        .project-item:hover {
          transform: scale(1.05);
          border: #e4ba14 7px solid !important;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .project-item:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1;
          pointer-events: none;
        }

        .project-item:hover .project-title {
          color: black;
          position: relative;
          z-index: 0;
        }

        .project-item img {
          transition: transform 0.3s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hover-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
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
          border: 2px solid #e4ba14;
          border-radius: 4px;
          background-color: rgba(228, 186, 20, 0.2);
          letter-spacing: 1px;
        }

        .project-item:hover .hover-text {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
      `}</style>
      <section
        className="section-container py-12"
        style={{ background: "var(--bg-blue" }}
        id="students-work"
      >
        <div className="container mx-auto px-2 max-w-7xl">
          <h2
            className="text-white text-center font-bold text-2xl md:text-3xl tracking-tight mb-12"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            STUDENTS PROJECTS
          </h2>
          <div
            className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-8
        content-container-wide
        px-4
        justify-items-center
      "
          >
            {projectsData.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* Project Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeProjectPopup}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-6 pr-8">
                {selectedProject.title}
              </h2>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Image slider */}
                <div className="lg:w-1/2">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[400px]">
                    <img
                      loading="lazy"
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} image`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={prevSlide}
                      className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700"
                    >
                      &#10094;
                    </button>

                    <div className="flex-1 overflow-x-auto px-2 flex gap-2 justify-center">
                      {selectedProject.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          loading="lazy"
                          alt={`Thumbnail ${idx + 1}`}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-16 h-16 object-cover rounded cursor-pointer ${
                            idx === currentImageIndex
                              ? "border-2 border-blue-700 opacity-100"
                              : "opacity-70"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700"
                    >
                      &#10095;
                    </button>
                  </div>
                </div>

                {/* Right side - Description and contacts */}
                <div className="lg:w-1/2">
                  <p className="text-justify mb-6 text-gray-700">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Persons:</h3>
                    <ul className="list-none pl-0">
                      {selectedProject.contacts.map((contact, idx) => (
                        <li
                          key={idx}
                          className="py-1 text-gray-700 font-medium"
                        >
                          {contact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentProjects;
