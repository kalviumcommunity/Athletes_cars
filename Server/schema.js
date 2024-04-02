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

module.exports = Car;
