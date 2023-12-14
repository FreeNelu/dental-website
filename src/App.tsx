import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import TreatmentsPage from './Components/TreatmentsPage/TreatmentsPage';

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
      <TreatmentsPage />
    </Router>
  );
}

export default App;
