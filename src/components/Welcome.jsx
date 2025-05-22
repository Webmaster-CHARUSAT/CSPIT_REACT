import React from 'react';

const AboutSection = () => {
  return (
    <>
      {/* Custom CSS for specific styling */}
      <style jsx>{`
        .section-intro {
          padding: 4% 8%;
          background-image: url('./images/about-us-bg.webp');
          background-size: cover;
          background-position: center;
        }

        .section-intro__cont {
          width: 60%;
          padding: 3rem;
          background-color: #ffffffa7;
          border-radius: 40px;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          font-weight: 300;
          font-size: clamp(0.875rem, 0.7vw + 0.56rem, 2.1rem);
        }

        .section-intro__cont p {
          font-size: large;
          line-height: 1.4;
          text-align: justify !important;
        }

        .section-intro__cont h1 {
          font-weight: 600;
          letter-spacing: -1.5px;
          font-size: clamp(1.5rem, 1.2vw + 0.96rem, 3.6rem);
          margin-bottom: 2rem;
          text-align: center;
        }

        .section-intro__cont .highlight {
          font-weight: 600;
          letter-spacing: -1.5px;
          background-image: linear-gradient(120deg, #4287fe, #ff7a1c);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        @media (max-width: 768px) {
          .section-intro {
            padding: 8% 4%;
            background-position: 50%;
          }
          .section-intro__cont {
            width: 90%;
            padding: 1rem;
            border-radius: 10px;
          }
        }
      `}</style>

      <section className="section-intro"
      style={{ fontFamily: 'Roboto, sans-serif' }}>
        <div className="section-intro__cont">
          <h1 id="about-us">
            <span>Welcome to</span> <br />
            <span className="highlight">
              Chandubhai S. Patel Institue of Technology (CSPIT)
            </span>
          </h1>
          <p>
            <span style={{ fontWeight: 'bold' }}>CSPIT</span> is the first institute established in year 2000
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
    </>
  );
};

export default AboutSection;