import React from "react";


const Hero = () => (
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
          background: "#014f86",
          border: "none",
          borderRadius: "30px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 0.3s ease"
        }}

        
        onMouseEnter={e => (e.currentTarget.style.background = '#0366d6')}
        onMouseLeave={e => (e.currentTarget.style.background = '#014f86')}
      >
        Try It Free
      </button>

           <button
        style={{
          padding: "1rem 2.6rem",
          fontSize: "1.25rem",
          color: "#014f86",
          background: "#000000ff",
          border: "none",
          borderRadius: "30px",
          fontWeight: 700,
          cursor: "pointer",
          transition: "background 0.3s ease"
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

export default Hero;
