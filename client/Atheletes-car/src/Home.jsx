import './index.css';
import { useState, useEffect } from 'react';
import carImage from './assets/car.png';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.png';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';

function Home() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="container">
        <nav>
          <a href='#'>HOME</a>
          <a href='#'>ABOUT</a>
          <a href='#'>BEST ENGINE</a>
          <a href='#'>ROYAL SPORTS CAR</a>
          <a href='#'>CONTACT </a>
          <span></span>
        </nav>
        <div className="content">
          <h1>ATHLETES SPORTS CAR </h1>
          <p>Here is the list of best athletes who own the best sports cars. You will get every information regarding your favorite and the worlds top athletes in terms of their best sports car.</p>
          <button type="button">Proceed</button>
        </div>
        <div className="car-one">
          <img src={carImage} alt="" height="300px" />
        </div>
      </div>
      <div className='imgslider' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
    </>
  );
}

export default Home;

