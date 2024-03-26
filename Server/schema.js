const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    sport: {
        type: String,
        required: true  
    },
    topsportscar: {
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
        required: true  
    }
});

const Car = mongoose.model('sportscar-collection', carSchema);

module.exports = Car;
