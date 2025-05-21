import React, { useState } from "react";
import { Link } from "react-router-dom";

const topLinks = [
  { to: "#placement", label: "Placement", external: false },
  { to: "#gallery", label: "Gallery", external: false },
  { to: "./news-letter-Dec-Mar-2025", label: "Newsletter", external: true },
  {
    to: "https://www.charusat.ac.in/scholarship",
    label: "Scholarships",
    external: true,
  },
  { to: "/faculty", label: "Faculty & Staff", external: true },
  { to: "https://alumni.charusat.ac.in/", label: "Alumni", external: true },
  { to: "#contact-us", label: "Contact Us", external: false },
];

const submenuMap = {
  ACADEMICS: [
    {
      label: "Undergraduate Programs (B. Tech)",
      to: "#under-graduate-programs",
      external: false,
    },
    {
      label: "Postgraduate Programs (M. Tech)",
      to: "#post-graduate-programs",
      external: false,
    },
    {
      label: "Ph.D.",
      to: "https://www.charusat.ac.in/assets/files/PHD/PhD_Regulations.pdf",
      external: true,
    },
  ],
  CENTRES: [
    {
      label: "Rural Education Development",
      to: "https://www.charusat.ac.in/CREDP",
      external: true,
    },
    {
      label: "WOMEN DEVELOPMENT CELL",
      to: "https://www.charusat.ac.in/wdc",
      external: true,
    },
    {
      label: "Startup and Innovation Centre",
      to: "https://www.charusat.ac.in/csic",
      external: true,
    },
    {
      label: "Equal Opportunity Cell",
      to: "https://www.charusat.ac.in/eoc",
      external: true,
    },
    {
      label: "Industry Interaction Cell",
      to: "https://www.charusat.ac.in/university-industry-interaction-cell",
      external: true,
    },
    {
      label: "International Student Cell",
      to: "https://isc.charusat.ac.in/",
      external: true,
    },
    { label: "Energy Conservation Cell", to: "./ecc.html", external: true },
  ],
  COMMITTEES: [
    {
      label: "Grievance Redressal",
      to: "https://www.charusat.ac.in/cspit/Grievance-Redressal-CSPIT.html",
      external: true,
    },
    {
      label: "Anti-Ragging Squad",
      to: "https://www.charusat.ac.in/cspit/Anti-Ragging-Squad.html",
      external: true,
    },
    {
      label: "Internal Complaint Committee",
      to: "https://www.charusat.ac.in/ICC",
      external: true,
    },
    {
      label: "Anti-Drug",
      to: "./files/Anti.drug.circular.pdf",
      external: true,
    },
  ],
  RESEARCH: [
    {
      label: "Research Facilities/Sophisticated Instruments",
      to: "/research-facilities",
      external: true,
    },
    { label: "Research Projects", to: "/research-project", external: true },
  ],
  "STUDENT CORNER": [
    {
      label: "Code Of Conduct",
      to: "https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf",
      external: true,
    },
    {
      label: "Student Handbook",
      to: "/drive?folderId=1LgF2k8N_GeRCs-O50PvXUiywW-Bk8Lyw&heading=STUDENT%20HANDBOOK",
      external: true,
    },
    {
      label: "Syllabus",
      to: "/drive?folderId=1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2&heading=SYLLABUS",
      external: true,
    },
    {
      label: "Request Transcript",
      to: "https://charusat.edu.in:912/OthPaymentApp/",
      external: true,
    },
    {
      label: "Pay Fees",
      to: "https://charusat.edu.in:912/FeesPaymentApp/",
      external: true,
    },
    {
      label: "View Result",
      to: "https://charusat.edu.in:912/Uniexamresult/",
      external: true,
    },
    {
      label: "i-create",
      to: "https://icreate.charusat.ac.in/",
      external: true,
    },
    {
      label: "Question Papers",
      to: "/drive?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&heading=QUESTION%20PAPERS",
      external: true,
    },
    {
      label: "Academic Calender",
      to: "/drive?folderId=1EWfAd0mJ3MIVNA7Ct3XnHfS6aKpG2NeJ&heading=ACADEMIC%20CALENDER",
      external: true,
    },
    {
      label: "Student Support Policy",
      to: "./files/student_support_policy_UGSF_PGSF.pdf",
      external: true,
    },
  ],
};

const mainNav = [
  { label: "ABOUT US", to: "/about", external: true },
  { label: "ACADEMICS", submenu: true },
  { label: "CENTRES", submenu: true },
  { label: "COMMITTEES", submenu: true },
  { label: "RESEARCH", submenu: true },
  { label: "STUDENT CORNER", submenu: true },
];

function NavLink({ to, label, external, ...props }) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {label}
      </a>
    );
  }
  if ((to || "").startsWith("#")) {
    return (
      <a href={to} {...props}>
        {label}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {label}
    </Link>
  );
}

const Tempnav = () => {
  const [hovered, setHovered] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [sidebarSub, setSidebarSub] = useState(null);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 bg-white shadow"
      style={{ color: "#5592d3" }}
    >
      {/* Top bar */}
      <div className="relative hidden lg:block">
        <div className="hidden lg:flex relative">
          <div className="bg-[#0056b3] text-white flex justify-end text-sm pl-[170px] w-full">
            {topLinks.map(({ to, label, external }) => (
              <NavLink
                key={label}
                to={to}
                label={label}
                external={external}
                className="px-4 py-1 transition hover:text-yellow-300"
              />
            ))}
          </div>
        </div>
        {/* Logo */}
        <div className="absolute top-0 left-0 w-[150px] h-[100px] border-r border-gray-300 flex items-center justify-center bg-white z-20">
          <a
            href="/"
            className="block"
            target="_self"
            rel="noopener noreferrer"
          >
            <img
              src="/images/CSPIT_Logo.png"
              alt="CSPIT Logo"
              className="w-[80px] shadow-inner"
              style={{
                boxShadow:
                  "inset -4px -4px 8px rgba(255,255,255,0.9), 6px 6px 10px rgba(0,0,0,0.3)",
                padding: "4px",
              }}
              loading="lazy"
            />
          </a>
        </div>
        {/* Main Navigation Items */}
        <div
          className="flex border-b border-gray-300 pl-[150px] bg-white relative"
          onMouseLeave={() => setHovered(null)}
        >
          {mainNav.map((item) => {
            const isHovered = hovered === item.label;
            if (!item.submenu) {
              return (
                <div
                  key={item.label}
                  className={`flex-1 h-[72px] border border-gray-300 flex items-center justify-center font-bold cursor-pointer
                    ${
                      isHovered
                        ? "bg-[#0056b3] text-white"
                        : "text-black/80 hover:bg-[#0056b3] hover:text-white"
                    } 
                  `}
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <NavLink
                    to={item.to}
                    label={<span className="uppercase">{item.label}</span>}
                    external={item.external}
                    className="w-full h-full flex items-center justify-center"
                  />
                </div>
              );
            }
            // Submenu hover
            return (
              <div
                key={item.label}
                className={`flex-1 h-[72px] border border-gray-300 flex items-center justify-center font-bold relative cursor-pointer 
                  ${
                    isHovered
                      ? "bg-[#0056b3] text-white"
                      : "text-black/80 hover:bg-[#0056b3] hover:text-white"
                  }
                `}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <span>{item.label}</span>
              </div>
            );
          })}

          {/* Horizontal Submenu that takes full navbar width */}
          {hovered && submenuMap[hovered] && (
            <div
              className="absolute left-5 right-0 top-full flex bg-[#0056b3] text-white z-50 text-center border-b border-[#ffff] shadow"
              style={{ height: "80px" }}
              onMouseEnter={() => setHovered(hovered)}
              onMouseLeave={() => setHovered(null)}
            >
              {submenuMap[hovered].map((sub) => (
                <NavLink
                  key={sub.label}
                  to={sub.to}
                  external={sub.external}
                  className={`flex-1 flex items-center justify-center py-4 px-2 border-r border-[#ffff] last:border-r-0 transition group`}
                  label={
                    <span
                      className="inline-block text-center border-b-4 border-[#0056b3] group-hover:border-white pb-1 transition-all duration-200 uppercase"
                      style={{ borderBottomWidth: "5px" }}
                    >
                      {sub.label}
                    </span>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Topbar */}
      <div className="flex lg:hidden bg-[#e1e1e1] text-white text-xs justify-between items-center px-4 h-16">
        <span className="font-bold tracking-widest flex items-center h-full">
          <img
            loading="lazy"
            src="/images/CSPIT_Logo.png"
            alt="CSPIT Logo"
            className="h-[50px] w-full bg-white"
            // style={{ maxHeight: '2 rem' }}
          />
        </span>
        <button aria-label="Open menu" onClick={() => setSidebar(true)}>
          <svg
            width={30}
            height={30}
            fill="none"
            stroke="#0056b3"
            strokeWidth={2}
          >
            <path d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </button>
      </div>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-[100] transition duration-300 ${
          sidebar ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            sidebar ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebar(false)}
        ></div>
        {/* Sidebar */}
        <div
          className={`
          absolute right-0 top-0 h-screen max-h-screen w-[300px] 
          bg-[#0066cc] shadow-lg transition-transform duration-300
          transform ${sidebar ? "translate-x-0" : "translate-x-full"}
          flex flex-col
          overflow-y-auto
        `}
        >
          <div className="flex items-center justify-between p-4 border-b border-white">
            <img
              src="/images/CSPIT_Logo.png"
              alt="Logo"
              className="h-12 bg-white p-1 rounded"
            />
            <button aria-label="Close" onClick={() => setSidebar(false)}>
              <svg
                width={28}
                height={28}
                fill="none"
                stroke="#fff"
                strokeWidth={3}
              >
                <path d="M6 6l16 16M22 6L6 22" />
              </svg>
            </button>
          </div>
          {/* Top links */}
          <div className="flex flex-col border-b border-white">
            {topLinks.map(({ to, label, external }) => (
              <NavLink
                key={label}
                to={to}
                label={<span className="uppercase">{label}</span>}
                external={external}
                className="block px-6 py-4 text-white font-light border-b border-white hover:bg-[#0056b3] transition"
                onClick={() => setSidebar(false)}
              />
            ))}
          </div>
          {/* Main nav as accordions */}
          <div className="flex flex-col">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-white">
                {!item.submenu ? (
                  <NavLink
                    to={item.to}
                    label={<span className="uppercase">{item.label}</span>}
                    external={item.external}
                    className="block px-6 py-4 text-white font-light hover:bg-[#0056b3] transition"
                    onClick={() => setSidebar(false)}
                  />
                ) : (
                  <>
                    <button
                      className="w-full text-left px-6 py-4 font-light text-white hover:bg-[#0056b3] transition flex items-center justify-between"
                      onClick={() =>
                        setSidebarSub(
                          sidebarSub === item.label ? null : item.label
                        )
                      }
                    >
                      <span className="uppercase">{item.label}</span>
                      <span>
                        <svg
                          width={20}
                          height={20}
                          className={`inline transform transition-transform ${
                            sidebarSub === item.label ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="#fff"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    {/* Accordion Content */}
                    {sidebarSub === item.label && (
                      <div className="pl-6 bg-[#0056b3]">
                        {submenuMap[item.label].map((sub) => (
                          <NavLink
                            key={sub.label}
                            to={sub.to}
                            label={
                              <span className="uppercase">{sub.label}</span>
                            }
                            external={sub.external}
                            className="block py-3 pl-2 text-white border-l-4 border-white hover:underline"
                            onClick={() => setSidebar(false)}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Tempnav;
