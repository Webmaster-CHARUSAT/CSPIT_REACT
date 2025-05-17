import React, { useState, useEffect } from "react";

const ResearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [totalFunds, setTotalFunds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Mock data structure for reference (not used in production)
  const mockProject = {
    project_title: "Sample Project",
    funding_agency: "Sample Agency",
    total_fund_received: 100000,
    project_investigators: "Sample Investigator",
    date: "2023-01-01"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try to fetch from your API first
        let data;
        try {
          const response = await fetch("/data/research-projects.json");
          if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`);
          }
          data = await response.json();
        } catch (apiError) {
          console.warn("Falling back to mock data:", apiError);
          // Fall back to mock data if API fails
          data = [];
        }
        
        // Sort by date (newest first)
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log("Data loaded successfully:", data);
        setProjects(data);

        // Calculate total funds
        const total = data.reduce((acc, project) => {
          const amount = parseFloat(project.total_fund_received);
          return !isNaN(amount) ? acc + amount : acc;
        }, 0);

        setTotalFunds(total);
        setLoading(false);
        setDataLoaded(true);
      } catch (err) {
        console.error("Error fetching JSON file:", err);
        setError("Error loading data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="box-border text-gray-800 bg-cover bg-center bg-fixed min-h-screen flex justify-center items-center mt-20"
      style={{ backgroundImage: "url('./images/about-us-bg.webp')" }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .row-animate {
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
          }
          
          .project-row {
            margin-bottom: 15px;
            transition: all 0.3s ease;
          }
          
          .project-row:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            z-index: 10;
            position: relative;
          }
          
          #projectsTable {
            border-collapse: separate;
            border-spacing: 1px 15px;
          }
          
          #projectsTable tbody tr:nth-child(even) {
            background-color: #f7f7f7;
          }
          
          #projectsTable tbody tr td:nth-child(4) {
            color: #ebb30a !important;
            font-weight: 850 !important;
            font-size: large !important;
          }
        `}
      </style>

      <div className="w-[95%] my-8 p-8 bg-[rgba(240,248,255,0.8)] shadow-xl rounded-2xl overflow-hidden backdrop-blur-none">
        <h1 className="text-center text-[#0056b3] mb-8 text-4xl font-bold relative">
          Research Projects
          <span className="block w-[100px] h-1 bg-[#ffc107] mx-auto mt-2"></span>
        </h1>

        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="w-full" id="projectsTable">
              <thead>
                <tr className="bg-[#0056b3] text-white text-center">
                  <th className="p-4 font-semibold uppercase tracking-wider border-none rounded-l-lg text-center">
                    #
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider border-none text-center">
                    Project Title
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider border-none text-center">
                    Funding Agency
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider border-none w-[20%] text-center">
                    Total Sanctioned Fund (INR)
                    <div className="text-[1.1rem] text-[#ffc107] font-extrabold">
                      {loading
                        ? "Loading..."
                        : `Total: INR ${totalFunds.toLocaleString()}`}
                    </div>
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider border-none text-center">
                    Investigators
                  </th>
                  <th className="p-4 font-semibold uppercase tracking-wider border-none rounded-r-lg w-[10%] text-center">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataLoaded &&
                  projects.map((project, index) => (
                    <tr
                      key={index}
                      className={`project-row shadow-md row-animate ${
                        index % 2 === 1 ? "bg-[#f7f7f7]" : "bg-white"
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {/* Serial Number (manually added) */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-l-2 rounded-l-lg border-[rgba(240,248,255,0.8)]">
                        {index + 1}
                      </td>
                      
                      {/* Project Title */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-[rgba(240,248,255,0.8)] font-semibold text-[#0056b3]">
                        {project.project_title || "N/A"}
                      </td>
                      
                      {/* Funding Agency */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-[rgba(240,248,255,0.8)]">
                        {project.funding_agency || "N/A"}
                      </td>
                      
                      {/* Total Fund Received */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-[rgba(240,248,255,0.8)] text-[#ebb30a] font-extrabold text-lg">
                        {project.total_fund_received ? 
                          Number(project.total_fund_received).toLocaleString() : 
                          "N/A"}
                      </td>
                      
                      {/* Investigators */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-[rgba(240,248,255,0.8)]">
                        {project.project_investigators || "N/A"}
                      </td>
                      
                      {/* Date */}
                      <td className="p-4 text-center border-t-2 border-b-2 border-r-2 rounded-r-lg border-[rgba(240,248,255,0.8)]">
                        {project.date ? new Date(project.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        }).replace(/\//g, '-') : "N/A"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {loading && (
            <div
              className="text-center text-xl text-[#0056b3] mt-8"
              id="loading"
            >
              Loading data...
            </div>
          )}

          {error && (
            <div className="text-center text-xl text-red-600 mt-8">{error}</div>
          )}

          {!loading && projects.length === 0 && !error && (
            <div className="text-center text-xl text-[#0056b3] mt-8">
              No research projects found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;
