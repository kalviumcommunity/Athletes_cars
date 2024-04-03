import { useState, useEffect } from 'react';
import { Link, useParams, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateForm() {

  const navigate = useNavigate();

  const { id } = useParams(); // Get the id from the URL params
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    maximumspeed: '',
    priceofcar: '',
    company: '',
    imagelink: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://athletes-cars-22.onrender.com/get/${id}`);
        const carData = res.data; // Assuming res.data is the car object
        setFormData({
          name: carData.name,
          sport: carData.sport,
          maximumspeed: carData.maximumspeed,
          priceofcar: carData.priceofcar,
          company: carData.company,
          imagelink: carData.imagelink
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]); // Fetch data when id changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://athletes-cars-22.onrender.com/update/${id}`, formData);
      navigate('/info')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Sport:</label>
        <input type="text" name="sport" value={formData.sport} onChange={handleChange} />

        <label>Max Speed:</label>
        <input type="text" name="maximumspeed" value={formData.maximumspeed} onChange={handleChange} />

        <label>Price of Car:</label>
        <input type="text" name="priceofcar" value={formData.priceofcar} onChange={handleChange} />

        <label>Company:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />

        <label>Image Link:</label>
        <input type="text" name="imagelink" value={formData.imagelink} onChange={handleChange} />

        <button type="submit">Update Entity</button>
        <Link to="/info">Cancel</Link>
      </form>
    </>
  );
}

export default UpdateForm;
