

function LandingPage(){
    return(
        <div>
            <h1>Welcome</h1>
            <p>Please login using your respective credentials</p>
            <div>
                <label>Username:</label><br/>
                <input type="text" required/><br/>
                <label>Password:</label><br/>
                <input type="text" required/><br/>
                <button>Login</button>
            </div>
        </div>
    );
}

export default LandingPage