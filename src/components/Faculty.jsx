import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultySection = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [supportingStaffData, setSupportingStaffData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const [facultyResponse, supportingStaffResponse] = await Promise.all([
          fetch("/data/faculty.json"),
          fetch("/data/nonteaching.json"),
        ]);

        if (!facultyResponse.ok) {
          throw new Error(
            `Failed to load faculty data: ${facultyResponse.statusText}`,
          );
        }

        if (!supportingStaffResponse.ok) {
          throw new Error(
            `Failed to load supporting staff data: ${supportingStaffResponse.statusText}`,
          );
        }

        const faculty = await facultyResponse.json();
        const supportingStaff = await supportingStaffResponse.json();

        setFacultyData(faculty);
        setSupportingStaffData(supportingStaff);
      } catch (error) {
        console.error("Error loading faculty page data:", error);
      }
    };

    fetchPageData();
  }, []);

  const handleFacultyClick = (facultyName) => {
    // Using React Router navigation instead of direct URL manipulation
    navigate(`/faculty/${encodeURIComponent(facultyName)}`);

    // ----------- Opening in new tab -----------
    // window.open(`/faculty/${encodeURIComponent(facultyName)}`, '_blank');
  };

  const supportingCategories = [
    { title: "Office Executives", category: "Office Executives" },
    { title: "Laboratory Technicians", category: "Lab Tech" },
    { title: "Attendant", category: "Attendant" },
  ];

  const getSupportingMembers = (category) =>
    supportingStaffData.filter(
      (member) =>
        String(member.Category || "")
          .trim()
          .toLowerCase() === category.trim().toLowerCase(),
    );

  const getSupportingImage = (member) => {
    if (member.image && member.image.trim()) {
      return member.image;
    }

    if (member.Image && member.Image.trim()) {
      return member.Image;
    }

    return "https://via.placeholder.com/400x400?text=Staff";
  };

  return (
    <section
      className="py-10 text-white min-h-screen px-6 mt-20"
      style={{ background: "linear-gradient(135deg, #033c67, #6aa0d3)" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">MEET OUR FACULTY</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-[95%] mx-auto overflow-hidden border-2 border-gray-200"
              onClick={() => handleFacultyClick(faculty.name)}
            >
              <div className="p-1">
                <img
                  style={{ backgroundColor: "#a9a9a9" }}
                  src={faculty.image_src}
                  alt={faculty.name}
                  className="w-full h-[260px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="text-[#033c67] font-bold text-lg mb-0">
                  {faculty.name}
                </h4>
                <h5 className="text-gray-600 text-xs uppercase tracking-wide my-1">
                  {faculty.title}
                </h5>
                <p className="text-gray-500 text-xs mb-2">{faculty.degree}</p>

                <p className="text-sm mb-2">
                  <span className="font-bold text-[#033c67] block mb-1">
                    Research Interests:
                  </span>
                  {Array.isArray(faculty.research_interests) ? (
                    faculty.research_interests.map((interest, i) => (
                      <span
                        key={i}
                        className="block text-gray-600 leading-tight"
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <span className="block text-gray-600">
                      {faculty.research_interests}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">SUPPORTING STAFF</h2>
            {/* <div className="w-28 h-2 bg-[#ffcc00] rounded-full mx-auto" /> */}
          </div>

          <div className="space-y-14 text-left">
            {supportingCategories.map((section) => {
              const members = getSupportingMembers(section.category);

              return (
                <div key={section.category}>
                  <h3 className="text-3xl font-bold text-white mb-8">
                    {section.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-5">
                    {members.length > 0 ? (
                      members.map((member, index) => (
                        <div
                          key={`${section.category}-${index}`}
                          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-[95%] mx-auto overflow-hidden border-2 border-gray-200"
                        >
                          <div className="p-1">
                            <img
                              style={{ backgroundColor: "white" }}
                              src={getSupportingImage(member)}
                              alt={member.name}
                              className="w-full h-[340px] object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-3 text-center">
                            <h4 className="text-[#033c67] font-bold text-lg mb-0">
                              {member.name}
                            </h4>
                            <h5 className="text-gray-600 text-xs uppercase tracking-wide my-1">
                              {member.Designation || member.Category}
                            </h5>
                            {/* <p className="text-gray-500 text-xs mb-2">
                              {member.Category}
                            </p> */}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full bg-white/15 border border-white/20 rounded-lg px-5 py-6 text-white/85">
                        No {section.title.toLowerCase()} found in the data file.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
