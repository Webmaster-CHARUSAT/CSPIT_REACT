import React, { useState } from "react";

// Data for each program's accordion and table
const honorsMinorPrograms = [
  {
    title: "Electric Vehicle Systems",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Electric Vehicle System",
          "Electrical Engineering",
          "Electrical Engineering",
          <>
            Bachelor of Technology (Hons.) <br />
            Electrical Engineering with Specialization in <br />
            Electric Vehicles
          </>,
          <>
            Mechanical Engg.<br />Civil Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology <br />
            <strong>
              <i>Branch Name</i>
            </strong>{" "}
            with Minor Specialization in Electric Vehicle System
          </>,
        ],
      ],
    },
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Artificial Intelligence & Machine Learning",
          <><br />--</>,
          <><br />--</>,
          <><br />--</>,
          <>
            Mechanical Engg.<br />Civil Engg.<br />Electrical Engg.
          </>,
          <>
            Bachelor of.Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Artificial Intelligence &amp; Machine Learning
          </>,
        ],
      ],
    },
  },
  {
    title: "Robotics & Internet of Things",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Robotics & Internet of Things",
          "E&C Engineering",
          "E&C Engineering",
          <>
            Bachelor of Technology (Hons.)<br />
            Electronics &amp; Communication Engineering with Specialization in <br />
            Robotics & Internet of Things
          </>,
          <>
            Mechanical Engg.<br />Civil Engg.<br />Electrical Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Robotics &amp; Internet of Things
          </>,
        ],
      ],
    },
  },
  {
    title: "Data Science",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Data Science",
          "E&C Engineering",
          <><br />-</>,
          <><br />-</>,
          <>
            E &amp; C Engg.<br />Mechanical Engg.<br />Civil Engg.<br />Electrical Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Data Science
          </>,
        ],
      ],
    },
  },
  {
    title: "GIS and Remote Sensing",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "GIS and Remote Sensing",
          "Civil Engineering",
          "Civil Engineering",
          <>
            Bachelor of Technology (Hons.) <br />
            Civil Engineering with Specialization in <br />
            GIS and Remote Sensing
          </>,
          <>
            Mechanical Engg. <br />Electrical Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in GIS and Remote Sensing
          </>,
        ],
      ],
    },
  },
  {
    title: "Green Technology and Sustainability Engineering",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          <>
            Green Technology and <br />
            Sustainability Engineering
          </>,
          "Civil Engineering",
          "Civil Engineering",
          <>
            Bachelor of Technology (Hons.) <br />
            Civil Engineering with Specialization in <br />
            Green Technology and Sustainability Engineering
          </>,
          <>
            Mechanical Engg.<br />Electrical Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Green Technology and <br />
            Sustainability Engineering
          </>,
        ],
      ],
    },
  },
  {
    title: "3D Printing",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "3D Printing",
          "Civil Engineering",
          "Civil Engineering",
          <>
            Bachelor of Technology (Hons.)<br />
            Civil Engineering with Specialization in <br />
            3D Printing
          </>,
          <>
            Mechanical Engg.<br />Electrical Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in 3D Printing
          </>,
        ],
      ],
    },
  },
  {
    title: "Environmental Geotechnology",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Environmental Geotechnology",
          "Civil Engineering",
          "Civil Engineering",
          <>
            <br />
            Bachelor of Technology (Hons.)<br />
            Civil Engineering with Specialization in <br />
            Environmental Geotechnology
          </>,
          <>
            Mechanical Engg.<br />Electrical Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Environmental Geotechnology
          </>,
        ],
      ],
    },
  },
  {
    title: "Smart Cities",
    table: {
      headers: [
        [
          { label: "Specialization", rowspan: 2 },
          { label: "Course\noffering department", rowspan: 2 },
          { label: "Degree", colspan: 2 },
          { label: "Degree", colspan: 2 },
        ],
        [
          { label: "Eligible Branch" },
          { label: "Hons. with specialization" },
          { label: "Eligible Branches" },
          { label: "Minor Specialization" },
        ],
      ],
      rows: [
        [
          "Smart Cities",
          "Civil Engineering",
          "Civil Engineering",
          <>
            <br />
            Bachelor of Technology (Hons.) <br />
            Civil Engineering with Specialization in <br />
            Smart Cities
            <br />
            <br />
          </>,
          <>
            Mechanical Engg.<br />Electrical Engg.<br />E &amp; C Engg.<br />Information Tech.<br />Computer Engg.<br />Computer Science &amp; Engg.
          </>,
          <>
            Bachelor of Technology<br />
            <strong>
              <i>Branch Name</i>
            </strong>
            <br />
            with Minor Specialization in Smart Cities
          </>,
        ],
      ],
    },
  },
];

// Accordion Table Component
function AccordionTable({ headers, rows }) {
  return (
    <div className="p-4 border border-gray-600 ">
    <div className="overflow-x-auto mt-4 mb-6  border border-gray-400">
      <table className="min-w-[700px] w-full border-collapse">
        <thead>
          {headers.map((headerRow, i) => (
            <tr key={i} className="bg-gray-200">
              {headerRow.map((cell, j) => (
                <th
                  key={j}
                  rowSpan={cell.rowspan}
                  colSpan={cell.colspan}
                  className="border border-black text-left align-top px-2 py-3 font-normal text-[14px] font-[Montserrat] text-black"
                >
                  {cell.label.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== cell.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="bg-white">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-black text-left align-top px-2 py-3 font-[Montserrat] text-[14px] text-black"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

// Accordion Component
function HonorsMinorAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div>
      {data.map((item, idx) => (
        <div key={item.title} className="mb-3">
          <button
            className={`
              flex justify-between items-center w-full px-4 py-3 
              bg-gray-100 rounded-t-lg text-lg font-semibold
              transition
              hover:bg-gray-200
              font-[Montserrat]
              `}
            style={{
              // fontFamily: "Montserrat,sans-serif",
              fontSize: "1.1rem",
            }}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
          >
            {item.title}
            <span className="ml-4 text-2xl select-none">
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          <div
            id={`accordion-content-${idx}`}
            className={`${
              openIndex === idx ? "block" : "hidden"
            } bg-white rounded-b-lg`}
          >
            <AccordionTable headers={item.table.headers} rows={item.table.rows} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Section Component
const HonorsMinorProgramsSection = () => (
  <section className="py-8"
  style={{ background: 'var(--bg-light' }}>
    <div className="max-w-7xl mx-auto">
      <h3
        className="mb-2 font-bold"
        style={{
          // fontFamily: "Playfair, serif",
          fontSize: "xx-large",
        }}
      >
        B. Tech. with Honors and Minor Degree Programs
      </h3>
      <hr className="mb-8" />
      <HonorsMinorAccordion data={honorsMinorPrograms} />
    </div>
  </section>
);

export default HonorsMinorProgramsSection;
