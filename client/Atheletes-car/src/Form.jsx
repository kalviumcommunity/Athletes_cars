import axios from 'axios';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Form.css';

function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        PersonalityName: "", 
        Sport: "", 
        MaxSpeed: "", 
        PriceOfCar: "", 
        CompanyName: "", 
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            await axios.post("https://athletes-cars-1.onrender.com/post", formData);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="personalityName">Personality Name:</label>
                    <input
                        type="text"
                        id="personalityName"
                        name="personalityName"
                        value={formData.personalityName} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sport">Sport:</label>
                    <input
                        type="text"
                        id="sport"
                        name="sport"
                        value={formData.sport} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxSpeed">Max Speed:</label>
                    <input
                        type="text"
                        id="maxSpeed"
                        name="maxSpeed"
                        value={formData.maxSpeed} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="priceOfCar">Price of Car:</label>
                    <input
                        type="text"
                        id="priceOfCar"
                        name="priceOfCar"
                        value={formData.priceOfCar} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName} 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='submit' type="submit">Add Entity</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
