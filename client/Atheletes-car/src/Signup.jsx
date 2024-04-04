import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Signup.css';
import axios from 'axios';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [, setSignupError] = useState(' ');
    
    const navigate = useNavigate();
    
  const handleSubmit = async(event) => {
    event.preventDefault(); 
    
    try {
        if (password.length < 6) {
          setSignupError("Password should be more than 5 characters");
          return;
        }
  
        const response = await axios.post(`https://server-folder-ftte.onrender.com/Signup`, { username, password });
        if (response.status === 200) {
          sessionStorage.setItem('login', true);
          sessionStorage.setItem('signupSuccess', 'Signup successful'); 
          navigate("/");
        } else {
          setSignupError('Signup failed');
        }
      } catch (err) {
        console.error(err);
        setSignupError('An error occurred during the signup');
      }
    window.location.href = '/info'; 
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <h1>Signup Page</h1>
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
            <button type="submit">Submit</button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

