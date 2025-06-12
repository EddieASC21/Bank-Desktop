import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
                    <input type="text" placeholder="" required />

                    <label>Password:</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {password && (
                            <input
                                type="checkbox"
                                className="show-password-checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                aria-label="Show password"
                            />
                        )}
                    </div>

                    <button type="submit">Login</button>
                </form>

                <div className="secondary-button-group">
                    <button onClick={handleCreateAccount}>Create An Account</button>
                </div>

                <div className="forgot-buttons">
                    <button onClick={handleForgetUsername}>Forget Username</button>
                    <button onClick={handleForgetPassword}>Forget Password</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;