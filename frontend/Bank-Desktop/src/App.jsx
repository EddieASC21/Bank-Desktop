import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Home from './Home.jsx';
import CreateAccountPage from './CreateAccountPage.jsx';
import './styles/App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;