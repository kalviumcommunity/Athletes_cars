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
    top_sports_car: {
        type: String,
        required: true  
    },
    maximum_speed: {
        type: Number,
        required: true  
    },
    price_of_car: {
        type: Number,
        required: true  
    },
    company: {
        type: String,
        required: true  
    },
    image_link: {
        type: String,
        required: true  
    }
});

const Car = mongoose.model('sportscar-collections', carSchema);

module.exports = Car;
