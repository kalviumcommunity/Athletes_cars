import axios from 'axios';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Form.css';

function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "", 
        sport: "", 
        maximumspeed: "", 
        priceofcar: "", 
        company: "", 
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            // Send a POST request to the backend API with the form data
            await axios.post("https://athletes-cars-1.onrender.com/post", formData);
            // Redirect to the homepage after successful form submission
            navigate("/");
        } catch (error) {
            // Handle and log any errors that occur during form submission
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the formData state with the new form field value
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name} 
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
                    <label htmlFor="maximumspeed">Maximum Speed:</label>
                    <input
                        type="text"
                        id="maximumspeed"
                        name="maximumspeed"
                        value={formData.maximumspeed} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="priceofcar">Price of Car:</label>
                    <input
                        type="text"
                        id="priceofcar"
                        name="priceofcar"
                        value={formData.priceofcar} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company} 
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


