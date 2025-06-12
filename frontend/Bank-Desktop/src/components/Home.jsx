import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome Back!</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>

            <nav>
                <ul>
                    <li>Zelle</li>
                    <li>Request</li>
                    <li>Deposit</li>
                </ul>
            </nav>

            <h3>Account Balances</h3>
            <section>
                <div>
                    <h4>Checking's Account</h4>
                    <p>$3,444.00</p>
                </div>
            </section>

            <section>
                <div>
                    <h4>Saving's Account</h4>
                    <p>$20.00</p>
                </div>
            </section>

            <section>
                <div>
                    <h4>Recent Transactions</h4>
                    <ul>
                        <li>Starbucks: -$8.75</li>
                        <li>Chipotle: -$12.74</li>
                        <li>Zelle: +$10.00</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;