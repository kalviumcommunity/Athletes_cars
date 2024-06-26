import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const [loginStatus, setLoginStatus] = useState(false); 

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setLoginMessage("Password should be more than 5 characters");
            return;
        }
        try {
            const res = await axios.post(`https://athletes-cars-22.onrender.com/Login`, { username, password });
            if (res.status === 200) {
                console.log("WORKING");
                navigate('/info');
                sessionStorage.setItem('username', username);
                setLoginStatus(true);
                sessionStorage.setItem('login', true); 
            } else {
                console.log("ALERT");
                setLoginMessage("Invalid credentials");
            }
        } catch (err) {
            console.log(err);
            setLoginMessage("Error occurred while logging in");
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-form-container">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="toggle-password" onClick={togglePasswordVisibility}>
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>
                    {loginMessage && <p className="login-message">{loginMessage}</p>}
                    <div className="form-group button-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
