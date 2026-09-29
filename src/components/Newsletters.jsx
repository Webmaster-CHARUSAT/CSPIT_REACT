import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChevronDown,
  faCheck,
  faTableCells,
  faFilter,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const newsletters = [
  {
    year: "2026",
    issues: [
      {
        period: "April - June",
        months: ["April", "May", "June"],
        label: "Q2 Newsletter",
        path: "/news-letter-Apr-Jun-2026/",
      },
      {
        period: "January - March",
        months: ["January", "February", "March"],
        label: "Q1 Newsletter",
        path: "/news-letter-Jan-March-2026/",
      },
    ],
  },
  {
    year: "2025",
    issues: [
      {
        period: "October - December",
        months: ["October", "November", "December"],
        label: "Q4 Newsletter",
        path: "/news-letter-Oct-Dec-2025/",
      },
      {
        period: "July - September",
        months: ["July", "August", "September"],
        label: "Q3 Newsletter",
        path: "/news-letter-Jul-Sep-2025/",
      },
      {
        period: "April - June",
        months: ["April", "May", "June"],
        label: "Q2 Newsletter",
        path: "/news-letter-Apr-Jun-2025/",
      },
    ],
  },
];

const YEARS = newsletters.map(({ year }) => year);

const CustomDropdown = ({ value, options, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-full w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-6 py-2.5 transition-all duration-200 hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={icon} className="h-4 w-4 text-gray-700" />
        <span className="text-sm font-semibold text-gray-700">{value}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`h-4 w-4 text-gray-700 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-2 shadow-xl">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-150 ${
                value === option
                  ? "bg-blue-50 font-semibold text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {value === option && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-4 w-4 text-blue-600"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

function NewsletterCard({ issue }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-32 items-center justify-between overflow-hidden bg-gradient-to-br from-[#0056b3] to-[#0b2d5c] px-6 text-white">
        <div className="absolute -right-6 -top-10 h-36 w-36 rounded-full border-[18px] border-white/10" />
        <div className="absolute -bottom-16 left-16 h-36 w-36 rounded-full border-[18px] border-white/10" />
        <div className="relative z-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            CSPIT • CHARUSAT
          </p>
          <h2 className="text-2xl font-bold">{issue.label}</h2>
        </div>
        <span className="relative z-10 rounded-full bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur-sm">
          EDITION
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-5 text-lg font-semibold text-slate-800">
          {issue.period}
        </p>
        <a
          href={issue.path}
          className="inline-flex items-center justify-center rounded-lg bg-[#0056b3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#003f82] focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Read newsletter
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Newsletters() {
  const [yearFilter, setYearFilter] = useState(YEARS[0]);
  const [monthFilter, setMonthFilter] = useState(null);
  const [allMode, setAllMode] = useState(true);

  const filteredNewsletters = useMemo(
    () =>
      newsletters
        .map(({ year, issues }) => ({
          year,
          issues: issues.filter((issue) => {
            if (allMode) return true;
            const yearMatches = year === yearFilter;
            const monthMatches =
              monthFilter === null || issue.months.includes(monthFilter);
            return yearMatches && monthMatches;
          }),
        }))
        .filter(({ issues }) => issues.length > 0),
    [allMode, monthFilter, yearFilter],
  );

  const filteredCount = filteredNewsletters.reduce(
    (count, { issues }) => count + issues.length,
    0,
  );

  return (
    <main className="min-h-screen bg-[#e1e1e1] pb-20 pt-16 lg:pt-[100px]">
      <section className="relative bg-gradient-to-r from-[#0056b3] to-[#2081e9] px-6 py-10 text-center text-white shadow-md">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl">
            CSPIT Newsletter
          </h1>
        </div>
      </section>

      <div className="border-b bg-white shadow-sm">
        <div className="container py-3">
          <div className="container mb-4 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                setAllMode(true);
                setMonthFilter(null);
              }}
              className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 sm:w-auto ${
                allMode
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FontAwesomeIcon icon={faTableCells} className="h-4 w-4" />
              <span>All Newsletters</span>
              {allMode && (
                <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              )}
            </button>

            <div className="w-full sm:w-auto">
              <CustomDropdown
                value={yearFilter}
                options={YEARS}
                onChange={(value) => {
                  setYearFilter(value);
                  setAllMode(false);
                }}
                icon={faCalendar}
              />
            </div>
          </div>

          <div className="container">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
              {MONTHS.map((month) => (
                <button
                  key={month}
                  onClick={() => {
                    setMonthFilter(month);
                    setAllMode(false);
                  }}
                  className={`rounded-lg px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:text-sm ${
                    !allMode && monthFilter === month
                      ? "transform bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105"
                      : "border border-gray-300 bg-gray-100 text-gray-700 hover:bg-[#e1e1e1]"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {!allMode && (
            <div className="container mt-3 flex items-center gap-2 text-xs text-gray-600">
              <FontAwesomeIcon icon={faFilter} className="h-3.5 w-3.5" />
              <span className="font-medium">Filtered by:</span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 font-semibold text-blue-800">
                {monthFilter ? `${monthFilter} ${yearFilter}` : yearFilter}
              </span>
              <span className="text-gray-500">
                ({filteredCount} newsletters)
              </span>
            </div>
          )}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0056b3]">
              Archive
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Browse by year
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {newsletters.flatMap((year) => year.issues).length} editions
            available
          </p>
        </div>

        <div className="space-y-12">
          {filteredNewsletters.map(({ year, issues }) => (
            <section key={year} aria-labelledby={`newsletter-year-${year}`}>
              <div className="mb-5 flex items-center gap-4">
                <h3
                  id={`newsletter-year-${year}`}
                  className="text-2xl font-extrabold text-slate-900"
                >
                  {year}
                </h3>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {issues.map((issue) => (
                  <NewsletterCard key={issue.path} issue={issue} />
                ))}
              </div>
            </section>
          ))}
          {filteredNewsletters.length === 0 && (
            <div className="py-20 text-center">
              <FontAwesomeIcon
                icon={faFaceFrown}
                className="mx-auto mb-4 h-16 w-16 text-gray-400"
              />
              <p className="text-xl font-medium text-gray-600">
                No newsletters found for this filter
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
