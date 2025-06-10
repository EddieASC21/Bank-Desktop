import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CreateAccount.css';

function CreateAccountPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        middleInitial: '',
        lastName: '',
        dob: '',
        phone: '',
        email: '',
        accountType: '',
        initialDepositChecking: '',
        initialDepositSavings: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateStep = () => {
        if (step === 1) {
            return (
                formData.firstName.trim() &&
                formData.lastName.trim() &&
                formData.dob &&
                formData.phone.trim() &&
                formData.email.trim()
            );
        }

        if (step === 2) {
            const hasValidDeposits =
                (formData.accountType === 'checking' && formData.initialDepositChecking) ||
                (formData.accountType === 'savings' && formData.initialDepositSavings) ||
                (formData.accountType === 'both' &&
                    formData.initialDepositChecking &&
                    formData.initialDepositSavings);

            return (
                formData.accountType &&
                hasValidDeposits &&
                formData.password &&
                formData.confirmPassword &&
                formData.password === formData.confirmPassword
            );
        }

        if (step === 3) {
            return (
                formData.securityQuestion &&
                formData.securityAnswer &&
                formData.agreed
            );
        }

        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prev) => prev + 1);
        } else {
            alert("Please fill in all required fields correctly.");
        }
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account Created Successfully!");
        navigate("/home");
    };

    return (
        <div className="create-account-container">
            <h2>Create Your Bank Account</h2>
            <div className="step-indicator">Step {step} of 3</div>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="form-step">
                        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                        <input name="middleInitial" placeholder="Middle Initial" value={formData.middleInitial} onChange={handleChange} />
                        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        <input name="dob" type="date" value={formData.dob} onChange={handleChange} required />
                        <input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} required />
                        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                )}

                {step === 2 && (
                    <div className="form-step">
                        <select name="accountType" value={formData.accountType} onChange={handleChange} required>
                            <option value="">Select Account Type</option>
                            <option value="checking">Checking</option>
                            <option value="savings">Savings</option>
                            <option value="both">Both</option>
                        </select>

                        {formData.accountType === 'checking' && (
                            <input
                                type="number"
                                name="initialDepositChecking"
                                placeholder="Initial Deposit for Checking"
                                value={formData.initialDepositChecking}
                                onChange={handleChange}
                                required
                            />
                        )}

                        {formData.accountType === 'savings' && (
                            <input
                                type="number"
                                name="initialDepositSavings"
                                placeholder="Initial Deposit for Savings"
                                value={formData.initialDepositSavings}
                                onChange={handleChange}
                                required
                            />
                        )}

                        {formData.accountType === 'both' && (
                            <>
                                <input
                                    type="number"
                                    name="initialDepositChecking"
                                    placeholder="Initial Deposit for Checking"
                                    value={formData.initialDepositChecking}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="number"
                                    name="initialDepositSavings"
                                    placeholder="Initial Deposit for Savings"
                                    value={formData.initialDepositSavings}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}

                        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                )}

                {step === 3 && (
                    <div className="form-step">
                        <select name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} required>
                            <option value="">Select a Security Question</option>
                            <option value="pet">What was your first pet’s name?</option>
                            <option value="school">What elementary school did you attend?</option>
                            <option value="maiden">What is your mother's maiden name?</option>
                        </select>
                        <input name="securityAnswer" placeholder="Answer" value={formData.securityAnswer} onChange={handleChange} required />
                        <div className="checkbox-row">
                            <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} required />
                            <label htmlFor="agreed">I agree to the Terms and Privacy Policy</label>
                        </div>
                    </div>
                )}

                <div className="button-row">
                    {step > 1 && <button type="button" onClick={prevStep}>Back</button>}
                    {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
                    {step === 3 && <button type="submit">Create Account</button>}
                </div>
            </form>
        </div>
    );
}

export default CreateAccountPage;