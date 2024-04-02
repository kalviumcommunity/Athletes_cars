import { useState, useEffect } from 'react';
import './info.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function Info() {
    const [data, setData] = useState([]);

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
                            <p>Max speed: {item.maximumspeed} mph</p>
                            <p>Price of car: {item.priceofcar} crore</p>
                            <p>Company Name: {item.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
