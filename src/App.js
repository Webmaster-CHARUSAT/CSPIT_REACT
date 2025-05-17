// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.css';
// import ImageSlider from './components/ImageSlider';
// import NavBar from './components/Navbar';
// import AboutUs from './components/AboutUs';
// import Programs from './components/Programs';
// import HonorsMinorProgramsSection from './components/hons';
// import IndustryCoursesSection from './components/IndustryCourses';
// import ProfessionalSocietiesSection from './components/ProfessionalSociety';
// import StudentClubsSection from './components/StudentClub';
// import { Route,Router } from 'react-router-dom';
// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: 'ease-in-out'
//     });
//   }, []);

//   return (
//     <div className="App">
//       <NavBar />
//       <div className="pt-10 md:pt-[100px]">
//         <ImageSlider />
//       </div>
//       <AboutUs />
//       <Programs />
//       <HonorsMinorProgramsSection />
//       <IndustryCoursesSection />
//       <br />

//       <ProfessionalSocietiesSection />
//       <br />
//       <StudentClubsSection />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import ImageSlider from './components/ImageSlider';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import HonorsMinorProgramsSection from './components/hons';
import IndustryCoursesSection from './components/IndustryCourses';
import ProfessionalSocietiesSection from './components/ProfessionalSociety';
import StudentClubsSection from './components/StudentClub';
import ClubDetails from './components/ClubDetails';
import StudentProjectsSection from './components/StudentProjects';
import RecruitersSection from './components/Recruiters';
import ScalarsSection from './components/Scalar';
import MOUSection from './components/MOU';
import ResearchThrustAreas from './components/Thrust';
import TestimonialsSection from './components/Testimonials';
import MessageSection from './components/Message';
import GallerySection from './components/Galley';
import Footer from './components/Footer';
import CommunitySlider from './components/Community';
import AboutUsSection from './components/AboutUsSection';
import ResearchProjects from './components/ResearchProjects';
import ResearchFacilities from './components/ResearchFacilities';
import FacultySection from './components/Faculty';
import FacultyDetails from './components/FacultyDetail';
function HomePage() {
  return (
    <>
      <div className="pt-10 md:pt-[100px]">
        <ImageSlider />
      </div>
      <AboutUs />
      <Programs />
      <HonorsMinorProgramsSection />
      <IndustryCoursesSection />
      <br />
      <ProfessionalSocietiesSection />
      <br />
      <StudentClubsSection />
      <br/>
      <StudentProjectsSection />
      <RecruitersSection />
      <ScalarsSection />
      <br />
      <MOUSection />
      <ResearchThrustAreas />
      <TestimonialsSection />
      <br/>
      <MessageSection />
      <GallerySection />
      <CommunitySlider />
      
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (

      <div className="App">
        <div className='pt-20'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/club/:clubId" element={<ClubDetails />} />
          <Route path="/about" element={<AboutUsSection/>} />
          <Route path="/research-project" element={<ResearchProjects />} />
          <Route path="/research-facilities" element={<ResearchFacilities />} />
          <Route path='/faculty' element={<FacultySection />} />
          <Route path="/faculty/:name" element={<FacultyDetails />} />
        </Routes>
        </div>
        <Footer />
      </div>

  );
}

export default App;
