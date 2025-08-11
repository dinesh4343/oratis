import React, { useState } from 'react';
 // Ensure this path is correct relative to your src directory.

import { Link } from 'react-scroll';
// --- Styling for the popup components ---
// In a real application, this would likely be in a separate CSS file.
const styles = `
  .app-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);  
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
  }

  .popup-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 12px;
    max-width: 800px;
    width: 90%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .popup-content video {
    width: 100%;
    display: block;
    border-radius: 8px;
  }

  .close-btn {
    position: absolute;
    top: -15px;
    right: -15px;
    background: white;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 24px;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
  }

  .close-btn:hover {
    transform: scale(1.1);
  }
`;

/**
 * Your Hero Component
 * It now accepts an `onDemoClick` prop to handle the button click.
 * @param {object} props
 * @param {function} props.onDemoClick - Function to call when the "Demo" button is clicked.
 */
const Hero = ({ onDemoClick }) => (
  <section
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem 1rem",
      textAlign: "center",
    }}
    className="hero-section"
  >
    <h1
      style={{
        fontSize: "2.5rem",
        color: "#03314b",
        fontWeight: 900,
        letterSpacing: "1.2px",
        marginBottom: "1rem",
      }}
    >
      Transform Text Into Lifelike Voice
    </h1>
    <p
      style={{
        fontSize: "1.4rem",
        maxWidth: "580px",
        margin: "0 auto 2.5rem",
        fontWeight: 500,
      }}
    >
      Experience the magic of Oratis — converting your words into natural and expressive speech for audiobooks, podcasts, e-learning, and accessibility.
    </p>
    <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center" }}>
      
          
          
<button
 
  style={{
    padding: "1rem 2.6rem",
    fontSize: "1.25rem",
    color: "#ffffff",
    background: "#014f86",
    border: "2px solid #014f86",
    borderRadius: "30px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = '#ffffff';  // corrected color
    e.currentTarget.style.color = '#014f86';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = '#014f86';
    e.currentTarget.style.color = '#ffffff';       // corrected color
  }}
>
  <Link
    to="TextToAudio"
    smooth={true}
    duration={100}
    style={{
      color: 'inherit',
      textDecoration: 'none',
      display: 'inline-block',
      width: '100%',
      height: '100%'
    }}
  >
    Try it free
  </Link>
</button>

   
        

         

      <button
        onClick={onDemoClick} // The click handler is now connected to the prop
        style={{
          padding: "1rem 2.6rem",
          fontSize: "1.25rem",
          color: "#014f86",
          background: "#ffffffff",
          border: "2px solid #014f86",
          borderRadius: "30px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 0.3s ease, color 0.3s ease"
        }}
         onMouseOver={(e) => {
            e.currentTarget.style.background = '#014f86';
            e.currentTarget.style.color = '#ffffff';
         }}
         onMouseOut={(e) => {
            e.currentTarget.style.background = '#ffffffff';
            e.currentTarget.style.color = '#014f86';
         }}
      >
        Demo
      </button>
    </div>
    <p style={{ marginTop: "3rem", fontSize: "1.1rem", maxWidth: "450px", fontWeight: 600 }}>
      Join thousands of creators who make their content speak with Oratis—accessible, engaging, and effortless.
    </p>
  </section>
);


/**
 * VideoPopup Component
 * This component is unchanged. It represents the modal that will display the video.
 * @param {object} props
 * @param {string} props.videoUrl - The URL of the video to play.
 * @param {function} props.onClose - Function to call to close the popup.
 */
const VideoPopup = ({ videoUrl, onClose }) => {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <video controls autoPlay  playsInline width="100%">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};


/**
 * App Component (The Common Parent)
 * This component holds the state and passes the necessary props
 * down to both the Hero component and the popup.
 */
export default function App() {
  // State to control the visibility of the video popup.
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // URL for the video. Replace this with your video file.
 const videoUrl = `${process.env.PUBLIC_URL}/TextToAudio.mp4`; 

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        {/* Your Hero component is rendered here, and we pass it the openPopup function. */}
        <Hero onDemoClick={openPopup} />

        {/* The VideoPopup component is rendered conditionally. */}
        {isPopupOpen && <VideoPopup videoUrl={videoUrl} onClose={closePopup} />}
      </div>
    </>
  );
}
