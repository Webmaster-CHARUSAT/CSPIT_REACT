import React from 'react';
import '../styles/components/AboutUs.css';
// ...rest of your code...
const AboutSection = () => {
    <style>
      {`
@media (max-width: 768px) {
  .section-intro {
    padding: 8% 4%;
    background-position: 50%;
  }
  .section-intro__cont {
    width: 80%;
    padding: 1rem;
    border-radius: 10px;
  }
}

.section-intro__cont p {
  text-align: justify !important;
}
`}
    </style>
  return (
    <section 
      className="section-intro py-[4%] px-[8%] w-[100vw] bg-cover"
      style={{ backgroundImage: "url('/images/about-us-bg.webp')" }}
    >
      <div className="section-intro__cont w-[60%] p-[3rem] bg-[#ffffffa7] rounded-[40px] backdrop-blur-[30px] font-light md:w-[60%] md:p-[1rem] md:rounded-[10px]">
        <h1 
          id="about-us" 
          className="text-center font-semibold tracking-[-1.5px] text-[clamp(1.5rem,1.2vw+0.96rem,3.6rem)] mb-8"
        >
          <span>Welcome to</span> <br />
          <span className="highlight font-semibold tracking-[-1.5px] bg-gradient-to-r from-[#4287fe] to-[#ff7a1c] bg-clip-text text-transparent">
            Chandubhai S. Patel Institue of Technology (CSPIT)
          </span>
        </h1>
        <p className="!text-justify text-large leading-[1.4] text-[large]">
          <span className="font-bold">CSPIT</span> is the first institute established in year 2000
          at Education Campus, Changa (now CHARUSAT). The institute is managed
          through a think tank of academician, scientists, engineers and
          professionals from all parts of the world. Started with 240 seats with
          four Bachelor Degree Engineering Programs in the year 2000, the
          institute now has total intake of 600 seats in 8 programs of Bachelor
          Degree, 63 seats of Post Graduate Degree and a Doctor of Philosophy
          (Ph. D.) programme.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
