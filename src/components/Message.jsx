import React from "react";

const MessageSection = () => {
  return (
    <section
      className="py-24 bg-gradient-to-r from-[#4287fe] to-[#ff7a1c] text-white"
      id="dean_s_message"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Dean's Message */}
        <div className="mb-8">
          <h2
            className="text-4xl font-extrabold tracking-[-1.5px] mb-8"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Message from Dean's Desk
          </h2>

          <div className="flex flex-wrap justify-between items-start">
            <div className="flex-1 pr-0 md:pr-8 relative">
              {/* Mobile image (inner) */}
              <div className="float-right ml-4 max-w-[45%] p-2 rounded-2xl md:hidden">
                <img
                  loading="lazy"
                  src="https://www.charusat.ac.in/assets/images/People/VijayChaudhary.webp"
                  alt="Dr. Vijaykumar Chaudhary"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <p className="text-base leading-relaxed mb-4 text-justify">
                Welcome to CSPIT, CHARUSAT! As Dean, I'm thrilled to lead our
                community of scholars, learners, and innovators. Together, let's
                embrace excellence, diversity, and collaboration. Students,
                seize every opportunity to grow and make a difference. Faculty,
                your dedication shapes futures. Staff, your efforts keep our
                institute thriving. Let's foster an inclusive environment where
                every voice matters. As we embark on this journey, let's uphold
                the values of integrity and empathy. I'm excited to witness our
                collective achievements.
              </p>

              <div className="text-base mt-4">
                <strong>Dr. Vijaykumar Chaudhary</strong>
                <br />
                <strong>Dean, FTE</strong>
              </div>
            </div>

            {/* Desktop image (outer) */}
            <div className="hidden md:block flex-none w-1/4 max-w-[200px] p-2">
              <img
                loading="lazy"
                src="https://www.charusat.ac.in/assets/images/People/VijayChaudhary.webp"
                alt="Dr. Vijaykumar Chaudhary"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        <hr className="border border-[#ddd] my-12" />

        {/* Principal's Message */}
        <div>
          <h2
            className="text-4xl font-extrabold tracking-[-1.5px] mb-8"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Message from Principal's Desk
          </h2>

          <div className="flex flex-wrap justify-between items-start">
            <div className="flex-1 pr-0 md:pr-8 relative">
              {/* Mobile image (inner) */}
              <div className="float-right ml-4 max-w-[45%] p-2 rounded-2xl md:hidden">
                <img
                  loading="lazy"
                  src="images/TKU.png"
                  alt="Dr. Trushit Upadhyaya"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <p className="text-base leading-relaxed mb-4 text-justify">
                Welcome to CSPIT, where we foster excellence and innovation in
                engineering education. To our students: Embrace opportunities,
                challenge yourself, and cultivate a passion for lifelong
                learning. Faculty: Your dedication molds future leaders;
                continue to inspire and innovate. Staff: Your commitment ensures
                our success; thank you for your invaluable contributions.
                Together, let's uphold integrity, excellence, and inclusivity.
                As Principal, I'm excited about the journey ahead. Let's
                collaborate, learn, and grow as we shape the future of
                engineering together.
              </p>

              <div className="text-base mt-4">
                <strong>Dr. Trushit Upadhyaya</strong>
                <br />
                <strong>Principal, CSPIT</strong>
              </div>
            </div>

            {/* Desktop image (outer) */}
            <div className="hidden md:block flex-none w-1/4 max-w-[200px] p-2">
              <img
                loading="lazy"
                src="images/TKU.png"
                alt="Dr. Trushit Upadhyaya"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
