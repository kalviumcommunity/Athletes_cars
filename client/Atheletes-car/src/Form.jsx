
import './Form.css';

function Form() {
    return (
        <div className="form-container">
            <form className="form">
                <div className="form-group">
                    <label htmlFor="personalityName">Personality Name:</label>
                    <input type="text" id="personalityName" name="personalityName" />
                </div>
                <div className="form-group">
                    <label htmlFor="sport">Sport:</label>
                    <input type="text" id="sport" name="sport" />
                </div>
                <div className="form-group">
                    <label htmlFor="maxSpeed">Max Speed:</label>
                    <input type="text" id="maxSpeed" name="maxSpeed" />
                </div>
                <div className="form-group">
                    <label htmlFor="priceOfCar">Price of Car:</label>
                    <input type="text" id="priceOfCar" name="priceOfCar" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" id="companyName" name="companyName" />
                </div>
                <div>

            <button className='submit'>
                Add Entity
            </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
