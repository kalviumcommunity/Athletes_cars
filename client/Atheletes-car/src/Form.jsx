import axios from 'axios';
import { useState } from 'react'; // Import useState hook
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import './Form.css';

function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        personalityName: "", // Corrected key name
        sport: "", // Corrected key name
        maxSpeed: "", // Corrected key name
        priceOfCar: "", // Corrected key name
        companyName: "", // Corrected key name
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            await axios.post("https://server-folder-ftte.onrender.com/new", formData);
            navigate("/"); // Navigate to the desired route after successful submission
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
                        value={formData.personalityName} // Bind value to state
                        onChange={handleChange} // Handle change event
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sport">Sport:</label>
                    <input
                        type="text"
                        id="sport"
                        name="sport"
                        value={formData.sport} // Bind value to state
                        onChange={handleChange} // Handle change event
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxSpeed">Max Speed:</label>
                    <input
                        type="text"
                        id="maxSpeed"
                        name="maxSpeed"
                        value={formData.maxSpeed} // Bind value to state
                        onChange={handleChange} // Handle change event
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="priceOfCar">Price of Car:</label>
                    <input
                        type="text"
                        id="priceOfCar"
                        name="priceOfCar"
                        value={formData.priceOfCar} // Bind value to state
                        onChange={handleChange} // Handle change event
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName} // Bind value to state
                        onChange={handleChange} // Handle change event
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
