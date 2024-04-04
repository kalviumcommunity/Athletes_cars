const mongoose = require('mongoose');
const Joi = require('joi');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    sport: {
        type: String,
        required: true  
    },
    maximumspeed: {
        type: String,
        required: true  
    },
    priceofcar: {
        type: String,
        required: true  
    },
    company: {
        type: String,
        required: true  
    },
    imagelink: {
        type: String,
    
    }
});




const Car = mongoose.model('sportscar-collection', carSchema);

const carJoiSchema = Joi.object({ 
    name: Joi.string().required(),
    sport: Joi.string().required(),
    maximumspeed: Joi.string().required(),
    priceofcar: Joi.string().required(),
    company: Joi.string().required(),
    imagelink: Joi.string().required()
});






module.exports = {Car, carJoiSchema};
