import React from 'react';
import './App.css';   



function Home() {
    return (
        <div class="container">
            <nav>
                <img src='AC 2.png'></img>
                <ul>
                    <li><img src='2autocare.png'></img></li>
                    <li>Engine</li>
                    <li>Tyres</li>
                    <li>Brakes</li>
                    <li>Gearbox</li>
                    <li>Cooling</li>

                </ul>
            </nav>
            <div class="content">

                <h1>  Best Sports Car Of Your Favourite  Athlete </h1>
                <p>Here we present the best sports car collection of which 
                    the best and the top Athlete owns.  </p>

                    <button type="button">Procced</button>
            </div>

            <img className='imgcar' src='vecteezy_orange-sports-car-on-transparent-background_26792389.png'></img>
               

            <div class="imgSlider"></div>









            
        </div>
    );
}
export default Home;
