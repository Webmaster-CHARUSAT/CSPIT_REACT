"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBookOpen,
  faFileLines,
  faClipboard,
  faCreditCard,
  faTrophy,
  faLightbulb,
  faSearch,
  faCalendarDays,
  faHandshakeAngle,
  faGraduationCap,
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";

const studentCornerLinks = [
  {
    label: "Code Of Conduct",
    to: "https://www.charusat.ac.in/documents/pdfs/data_1/Code_Of_Conduct/Student%20code%20of%20Conduct.pdf",
    icon: faShieldHalved,
  },
  {
    label: "Student Handbook",
    to: "/drive?folderId=1LgF2k8N_GeRCs-O50PvXUiywW-Bk8Lyw&heading=STUDENT%20HANDBOOK",
    icon: faBookOpen,
  },
  {
    label: "Syllabus",
    to: "/drive?folderId=1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2&heading=SYLLABUS",
    icon: faFileLines,
  },
  {
    label: "Request Transcript",
    to: "https://charusat.edu.in:912/OthPaymentApp/",
    icon: faClipboard,
  },
  {
    label: "Pay Fees",
    to: "https://charusat.edu.in:912/FeesPaymentApp/",
    icon: faCreditCard,
  },
  {
    label: "View Result",
    to: "https://charusat.edu.in:912/Uniexamresult/",
    icon: faTrophy,
  },
  {
    label: "i-create",
    to: "https://icreate.charusat.ac.in/",
    icon: faLightbulb,
  },
  {
    label: "Question Papers",
    to: "/drive?folderId=1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW&heading=QUESTION%20PAPERS",
    icon: faSearch,
  },
  {
    label: "Academic Calendar",
    to: "/drive?folderId=1EWfAd0mJ3MIVNA7Ct3XnHfS6aKpG2NeJ&heading=ACADEMIC%20CALENDER",
    icon: faCalendarDays,
  },
  {
    label: "Student Support Policy",
    to: "./files/student_support_policy_UGSF_PGSF.pdf",
    icon: faHandshakeAngle,
  },
  {
    label: "Skill Augmentation Guidelines",
    to: "./files/Annexure 1 Activity points - Updated_12 May 2025.pdf",
    icon: faGraduationCap,
  },
];

export default function StudentCornerPage() {
  return (
    <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white mt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white py-12 lg:py-16 text-center shadow-md relative">
        <h1 className="text-4xl font-bold mb-2 text-center tracking-wider uppercase">
          Student Corner
        </h1>
        <p className="text-xl lg:text-xl  mx-auto opacity-90">
            Access all your essential academic resources, services, and tools in
            one convenient location
          </p>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#e1e1e1] rounded-t-3xl ">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {studentCornerLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 rounded-2xl shadow-lg bg-white hover:bg-gradient-to-r hover:from-[#0056b3] hover:to-[#2081e9] group transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-white transition">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-2xl text-[#0056b3]"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-700 group-hover:text-white transition">
                    {item.label}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-gray-400 group-hover:text-white text-sm transition-colors duration-300"
                />
              </div>
              
            </motion.a>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
