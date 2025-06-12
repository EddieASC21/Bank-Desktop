import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ForgetUsername.css';

function ForgetUsername() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        securityQuestion: '',
        securityAnswer: '',
    });

    const [retrievedUsername, setRetrievedUsername] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = (e) => {
        e.preventDefault();

        const { email, securityQuestion, securityAnswer } = formData;

        if (email && securityQuestion && securityAnswer.trim() !== '') {
            setRetrievedUsername('edward123');
            setStep(2);
        } else {
            alert('Please complete all required fields.');
        }
    };

    const handleBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className="forget-username-container">
            <div className="form-box">
                <h1>Forgot Username</h1>
                <form onSubmit={handleNext}>
                    {step === 1 && (
                        <>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label>Security Question</label>
                            <select
                                name="securityQuestion"
                                value={formData.securityQuestion}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Security Question</option>
                                <option value="pet">What was your first pet’s name?</option>
                                <option value="school">What elementary school did you attend?</option>
                                <option value="maiden">What is your mother's maiden name?</option>
                            </select>

                            <input
                                name="securityAnswer"
                                placeholder="Answer"
                                value={formData.securityAnswer}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">Next</button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <p className="username-display">
                                Your username is: <strong>{retrievedUsername}</strong>
                            </p>
                            <button type="button" onClick={handleBackToLogin}>
                                Back to Login
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ForgetUsername;