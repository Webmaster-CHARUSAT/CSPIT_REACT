import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events data from JSON file
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => {
        // Get only first 4 events for home page
        setEventsData(data.slice(0, 4));
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
      className="project-item rounded-xl overflow-hidden shadow-md bg-white flex flex-col cursor-pointer border-2 p-1 border-white w-full max-w-[280px]"
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
      <div className="p-2 text-center relative z-[5]">
        <p className="text-gray-800 font-medium project-title">
          {event.shortTitle}
        </p>
      </div>
      <div className="hover-text">VIEW MORE</div>
    </div>
  );

  if (loading) {
    return (
      <section
        className="section-container py-12"
        style={{ background: "var(--bg-blue)" }}
        id="events"
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
            EVENTS
          </h2>
          <div className="text-center text-white">Loading events...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Minimal custom CSS for specific hover effects */}
      <style jsx="true">{`
        .project-item {
          transition: transform 0.4s ease, border 0.3s ease, box-shadow 0.3s ease;
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
        style={{ background: "var(--bg-blue)" }}
        id="events"
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
            EVENTS
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
            {eventsData.map((event, idx) => (
              <EventCard key={event.id || idx} event={event} />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Link to="/events" target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                VIEW ALL EVENTS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Popup - Option 3: Minimalist */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}>
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={closeEventPopup}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-4xl font-light leading-none transition z-10"
            >
              ×
            </button>

            <div className="p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                  <span className="text-xl">📅</span>
                  <span className="text-blue-700 font-semibold">{selectedEvent.date}</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {selectedEvent.title}
                </h2>
              </div>

              {/* Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  loading="lazy"
                  src={selectedEvent.images[currentImageIndex]}
                  alt={selectedEvent.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Thumbnails */}
              {selectedEvent.images.length > 1 && (
                <div className="flex justify-center gap-3 mb-8">
                  {selectedEvent.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`rounded-lg overflow-hidden transition-all ${
                        idx === currentImageIndex
                          ? "ring-4 ring-blue-500 scale-110"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        loading="lazy"
                        alt={`Thumb ${idx + 1}`}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsSection;