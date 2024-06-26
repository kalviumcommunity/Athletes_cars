import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "", 
        sport: "", 
        maximumspeed: "",
        priceofcar: "", 
        company: "", 
        imagelink: ""  
    });

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const username = sessionStorage.getItem('username');
            
            const formDataWithUsername = {
                ...formData,
                created_by: username
            };

            const response = await axios.post("https://athletes-cars-22.onrender.com/post", formDataWithUsername);
           
            if (response.status === 200) {
                navigate("/info"); 
            } else {
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            console.error("Error:", error.message);
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
                <div className="form-group">
                    <label htmlFor="imagelink">Image Link:</label>
                    <input
                        type="text"
                        id="imagelink"
                        name="imagelink"
                        value={formData.imagelink} 
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
