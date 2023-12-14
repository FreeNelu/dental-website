import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const handleScroll = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy({
      top: pageHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <LandingPage handleScroll={handleScroll} />
      <div style={{ height: "100vh", background: '#e5f0f9' }}>
        Content below LandingPage
      </div>
    </Router>
  );
}

export default App;
