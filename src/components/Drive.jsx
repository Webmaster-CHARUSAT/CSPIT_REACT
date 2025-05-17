import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFolder, 
  faFilePdf, 
  faFileImage, 
  faFileVideo, 
  faFileAlt 
} from '@fortawesome/free-solid-svg-icons';

const DriveContentViewer = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // API key for Google Drive API
  const apiKey = "AIzaSyAmJUAgBJRLq5dMk07vkaJr-fFPcVSb6Pc";
  
  // Get URL parameters
  const getURLParameter = (name) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(name);
  };
  
  // Get folder ID from URL or use default
  const getFolderIdFromURL = () => {
    return getURLParameter("folderId") || "1CrY0oeDZrnVZRuBwtTIp3MVIs9EoXCl2"; // Default folder
  };
  
  // Get heading from URL or use default
  const getHeadingFromURL = () => {
    return getURLParameter("heading") || "SYLLABUS"; // Default heading
  };
  
  // Update URL parameters without page reload
  const updateURLParameters = (folderId, heading) => {
    navigate({
      pathname: location.pathname,
      search: `?folderId=${folderId}&heading=${heading}`
    }, { replace: false });
  };
  
  // Fetch files from Google Drive
  const fetchFiles = async (folderId) => {
    setLoading(true);
    try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch files: ${response.statusText}`);
      }
      
      const data = await response.json();
      setFiles(data.files || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("Error loading files. Please try again later.");
      setFiles([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle folder click
  const openFolder = (folderId) => {
    const heading = getHeadingFromURL();
    updateURLParameters(folderId, heading);
    fetchFiles(folderId);
  };
  
  // Initial load and when URL changes
  useEffect(() => {
    const folderId = getFolderIdFromURL();
    fetchFiles(folderId);
    
    // Set document title
    document.title = getHeadingFromURL();
    
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const folderId = getFolderIdFromURL();
      fetchFiles(folderId);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.search]);
  
  // Get file icon based on MIME type
  const getFileIcon = (mimeType) => {
    if (mimeType === "application/vnd.google-apps.folder") {
      return <FontAwesomeIcon icon={faFolder} className="text-[#f39c12]" />;
    } else if (mimeType === "application/pdf") {
      return <FontAwesomeIcon icon={faFilePdf} className="text-[#ee1c0d]" />;
    } else if (mimeType === "image/jpeg" || mimeType === "image/png") {
      return <FontAwesomeIcon icon={faFileImage} className="text-[#ee1c0d]" />;
    } else if (mimeType === "video/mp4") {
      return <FontAwesomeIcon icon={faFileVideo} className="text-[#ee1c0d]" />;
    } else {
      return <FontAwesomeIcon icon={faFileAlt} className="text-[#ee1c0d]" />;
    }
  };
  
  return (
    <section className="bg-[#0262c9] text-white mt-24">
      {/* Header */}
      <div className="bg-[#0056b3] text-white py-6 px-10 flex justify-center items-center shadow-md relative">
        <h2 className="text-4xl font-bold text-center tracking-wider uppercase">
          {getHeadingFromURL()}
        </h2>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#e1e1e1] rounded-t-3xl shadow-[0_-4px_16px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {loading ? (
            <div className="col-span-full text-center text-gray-700 text-xl">
              Loading files...
            </div>
          ) : error ? (
            <div className="col-span-full text-center text-red-600 text-xl">
              {error}
            </div>
          ) : files.length === 0 ? (
            <div className="col-span-full text-center text-gray-700 text-xl">
              No files found in this folder.
            </div>
          ) : (
            files.map((file) => (
              <div key={file.id}>
                {file.mimeType === "application/vnd.google-apps.folder" ? (
                  <button
                    onClick={() => openFolder(file.id)}
                    className="w-full bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl flex flex-col items-center transition-all duration-300 hover:-translate-y-2.5 cursor-pointer"
                  >
                    <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                      {getFileIcon(file.mimeType)}
                    </div>
                    <h5 className="text-lg font-medium text-center break-words w-full">
                      {file.name}
                    </h5>
                  </button>
                ) : (
                  <a
                    href={`https://drive.google.com/file/d/${file.id}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl flex flex-col items-center transition-all duration-300 hover:-translate-y-2.5 cursor-pointer"
                  >
                    <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">
                      {getFileIcon(file.mimeType)}
                    </div>
                    <h5 className="text-lg font-medium text-center break-words w-full">
                      {file.name}
                    </h5>
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DriveContentViewer;