import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// Lightbox imports are commented out
// import Lightbox from 'lightbox-react';
// import 'lightbox-react/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, faEnvelope, faCalendarAlt, 
  faInfoCircle, faFilePdf 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/components/ClubDetails.css'; // Import your CSS file for styling

const ClubDetails = () => {
  const { clubId } = useParams();
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Lightbox state variables are commented out
  // const [lightboxOpen, setLightboxOpen] = useState(false);
  // const [lightboxIndex, setLightboxIndex] = useState(0);
  // const [lightboxImages, setLightboxImages] = useState([]);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const response = await fetch('/data/clubs.json');
        if (!response.ok) {
          throw new Error('Failed to fetch club data');
        }
        const jsonData = await response.json();

        // Find the matching club by ID
        const matchedClub = jsonData.find(
          (club) => club["Club ID"]?.toLowerCase() === clubId.toLowerCase()
        );

        if (!matchedClub) {
          throw new Error('Club not found!');
        }

        setClubData(processClubData(matchedClub));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching club data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchClubData();
  }, [clubId]);

  // Process club data from JSON format
  const processClubData = (data) => {
    // Basic club info
    const processedData = {
      id: data["Club ID"] || "",
      name: data["Club Name"] || "Club Name",
      logo: data["Logo"] || "",
      about: data["About"] || "About the club...",
      
      // Process faculty coordinators
      facultyCoordinators: (data["Faculty Coordinators"] || []).map(faculty => ({
        name: faculty.Name || "",
        position: faculty.Role || "",
        email: faculty.Email || "",
        phone: faculty.Phone || "",
        image: faculty.Image || "img/placeholder-profile.jpg"
      })),
      
      // Process student coordinators
      studentCoordinators: (data["Student Coordinators"] || []).map(coordinator => ({
        name: coordinator.Name || "",
        idNumber: coordinator.ID || "",
        position: coordinator.Position || ""
      })),
      
      // Process events
      events: (data["Events"] || []).map(event => ({
        name: event.Name || "Unnamed Event",
        date: event.Date || "Unknown Date",
        description: event.Description || "No description available",
        images: event.Images || ["img/placeholder-event.jpg"],
        report: event.Report || "",
        mainImage: event.Images?.[0] || "img/placeholder-event.jpg"
      })),
      
      // Process gallery images
      gallery: (data["Gallery"] || []).map(img => ({
        url: img,
        title: "Gallery Image"
      }))
    };
    
    return processedData;
  };

  // Lightbox open function is commented out
  // const openLightbox = (images, index) => {
  //   setLightboxImages(images);
  //   setLightboxIndex(index);
  //   setLightboxOpen(true);
  // };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link to="/#club-section" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back to Clubs
        </Link>
      </div>
    );
  }

  // Extract first sentence as tagline if possible
  let aboutText = clubData.about;
  let tagline = aboutText;
  const firstSentenceEnd = aboutText.indexOf(".");
  if (firstSentenceEnd > 0) {
    tagline = aboutText.substring(0, firstSentenceEnd + 1);
    aboutText = aboutText.substring(firstSentenceEnd + 1).trim();
  }

  return (
    <div className="container py-5">
      {/* Back Button */}
      <div className="d-flex justify-content-end align-items-center mb-4">
        <Link to="/#club-section" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back to Clubs
        </Link>
      </div>

      {/* Club Header */}
      <div className="club-header p-4 mb-5">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0" style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src={clubData.logo} 
              alt={`${clubData.name} Logo`} 
              className="club-logo" 
            />
          </div>
          <div className="col-md-9">
            <h1 className="display-4 fw-bold mb-2">{clubData.name}</h1>
            <p className="lead mb-3">{tagline}</p>
            <div className="d-flex flex-wrap mt-3" id="club-badges">
              {/* Badges would go here if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section mb-5">
        <h2 className="section-title">About the Club</h2>
        <p>{tagline}</p>
        <p>{aboutText}</p>
      </div>

      {/* Faculty Advisors Section */}
      {clubData.facultyCoordinators.length > 0 && (
        <>
          <h2 className="section-title">Faculty Advisors</h2>
          <div className="row mb-5">
            {clubData.facultyCoordinators.map((faculty, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="faculty-card bg-white p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img src={faculty.image} alt={faculty.name} className="faculty-img me-3" />
                    <div>
                      <h5 className="mb-1">{faculty.name}</h5>
                      <p className="text-muted mb-0">{faculty.position}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
                      <a href={`mailto:${faculty.email}`} className="text-decoration-none">{faculty.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Student Coordinators Section */}
      {clubData.studentCoordinators.length > 0 && (
        <>
          <h2 className="section-title">Student Coordinators</h2>
          <div className="row mb-5">
            {clubData.studentCoordinators.map((coordinator, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="coordinator-card bg-white p-4">
                  <div className="text-center mb-3">
                    <h5 className="mb-1">{coordinator.name}</h5>
                    <p className="text-muted mb-0">{coordinator.position}</p>
                    <p className="mb-0 small mt-2">{coordinator.idNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Events Section */}
      {clubData.events.length > 0 && (
        <>
          <h2 className="section-title">Recent Events</h2>
          <div className="row mb-5">
            {clubData.events.map((event, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="event-card bg-white">
                  <div className="event-img-container">
                    <img src={event.mainImage} alt={event.name} className="event-img" />
                    <div className="achievement-badge">{event.date}</div>
                  </div>
                  <div className="event-card-content">
                    <h4 className="event-title">{event.name}</h4>
                    <button 
                      className="btn btn-outline-primary mt-auto"
                      data-bs-toggle="modal"
                      data-bs-target={`#eventModal-${index}`}
                      onClick={() => document.getElementById(`eventModal-${index}`).classList.add('show')}
                    >
                      <FontAwesomeIcon icon={faInfoCircle} className="me-1" /> View Details
                    </button>
                  </div>
                </div>

                {/* Event Modal */}
                <div className="modal fade" id={`eventModal-${index}`} tabIndex="-1" aria-labelledby={`eventModalLabel-${index}`} aria-hidden="true"
                style={{ maxHeight: "100vh", overflowY: "auto" }}>
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`eventModalLabel-${index}`}>{event.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => document.getElementById(`eventModal-${index}`).classList.remove('show')}></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-4">
                          <img src={event.mainImage} alt={event.name} className="img-fluid rounded mb-3 w-100" style={{maxHeight: '300px', objectFit: 'cover'}} />
                          <div className="d-flex align-items-center mb-3">
                            <span className="badge bg-primary me-2">
                              <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> {event.date}
                            </span>
                          </div>
                          <p>{event.description}</p>
                        </div>
                        {event.images && event.images.length > 0 && (
                          <>
                            <h5>Event Gallery</h5>
                            <div className="row">
                              {event.images.map((img, imgIndex) => (
                                <div className="col-md-4 col-6 mb-3" key={imgIndex}>
                                  {/* Lightbox functionality is commented out */}
                                  {/* <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    openLightbox(event.images, imgIndex);
                                  }}> */}
                                    <img src={img} alt={`${event.name} image ${imgIndex + 1}`} className="event-gallery-img w-100" />
                                  {/* </a> */}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {event.report && (
                          <a href={event.report} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                            <FontAwesomeIcon icon={faFilePdf} /> View Report
                          </a>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => document.getElementById(`eventModal-${index}`).classList.remove('show')}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Gallery Section */}
      {clubData.gallery.length > 0 && (
        <>
          <h2 className="section-title">Events Gallery</h2>
          <div className="row mb-5">
            {clubData.gallery.map((image, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                {/* Lightbox functionality is commented out */}
                {/* <a href="#" onClick={(e) => {
                  e.preventDefault();
                  openLightbox(clubData.gallery.map(img => img.url), index);
                }}> */}
                  <img src={image.url} alt={image.title} className="event-gallery-img w-100" />
                {/* </a> */}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Lightbox component is commented out */}
      {/* {lightboxOpen && (
        <Lightbox
          mainSrc={lightboxImages[lightboxIndex]}
          nextSrc={lightboxImages[(lightboxIndex + 1) % lightboxImages.length]}
          prevSrc={lightboxImages[(lightboxIndex + lightboxImages.length - 1) % lightboxImages.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + lightboxImages.length - 1) % lightboxImages.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % lightboxImages.length)}
        />
      )} */}
    </div>
  );
};

export default ClubDetails;