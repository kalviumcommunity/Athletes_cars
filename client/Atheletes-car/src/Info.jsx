import React from 'react';
import './info.css'; 

function Info(){
    return (
        <div>
            <nav className="navbar">
                <div className="logo"> Top  Athletes  Sports Car</div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
            </nav>
            <div className="info-container">
                <div className="image-info-container">
                    <div className="image-section">
                        <img src="https://www.exclusiveautomotivegroup.com/imagetag/3869/3/l/New-2023-Bentley-Continental-GT-Speed-1701901696.jpg" alt="Bugatti" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="info-section">
                        <p>Name: Virat Kohli</p>
                        <p>Sport : Cricket</p>
                        <p>Max speed: 208 mph</p>
                        <p>Price of car:6.95 crore </p>
                        <p>Company Name - Bentley Motors</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default Info;
