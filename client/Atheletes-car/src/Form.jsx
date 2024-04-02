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

            </form>
        </div>
    );
}

export default Form;

