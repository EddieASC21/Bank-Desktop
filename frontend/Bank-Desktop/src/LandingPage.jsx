import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        navigate("/createAccount");
    };

    const handleForgetUsername = (e) => {
        e.preventDefault();
        navigate("/forgetUsername");
    };

    const handleForgetPassword = (e) => {
        e.preventDefault();
        navigate("/forgetPassword");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome!</h1>
                <p>Please login using your respective credentials</p>
                <form onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input type="text" required />
                    <label>Password:</label>
                    <input type="password" required />
                    <button type="submit">Login</button>
                </form>
                <div className="create-account-link">
                    <button onClick={handleCreateAccount}>Create An Account</button>
                </div>
                <div className="create-account-link">
                    <button onClick={handleForgetUsername}>Forget Username</button>
                <div className="create-account-link">
                    <button onClick={handleForgetPassword}>Forget Password</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;