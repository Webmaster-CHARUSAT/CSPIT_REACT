import React, { useState, useEffect } from "react";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all events data from JSON file
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => {
        setEventsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  const openEventPopup = (event) => {
    setSelectedEvent(event);
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
          src={event.thumbnail}
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
          position: relative;
          overflow: hidden;
          height: 430px;
        }

        .event-card:hover {
          transform: scale(1.05);
          border: #e4ba14 7px solid !important;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .event-card:hover::after {
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

        .event-card:hover .event-card-title {
          color: black;
          position: relative;
          z-index: 0;
        }

        .event-card img {
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

        .event-card:hover .hover-text {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        .page-header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 4rem 0 3rem;
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          opacity: 0.3;
        }
      `}</style>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white mt-24"></div>
      <div className="bg-gradient-to-r from-[#0056b3] to-[#2081e9] text-white py-12 lg:py-16 text-center shadow-md relative">
        <h1 className="text-4xl font-bold mb-2 text-center tracking-wider uppercase">
          ALL EVENTS
        </h1>
        <p className="text-xl lg:text-xl mx-auto opacity-90">
          Explore our exciting lineup of workshops, seminars, hackathons, and competitions
        </p>
      </div>

      {/* Events Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            <div className="text-center text-gray-600 text-xl">Loading events...</div>
          ) : eventsData.length === 0 ? (
            <div className="text-center text-gray-600 text-xl">No events found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {eventsData.map((event, idx) => (
                <EventCard key={event.id || idx} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Popup - Card Style */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-auto relative shadow-2xl">
            <button
              onClick={closeEventPopup}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold text-gray-700 transition-all duration-200 z-10"
            >
              ×
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Left: Image Carousel */}
              <div className="lg:w-1/2 bg-gray-100 p-8">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    loading="lazy"
                    src={selectedEvent.images[currentImageIndex]}
                    alt={selectedEvent.title}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                      >
                        ◀
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
                      >
                        ▶
                      </button>
                    </>
                  )}
                </div>

                {/* Dots Indicator */}
                {selectedEvent.images.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {selectedEvent.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                          idx === currentImageIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                        }`}
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