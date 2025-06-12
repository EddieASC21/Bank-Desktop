import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Home from './Home.jsx';
import CreateAccountPage from './CreateAccountPage.jsx';
import ForgetPassword from './ForgetPassword.jsx'
import ForgetUsername from './ForgetUsername.jsx'
import './styles/App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        <Route path="/forgetUsername" element={<ForgetUsername />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;