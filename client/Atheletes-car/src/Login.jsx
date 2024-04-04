import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
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

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
        if (password.length < 6) {
          setLoginMessage("Password should be more than 5 characters");
          return;
        }
  
        const response = await axios.post(`https://server-folder-ftte.onrender.com/Login`, { username, password });
        if (response.status === 200) {
          navigate("/info");
        } else {
          setLoginMessage('Invalid Credentials');
        }
      } catch (err) {
        console.error(err);
        setLoginMessage('Invalid Credentials');
      }
    



   
    window.location.href = '/info';
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

