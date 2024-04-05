import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [, setLoginMessage] = useState(' ');

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
        axios.post(`http://localhost:3000/Login`, { username, password })
            .then(res => {
                if(res.status === 201){
                    console.log("ALERT")
                    alert("invalid credentials")
                }
                else if (res.status === 200) {
                    console.log("WORKING") 
                    navigate('/info')
                }
            })
        .catch(err => {
    console.log(err)
})

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
                <div className="form-group button-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default Login;

