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
                    <label htmlFor="PersonalityName">name:</label>
                    <input
                        type="text"
                        id="PersonalityName"
                        name="PersonalityName"
                        value={formData.PersonalityName} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Sport">sport:</label>
                    <input
                        type="text"
                        id="Sport"
                        name="Sport"
                        value={formData.Sport} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="MaxSpeed"> maximumspeed:</label>
                    <input
                        type="text"
                        id="MaxSpeed"
                        name="MaxSpeed"
                        value={formData.MaxSpeed} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="PriceOfCar"> priceofcar:</label>
                    <input
                        type="text"
                        id="PriceOfCar"
                        name="PriceOfCar"
                        value={formData.PriceOfCar} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="CompanyName"> company:</label>
                    <input
                        type="text"
                        id="CompanyName"
                        name="CompanyName"
                        value={formData.CompanyName} 
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

