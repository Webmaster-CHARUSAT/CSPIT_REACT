import React, { useEffect, useState, useRef } from 'react';

const CommunitySlider = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Observe visibility of the container
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // 10% visibility is enough to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Check if the script is already loaded
    if (document.getElementById('genuin-sdk-script')) {
      setScriptLoaded(true);
      return;
    }

    // Create script element with proper attributes
    const script = document.createElement('script');
    script.id = 'genuin-sdk-script';
    script.src = 'https://media.begenuin.com/sdk/gen_sdk.min.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Handle success
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Genuin SDK loaded successfully');
      
      // Initialize immediately rather than with a delay
      if (typeof window.onGenuinReady !== 'function') {
        window.onGenuinReady = (genuin) => {
          try {
            genuin.initialize({
              embed_id: '6798a8070b873b64c979eef7',
              api_key: '4a1f34a0cb8c1cc32d237e2f0d57d372907af96fc5dd8bc8',
              // Add any additional options that might help with visibility
              autoInit: true,
              forceInit: true
            });
            console.log('Genuin initialized successfully');
          } catch (err) {
            console.error('Error in Genuin initialization:', err);
            setScriptError(true);
          }
        };
      }
    };
    
    // Handle loading errors
    script.onerror = (error) => {
      console.error('Error loading Genuin SDK script:', error);
      setScriptError(true);
    };
    
    // Add script to document head
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      if (window.onGenuinReady) {
        window.onGenuinReady = null;
      }
    };
  }, []);

  // Scroll to the section when it becomes visible
  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Scroll the element into view with smooth behavior
      containerRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className="py-16 bg-gray-100 overflow-hidden"
      id="community-section"
    >
      <div className="container mx-auto text-center mb-8">
        <h2 className="font-bold text-4xl">COMMUNITY</h2>
      </div>
      
      {scriptError && (
        <div className="text-center text-red-600 mb-4">
          Unable to load community content. Please refresh the page.
        </div>
      )}
      
      {/* Loading indicator */}
      {!scriptError && !isVisible && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      <div 
        id="gen-sdk" 
        className="gen-sdk-class mx-auto"
        style={{ 
          width: '100%',         // Changed from 100vw to prevent overflow
          maxWidth: '1400px',    // Add max-width for larger screens
          height: '600px',
          background: '#efefef',
          display: scriptError ? 'none' : 'block',
          position: 'relative',  // Ensure proper stacking context
          zIndex: 10            // Ensure it's above other elements
        }}
      ></div>
    </div>
  );
};

export default CommunitySlider;
