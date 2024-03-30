const express = require('express');
const router = express.Router();
const Car = require('./schema');

// Use the JSON middleware before defining routes
router.use(express.json());

router.get('/get', async (req, res) => {
    try {
        const sports = await Car.find({});
        res.status(200).json(sports);
    } catch (err) {
        console.error('error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/post', async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(200).json(newCar);
    } catch (err) {
        console.error('Error creating new car:', err); 
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/put', (req, res) => {
    res.status(204).send();
});

router.delete('/delete', (req, res) => {
    res.status(204).send();
});

module.exports = {
    router: router,
    Car: Car
};
