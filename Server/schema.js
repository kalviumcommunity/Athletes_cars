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
        type: Number,
        required: true  
    },
    priceofcar: {
        type: Number,
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
    maximumspeed: Joi.number().required(),
    priceofcar: Joi.number().required(),
    company: Joi.string().required(),
    imagelink: Joi.string().required()
});

module.exports = {Car, carJoiSchema};
