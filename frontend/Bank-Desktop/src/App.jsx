import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import CreateAccountPage from './components/CreateAccountPage.jsx';
import ForgetPassword from './components/ForgetPassword.jsx'
import ForgetUsername from './components/ForgetUsername.jsx'
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