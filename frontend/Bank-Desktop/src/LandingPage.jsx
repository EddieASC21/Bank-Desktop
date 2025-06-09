import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome</h1>
                <p>Please login using your respective credentials</p>
                <form onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input type="text" required />
                    <label>Password:</label>
                    <input type="password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LandingPage;