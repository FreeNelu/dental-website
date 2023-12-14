import React from 'react';
import logo from './logo.svg';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
