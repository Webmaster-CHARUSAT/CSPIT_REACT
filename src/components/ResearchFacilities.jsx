import React, { useState, useEffect } from 'react';

const ResearchFacilities = () => {
  const [instrumentData, setInstrumentData] = useState({});
  const [allInstruments, setAllInstruments] = useState([]);
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadDataFromJSON = async () => {
      try {
        const response = await fetch('/data/research-facilities.json');
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const json = await response.json();
        
        // Group instruments by department
        const groupedData = {};
        json.forEach((row) => {
          const department = row.department;
          const name = row.name;
          const specs = Array.isArray(row.spec) ? row.spec : [row.spec];
          const useCases = Array.isArray(row.use_cases) ? row.use_cases : [row.use_cases];
          const image = row.img.replace(/\\/g, "/");

          if (!groupedData[department]) {
            groupedData[department] = [];
          }

          groupedData[department].push({
            name,
            specs,
            useCases,
            image,
          });
        });

        setInstrumentData(groupedData);
        
        // Combine all instruments from all departments
        const allInstruments = Object.values(groupedData).flat();
        setAllInstruments(allInstruments);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };

    loadDataFromJSON();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const openInstrumentModal = (instrument) => {
    setSelectedInstrument(instrument);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInstrument(null);
  };

  return (
    <section className="box-border text-gray-800 bg-cover bg-center bg-fixed min-h-screen flex justify-center items-center mt-20" 
      style={{ backgroundImage: "url('./images/about-us-bg.webp')" }}>
      <div className="w-[95%] my-8 p-8 bg-[rgba(240,248,255,0.8)] shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm">
        <h1 className="text-center text-[#0056b3] mb-8 text-4xl font-bold relative">
          Research Facilities / Sophisticated Instruments
          <span className="block w-[100px] h-1 bg-[#ffc107] mx-auto mt-2"></span>
        </h1>
        
        <div className="flex justify-center">
          <div className="w-full md:w-10/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {allInstruments.map((instrument, index) => (
                <div key={index} className="h-full">
                  <div 
                    className="h-full rounded-xl overflow-hidden border-none bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl hover:shadow-blue-200 cursor-pointer"
                    // onClick={() => openInstrumentModal(instrument)}
                  >
                    <img 
                      src={instrument.image} 
                      alt={instrument.name}
                      className="h-[200px] w-full object-contain bg-gray-100 p-4 transition-all duration-300 hover:brightness-110"
                    />
                    <div className="p-4">
                      <h5 className="text-[#0056b3] font-semibold text-center">{instrument.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for instrument details - Fixed sizing and scrolling */}
      {showModal && selectedInstrument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-hidden">
          <div 
            className="bg-gradient-to-br from-white/85 to-white/95 rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] my-8 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the modal
          >
            <div className="bg-[#0056b3] text-white p-4 flex justify-between items-center rounded-t-2xl sticky top-0 z-10">
              <h5 className="text-xl font-semibold truncate pr-4">{selectedInstrument.name}</h5>
              <button 
                onClick={closeModal}
                className="text-white text-2xl font-bold hover:text-gray-200 focus:outline-none"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="text-center">
                <img 
                  src={selectedInstrument.image} 
                  alt={selectedInstrument.name}
                  className="w-[200px] h-auto mb-3 rounded mx-auto"
                />
              </div>
              
              <div>
                {selectedInstrument.specs && selectedInstrument.specs.length > 0 && selectedInstrument.specs[0] !== "" && (
                  <div className="mb-6">
                    <h6 className="text-[#0056b3] font-semibold mb-4">Specifications</h6>
                    <ul className="space-y-2">
                      {selectedInstrument.specs.map((spec, index) => (
                        <li 
                          key={index} 
                          className="bg-gray-100 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:translate-x-1.5"
                        >
                          <span className="text-green-600 mr-2"
                          style={{color:"#16a34a" }}>⚙️</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedInstrument.useCases && selectedInstrument.useCases.length > 0 && selectedInstrument.useCases[0] !== "" && (
                  <div>
                    <h6 className="text-[#0056b3] font-semibold mb-4">Use Cases</h6>
                    <ul className="space-y-2">
                      {selectedInstrument.useCases.map((useCase, index) => (
                        <li 
                          key={index} 
                          className="bg-gray-100 p-3 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:translate-x-1.5"
                        >
                          <span className="text-blue-500 mr-2">✓</span> {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {(!selectedInstrument.specs || selectedInstrument.specs.length === 0 || selectedInstrument.specs[0] === "") &&
                 (!selectedInstrument.useCases || selectedInstrument.useCases.length === 0 || selectedInstrument.useCases[0] === "") && (
                  <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-4 rounded-lg">
                    No additional details available for this instrument.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchFacilities;
