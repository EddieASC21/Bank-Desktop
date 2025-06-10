import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CreateAccount.css';

function CreateAccountPage() {
    const navigate = useNavigate();

    const handleAccountCreated = (e) => {
        e.preventDefault(); // prevent form submission reload
        navigate("/home");
    };

    return (
        <div className="create-account-container">
            <div className="create-account-box">
                <form onSubmit={handleAccountCreated}>
                    <h1>Create an Account</h1>
                    <p>Please fill in the following with your correct information</p>

                    <label>First Name</label>
                    <input type="text" required />

                    <label>Middle Initial</label>
                    <input type="text" />

                    <label>Last Name</label>
                    <input type="text" required />

                    <label>Date of Birth</label>
                    <input type="date" required />

                    <label>Phone Number</label>
                    <input type="tel" required />

                    <label>Account Type</label>
                    <select required>
                        <option value="">Select</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                    </select>

                    <label>Email Address</label>
                    <input type="email" required />

                    <label>Password</label>
                    <input type="password" required />

                    <label>Confirm Password</label>
                    <input type="password" required />

                    <label>Security Question</label>
                    <select required>
                        <option value="">Select one</option>
                        <option value="pet">What was your first pet’s name?</option>
                        <option value="school">What elementary school did you attend?</option>
                        <option value="maiden">What is your mother's maiden name?</option>
                    </select>

                    <label>Answer</label>
                    <input type="text" required />

                    <label className="checkbox">
                        <input type="checkbox" required />
                        I agree to the Terms and Privacy Policy
                    </label>

                    <button type="submit">Create Account</button>

                    <p className="login-redirect">
                        Already have an account? <a href="/">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default CreateAccountPage;