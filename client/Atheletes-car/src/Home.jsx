
import './index.css'; 


function Home() {
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
      <h1>ATHELETES SPORTS CAR </h1>
      <p>Here is the list of best atheletes who owns best sports car.
        You will get every information regarding your
        <br></br> favourite and worlds top 
        atheletes in terms of their best sports car. 
      </p>
      <button type="button">Procced</button>

    </div>
    <img src="car.png" className="car-image"></img>

    </div> 

    <div className='imgslider'></div>
   </>
   


  
  );
}

export default Home;