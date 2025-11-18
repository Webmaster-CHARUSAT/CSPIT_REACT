import React, { useEffect, useMemo, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faChevronDown,
  faCheck,
  faTableCells,
  faRotateRight,
  faFilter,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faFaceFrown
} from "@fortawesome/free-solid-svg-icons";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const YEARS = ["2025", "2024"];

function parseEventDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const lower = dateStr.toLowerCase();
  const monthIndex = MONTHS.map(m => m.toLowerCase()).findIndex(m => lower.includes(m));
  const yearMatch = dateStr.match(/(20\d{2})/);
  const dayMatch = dateStr.match(/\b([0-3]?\d)\b/);
  const year = yearMatch ? Number(yearMatch[1]) : NaN;
  const day = dayMatch ? Number(dayMatch[1]) : 1;
  if (monthIndex === -1 || !year) return null;
  const jsDate = new Date(year, monthIndex, day);
  return { year, monthIndex, day, jsDate };
}

// Custom Dropdown Component
const CustomDropdown = ({ value, options, onChange, icon, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = typeof value === 'number' ? MONTHS[value] : value;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200 transition-all duration-200 min-w-[160px] group"
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5 text-gray-500" />
        <div className="flex-1 text-left">
          <div className="text-xs text-gray-500 font-medium">{label}</div>
          <div className="text-sm font-semibold text-gray-800">{selectedLabel}</div>
        </div>
        <FontAwesomeIcon 
          icon={faChevronDown}
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-30 max-h-64 overflow-y-auto">
          {options.map((opt, idx) => {
            const optValue = typeof opt === 'object' ? opt.value : idx;
            const optLabel = typeof opt === 'object' ? opt.label : opt;
            const isSelected = typeof value === 'number' 
              ? value === optValue 
              : value === optValue;

            return (
              <button
                key={optValue}
                onClick={() => {
                  onChange(optValue);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                  isSelected
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{optLabel}</span>
                  {isSelected && (
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const now = new Date();
  const defaultYear = String(now.getFullYear());
  const defaultMonthIndex = now.getMonth();

  const [yearFilter, setYearFilter] = useState(YEARS.includes(defaultYear) ? defaultYear : YEARS[0]);
  const [monthFilter, setMonthFilter] = useState(defaultMonthIndex);
  const [allMode, setAllMode] = useState(false);

  useEffect(() => {
    fetch('/data/events.json')
      .then(r => r.json())
      .then(data => {
        const withMeta = (data || []).map(e => {
          const meta = parseEventDate(e.date);
          return meta ? { ...e, __meta: meta } : null;
        }).filter(Boolean);
        withMeta.sort((a, b) => b.__meta.jsDate - a.__meta.jsDate);
        setEventsData(withMeta);
      })
      .catch(err => {
        console.error('Error fetching events:', err);
        setEventsData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (allMode) return eventsData;
    return eventsData.filter(e => {
      const yOk = String(e.__meta.year) === String(yearFilter);
      const mOk = typeof monthFilter === "number" ? e.__meta.monthIndex === monthFilter : true;
      return yOk && mOk;
    });
  }, [eventsData, yearFilter, monthFilter, allMode]);

  const openEventPopup = (event) => {
    const images = Array.isArray(event.images) && event.images.length > 0
      ? event.images
      : [event.thumbnail || "https://placehold.co/600x400"];
    setSelectedEvent({ ...event, images });
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeEventPopup = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const EventCard = ({ event }) => (
    <div
      className="event-card rounded-xl overflow-hidden shadow-md bg-white flex flex-col cursor-pointer border-2 p-1 border-white w-full"
      onClick={() => openEventPopup(event)}
    >
      <div className="relative h-[300px]">
        <img
          src={event.thumbnail || "https://placehold.co/600x400"}
          alt={event.shortTitle}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center relative z-[5]">
        <p className="text-gray-800 font-medium event-card-title text-lg">
          {event.shortTitle}
        </p>
        <p className="text-sm text-gray-600 mt-2">📅 {event.date}</p>
      </div>
      <div className="hover-text text-white">VIEW DETAILS</div>
    </div>
  );

  return (
    <>
      <style jsx="true">{`
        .event-card {
          transition: transform 0.4s ease, border 0.3s ease, box-shadow 0.3s ease;
          position: relative; overflow: hidden; height: 430px;
        }
        .event-card:hover { transform: scale(1.05); border: #e4ba14 7px solid !important; z-index: 10; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .event-card:hover::after { content:""; position:absolute; inset:0; background:rgba(0,0,0,0.85); z-index:1; pointer-events:none; }
        .event-card:hover .event-card-title { color:black; position:relative; z-index:0; }
        .event-card img { transition: transform 0.3s ease; width:100%; height:100%; object-fit:cover; }
        .hover-text { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:16px; padding:10px 20px;
          white-space:normal; text-align:center; max-width:90%; opacity:0; transition:opacity 0.3s ease, transform 0.3s ease; z-index:2;
          text-transform:uppercase; font-weight:bold; pointer-events:none; border:2px solid #e4ba14; border-radius:4px; background-color:rgba(228,186,20,0.2); letter-spacing:1px; }
        .event-card:hover .hover-text { opacity:1; transform:translate(-50%,-50%); }
      `}</style>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white mt-24"></div>
      <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white py-10 text-center shadow-md relative">
        <h1 className="text-4xl font-bold tracking-wider uppercase">All Academic Enrichment Activities Events</h1>
        <p className="text-lg opacity-90">Browse by year and month or view everything</p>
      </div>

      {/* Modern Filter Toolbar */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="container flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Left: All Events Button */}
            <button
              onClick={() => setAllMode(true)}
              className={`group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                allMode
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faTableCells} className="w-4 h-4" />
              <span>All Events</span>
              {allMode && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              )}
            </button>

            {/* Right: Filter Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Year Filter */}
              <CustomDropdown
                value={yearFilter}
                options={YEARS.map(y => ({ value: y, label: y }))}
                onChange={(val) => { setYearFilter(val); setAllMode(false); }}
                icon={faCalendar}
                label="Year"
              />

              {/* Month Filter */}
              <CustomDropdown
                value={monthFilter}
                options={MONTHS}
                onChange={(val) => { setMonthFilter(val); setAllMode(false); }}
                icon={faClock}
                label="Month"
              />

              {/* Reset Button */}
              <button
                onClick={() => {
                  setAllMode(false);
                  setYearFilter(YEARS.includes(defaultYear) ? defaultYear : YEARS[0]);
                  setMonthFilter(defaultMonthIndex);
                }}
                className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-blue-50 border border-gray-300 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200"
                title="Reset to current month"
              >
                <FontAwesomeIcon 
                  icon={faRotateRight} 
                  className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" 
                />
                <span className="hidden sm:inline">This Month</span>
              </button>
            </div>
          </div>

          {/* Active Filter Indicator */}
          {!allMode && (
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
              <FontAwesomeIcon icon={faFilter} className="w-3.5 h-3.5" />
              <span className="font-medium">Filtered by:</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold">
                {MONTHS[monthFilter]} {yearFilter}
              </span>
              <span className="text-gray-500">({filtered.length} events)</span>
            </div>
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            <div className="text-center text-gray-600 text-xl py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              Loading events...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <FontAwesomeIcon icon={faFaceFrown} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-xl font-medium">No events found</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your filters or view all events</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filtered.map((event, idx) => (
                <EventCard key={event.id || idx} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popup (card style) */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-auto relative shadow-2xl">
            <button
              onClick={closeEventPopup}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold text-gray-700 transition-all duration-200 z-10"
            >
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Carousel */}
              <div className="lg:w-1/2 bg-gray-100 p-2">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    loading="lazy"
                    src={selectedEvent.images[currentImageIndex]}
                    alt={selectedEvent.title}
                    className="w-full h-80 object-cover"
                  />
                  
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {selectedEvent.images.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {selectedEvent.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition ${idx === currentImageIndex ? "bg-blue-600 w-8" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 p-8">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    📅 {selectedEvent.date}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedEvent.title}
                  </h2>
                </div>

                <div className="prose prose-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">About this Event</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;