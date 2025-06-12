import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ForgetPassword.css';

function ForgetPassword() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        securityQuestion: '',
        securityAnswer: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (
            formData.email.trim() &&
            formData.securityQuestion &&
            formData.securityAnswer.trim()
        ) {
            setStep(2);
        } else {
            alert("Please complete all fields.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.newPassword &&
            formData.confirmPassword &&
            formData.newPassword === formData.confirmPassword
        ) {
            alert("Password updated successfully!");
            navigate("/");
        } else {
            alert("Passwords do not match.");
        }
    };

    return (
        <div className="forget-password-container">
            <div className="form-box">
                <h1>Forgot Password</h1>
                <form onSubmit={step === 1 ? handleNext : handleSubmit}>
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
                            <label>New Password</label>
                            <div className="password-input-container">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {formData.newPassword && (
                                    <input
                                        type="checkbox"
                                        className="show-password-checkbox"
                                        checked={showNewPassword}
                                        onChange={() => setShowNewPassword(!showNewPassword)}
                                        aria-label="Show new password"
                                    />
                                )}
                            </div>

                            <label>Confirm New Password</label>
                            <div className="password-input-container">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                {formData.confirmPassword && (
                                    <input
                                        type="checkbox"
                                        className="show-password-checkbox"
                                        checked={showConfirmPassword}
                                        onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                                        aria-label="Show confirm password"
                                    />
                                )}
                            </div>

                            <button type="submit">Update Password</button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;