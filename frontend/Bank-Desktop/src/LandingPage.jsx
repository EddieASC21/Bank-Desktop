import { useNavigate } from 'react-router-dom';

function LandingPage(){
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        navigate("/home");
    };
    return(
        <div>
            <h1>Welcome</h1>
            <p>Please login using your respective credentials</p>
            <form onSubmit={handleLogin}>
                <label>Username:</label><br/>
                <input type="text" required/><br/>
                <label>Password:</label><br/>
                <input type="password" required/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LandingPage