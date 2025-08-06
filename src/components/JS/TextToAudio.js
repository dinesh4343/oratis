import React, { useState, useEffect } from 'react';



// Main application component for the Text-to-Speech tool.
export default function TextToAudio() {
  // State to hold the text from the textarea.
  const [text, setText] = useState('');
  // State to track if the speech is currently playing.
  const [isSpeaking, setIsSpeaking] = useState(false);
  // State to store the preferred speech synthesis voice.
  const [preferredVoice, setPreferredVoice] = useState(null);

  /**
   * useEffect hook to find and set a suitable English voice.
   */
  useEffect(() => {
    const getVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;
      const googleVoice = voices.find(v => v.name === 'Google US English');
      const usVoice = voices.find(v => v.lang === 'en-US');
      setPreferredVoice(googleVoice || usVoice);
    };
    getVoices();
    // The 'voiceschanged' event is crucial as voices load asynchronously.
    window.speechSynthesis.onvoiceschanged = getVoices;
  }, []);

  /**
   * useEffect hook for cleaning up speech synthesis on unmount.
   */
  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  /**
   * Handles the primary action of toggling speech on and off.
   */
  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      if (!text.trim() || !preferredVoice) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = preferredVoice;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- Inline CSS Style Objects ---

  const styles = {
    appContainer: {
     
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '1rem',
    },
    card: {
      border: "5px solid #03314b",
      width: '100%',
      maxWidth: '45rem',
      padding: '2rem',
     
      borderRadius: '5rem',
      boxShadow: '0 55px 50px -12px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    header: {
      textAlign: 'center',
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      
    },
    subtitle: {
      
      marginTop: '0.5rem',
    },
    textarea: {
      width: '100%',
      padding: '2rem',
      color: '#1e293b',
    
      border: '2px solid #1e293b',
      borderRadius: '1rem',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      boxSizing: 'border-box',
    },
    controlSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '1px solid #e2e8f0',
    },
    buttonBase: {
      position: 'relative',
      width: '5rem',
      height: '5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '9999px',
      color: 'white',
      cursor: 'pointer',
      border: 'none',
      transition: 'background-color 0.3s, transform 0.1s',
    },
    buttonNotSpeaking: {
      backgroundColor: '#4f46e5', // indigo-600
    },
    buttonSpeaking: {
      backgroundColor: '#dc2626', // red-600
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    warningMessage: {
      textAlign: 'center',
      color: '#ca8a04', // amber-600
      fontSize: '0.875rem',
      padding: '0.5rem',
      backgroundColor: '#fefce8', // amber-50
      borderRadius: '0.375rem',
    },
  };

  // Combine button styles based on component state
  const isDisabled = !preferredVoice || !text.trim();
  const buttonStyle = {
    ...styles.buttonBase,
    ...(isSpeaking ? styles.buttonSpeaking : styles.buttonNotSpeaking),
    ...(isDisabled ? styles.buttonDisabled : {}),
  };

  return (
    <div style={styles.appContainer} className="text-to-audio">
      <div style={styles.card}>
        {/* Header Section */}
        <div style={styles.header}>
            <h1 style={styles.title}>Oratis</h1>
            <p style={styles.subtitle}>Your professional text-to-speech assistant.</p>
        </div>
        
        {/* Text Input Area */}
        <textarea
          style={styles.textarea}
          placeholder="Enter text to synthesize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
        />
        
        {/* Main TTS Control Button Section */}
        <div style={styles.controlSection}>
          <button
            style={buttonStyle}
            onClick={handleToggleSpeech}
            disabled={isDisabled}
            aria-label={isSpeaking ? 'Stop speaking' : 'Start speaking'}
          >
            {isSpeaking ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/><path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/></svg>
            )}
          </button>
        </div>

        {/* Warning Message for TTS voice */}
        {!preferredVoice && (
          <p style={styles.warningMessage}>
            A high-quality English voice is not available in your browser. Functionality may be limited.
          </p>
        )}
      </div>
    </div>
  );
}
