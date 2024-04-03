import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UpdateForm( item, onUpdate ) {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    maximumspeed: '',
    priceofcar: '',
    company: '',
    imagelink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://athletes-cars-22.onrender.com/update/${item._id}`, formData);
      onUpdate(res.data);
      navigate('/info'); // Uncommented navigation
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
  <>
    <form onSubmit={handleSubmit}>
       
      <label>Name:</label>
      <input type="text"  onChange={handleChange} />

      <label>Sport:</label>
      <input type="text" value={formData.sport} onChange={handleChange} />

      <label>Max Speed:</label>
      <input type="text" value={formData.maximumspeed} onChange={handleChange} />

      <label>Price of Car:</label>
      <input type="text" value={formData.priceofcar} onChange={handleChange} />

      <label>Company:</label>
      <input type="text" value={formData.company} onChange={handleChange} />

      <label>Image Link:</label>
      <input type="text" value={formData.imagelink} onChange={handleChange} />

      <button type="submit"><Link to="/info">Update Entity</Link></button>
    
    </form>

  </>
  
  );
}

export default UpdateForm;
