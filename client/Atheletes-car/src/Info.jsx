import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './info.css';
import Signup from './Signup';

const Info = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showSignup, setShowSignup] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [showdata, setShowData] = useState(true);

  const navigate = useNavigate();
  const login = sessionStorage.getItem('login') === 'true';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://athletes-cars-22.onrender.com/get");
        setData(res.data);
        setFilteredData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://athletes-cars-22.onrender.com/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://athletes-cars-22.onrender.com/delete/${id}`);
      setData(data.filter(item => item._id !== id));
      setFilteredData(filteredData.filter(item => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://athletes-cars-22.onrender.com/logout");
      sessionStorage.removeItem('login');
      setIsLoggedIn(false);

    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectedChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedUser(selectedUser);
    setShowData(false);

    if (selectedUser === "All") {
      setFilteredData(data);
    } else {
      const few = data.filter(el => el.created_by === selectedUser);
      setFilteredData(few);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="auth-buttons">
          {!login && <Link to="/signup" onClick={() => setShowSignup(true)}>Sign Up</Link>}
          {!login && <Link to="/login">Log In</Link>}
          {login && <Link to="/"><button className='login' onClick={() => {
                sessionStorage.removeItem('login');
                setIsLoggedIn(false);
              }}>Logout</button></Link>}
        </div>
        <div className="logo">Top Athletes Sports Car</div>
        <div className="search">  
          <input type="text" placeholder="Search..." />
        </div>
        {login && <Link to="/form">Add Entity</Link>}
      </nav>
      <div className="user-dropdown">
        <select value={selectedUser} onChange={handleSelectedChange}>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user.username}>{user.username}</option>
          ))}
        </select>
      </div>
      <div className="info-container">
        {showdata && data.map((item, index) => (
          <div className="image-info-container" key={index}>
            <div className="image-section">
              <img src={item.imagelink} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="info-section">
              <p>Name: {item.name}</p>
              <p>Sport: {item.sport}</p>
              <p>Max speed: {item.maximumspeed} </p>
              <p>Price of car: {item.priceofcar} </p>
              <p>Company Name: {item.company}</p>
              {login && <Link to={`/update/${item._id}`} onClick={() => handleUpdate(item._id)}>Update</Link>}
              {login && <button onClick={() => handleDelete(item._id)}>Delete</button>}
            </div>
          </div>
        ))}
        {!showdata && filteredData.map((item, index) => (
          <div className="image-info-container" key={index}>
            <div className="image-section">
              <img src={item.imagelink} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="info-section">
              <p>Name: {item.name}</p>
              <p>Sport: {item.sport}</p>
              <p>Max speed: {item.maximumspeed} </p>
              <p>Price of car: {item.priceofcar} </p>
              <p>Company Name: {item.company}</p>
              {login && <Link to={`/update/${item._id}`} onClick={() => handleUpdate(item._id)}>Update</Link>}
              {login && <button onClick={() => handleDelete(item._id)}>Delete</button>}
            </div>
          </div>
        ))}
      </div>
      {showSignup && <Signup />}
    </div>
  );
};

export default Info;
