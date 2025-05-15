import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import ImageSlider from './components/ImageSlider';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import HonorsMinorProgramsSection from './components/hons';

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
      <NavBar />
      <div className="pt-10 md:pt-[100px]">
        <ImageSlider />
      </div>
      <AboutUs />
      <Programs />
      <HonorsMinorProgramsSection />
    </div>
  );
}

export default App;