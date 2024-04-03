import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './info.css';

const Info = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://athletes-cars-22.onrender.com/get");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://athletes-cars-22.onrender.com/delete/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);  
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Top Athletes Sports Car</div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <Link to="/form">Add Entity</Link>
      </nav>
      <div className="info-container">
        {data.map((item, index) => (
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
              <Link to={`/update/${item._id}`} onClick={() => handleUpdate(item._id)}>Update</Link>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
